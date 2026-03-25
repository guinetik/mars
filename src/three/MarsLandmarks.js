// src/three/MarsLandmarks.js
import * as THREE from 'three'
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
import { latLonToCartesian, surfaceNormal } from '@/lib/areography/coordinates.js'
import { GLOBE_RADIUS, FLY_TO_DISTANCE } from './constants.js'

const PIN_SCALE = 0.012        // pin head size relative to globe radius
const SPIKE_SCALE = 0.04       // spike height relative to globe radius
const RING_SCALE = 0.02        // glow ring radius relative to globe radius
const PICK_THROTTLE_FRAMES = 3

export class MarsLandmarks {
  root
  raycaster = new THREE.Raycaster()
  pinMeshes = []
  labelObjects = []
  normals = []
  landmarkMap = new Map()
  pinGeometry = null
  frameCount = 0
  hoveredMesh = null
  _worldPos = new THREE.Vector3()
  _camDir = new THREE.Vector3()

  onHover = null
  onClick = null

  /**
   * @param {Array} landmarks - landmark data
   * @param {number} [radius] - globe radius (defaults to GLOBE_RADIUS from constants)
   */
  constructor(landmarks, radius) {
    this.landmarks = landmarks
    this.radius = radius ?? GLOBE_RADIUS
    this.root = new THREE.Group()
  }

  async init() {
    const headRadius = this.radius * PIN_SCALE
    const spikeHeight = this.radius * SPIKE_SCALE
    const ringRadius = this.radius * RING_SCALE

    // Shared geometries
    this.pinGeometry = new THREE.SphereGeometry(headRadius, 12, 12)
    const spikeGeo = new THREE.ConeGeometry(headRadius * 0.4, spikeHeight, 8)
    spikeGeo.translate(0, spikeHeight / 2, 0)
    const ringGeo = new THREE.RingGeometry(ringRadius * 0.6, ringRadius, 24)

    for (const landmark of this.landmarks) {
      const normal = surfaceNormal(landmark.lat, landmark.lon)
      const surfacePos = latLonToCartesian(landmark.lat, landmark.lon, this.radius * 1.002)
      const color = new THREE.Color(landmark.accent)

      // Pin group — spike + head, oriented along surface normal
      const pinGroup = new THREE.Group()

      // Spike (tapered cone from surface upward)
      const spikeMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5,
      })
      const spike = new THREE.Mesh(spikeGeo, spikeMat)
      pinGroup.add(spike)

      // Head (glassy sphere at top of spike)
      const headMat = new THREE.MeshPhongMaterial({
        color,
        transparent: true,
        opacity: 0.7,
        shininess: 80,
        emissive: color,
        emissiveIntensity: 0.3,
      })
      const head = new THREE.Mesh(this.pinGeometry, headMat)
      head.position.y = spikeHeight + headRadius * 0.5
      pinGroup.add(head)

      // Base ring (subtle glow on surface)
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.position.y = -0.001 // slightly below spike base
      pinGroup.add(ring)

      // Orient pin group to point along surface normal
      pinGroup.position.copy(surfacePos)
      const up = new THREE.Vector3(0, 1, 0)
      const quat = new THREE.Quaternion().setFromUnitVectors(up, normal)
      pinGroup.quaternion.copy(quat)

      this.root.add(pinGroup)
      this.pinMeshes.push(head) // raycasting targets the head
      this.landmarkMap.set(head, landmark)

      // CSS2D label — positioned above the head
      const labelDiv = document.createElement('div')
      labelDiv.className = 'landmark-label'
      labelDiv.textContent = landmark.name
      labelDiv.style.color = landmark.accent
      labelDiv.style.fontFamily = 'Inter, system-ui, sans-serif'
      labelDiv.style.fontSize = '11px'
      labelDiv.style.fontWeight = '500'
      labelDiv.style.letterSpacing = '0.06em'
      labelDiv.style.textShadow = '0 1px 6px rgba(0,0,0,0.9)'
      labelDiv.style.pointerEvents = 'none'
      labelDiv.style.whiteSpace = 'nowrap'

      const label = new CSS2DObject(labelDiv)
      const labelOffset = spikeHeight + headRadius * 2
      label.position.copy(surfacePos).addScaledVector(normal, labelOffset)
      this.root.add(label)

      this.labelObjects.push(label)
      this.normals.push(normal)
    }

    spikeGeo.dispose()
    ringGeo.dispose()
  }

  getLandmarkTarget(id) {
    const landmark = this.landmarks.find(l => l.id === id)
    if (!landmark) return null
    const position = latLonToCartesian(landmark.lat, landmark.lon, this.radius)
    return { position, distance: this.radius * 0.6 }
  }

  pick(pointer, camera) {
    this.frameCount++
    if (this.frameCount % PICK_THROTTLE_FRAMES !== 0) return

    this.raycaster.setFromCamera(pointer, camera)
    const intersects = this.raycaster.intersectObjects(this.pinMeshes)

    if (intersects.length > 0) {
      const mesh = intersects[0].object
      if (mesh !== this.hoveredMesh) {
        this.hoveredMesh = mesh
        const landmark = this.landmarkMap.get(mesh)
        const screenPos = intersects[0].point.clone().project(camera)
        const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth
        const y = (-screenPos.y * 0.5 + 0.5) * window.innerHeight
        this.onHover?.({ landmark, screenX: x, screenY: y })
      }
    } else if (this.hoveredMesh) {
      this.hoveredMesh = null
      this.onHover?.(null)
    }
  }

  clickTest(pointer, camera) {
    this.raycaster.setFromCamera(pointer, camera)
    const intersects = this.raycaster.intersectObjects(this.pinMeshes)
    if (intersects.length > 0) {
      const mesh = intersects[0].object
      const landmark = this.landmarkMap.get(mesh)
      if (landmark) this.onClick?.(landmark)
    }
  }

  /**
   * Hide landmarks on the far side of the globe by checking the dot product
   * between the landmark's world-space normal and the camera direction.
   */
  updateVisibility(camera) {
    for (let i = 0; i < this.pinMeshes.length; i++) {
      const pin = this.pinMeshes[i]
      const label = this.labelObjects[i]
      const normal = this.normals[i]

      // Get world position of the pin and compute direction to camera
      pin.getWorldPosition(this._worldPos)
      this._camDir.copy(camera.position).sub(this._worldPos).normalize()

      // Transform the local normal into world space (account for marsGroup rotation)
      const worldNormal = normal.clone().applyQuaternion(this.root.getWorldQuaternion(new THREE.Quaternion()))

      const dot = worldNormal.dot(this._camDir)
      const visible = dot > 0.05 // small threshold to hide at grazing angles

      pin.visible = visible
      label.visible = visible
    }
  }

  update(_elapsed) {}

  dispose() {
    this.pinGeometry?.dispose()
    this.root.traverse((obj) => {
      if (obj.isMesh) {
        obj.material?.dispose()
      }
    })
  }
}
