// src/three/MarsLandmarks.js
import * as THREE from 'three'
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
import { latLonToCartesian, surfaceNormal } from '@/lib/areography/coordinates.js'
import { GLOBE_RADIUS, FLY_TO_DISTANCE } from './constants.js'

const BEAM_HEIGHT = 0.06       // beam height relative to globe radius
const BEAM_WIDTH = 0.002       // beam width relative to globe radius
const RING_SCALE = 0.012       // glow ring radius relative to globe radius
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
    const beamHeight = this.radius * BEAM_HEIGHT
    const beamWidth = this.radius * BEAM_WIDTH
    const ringRadius = this.radius * RING_SCALE

    // Shared geometries
    const beamGeo = new THREE.PlaneGeometry(beamWidth, beamHeight)
    beamGeo.translate(0, beamHeight / 2, 0)
    const ringGeo = new THREE.RingGeometry(ringRadius * 0.3, ringRadius, 24)
    // Small invisible sphere for raycasting — much easier to click than a thin beam
    this.pinGeometry = new THREE.SphereGeometry(beamHeight * 0.4, 6, 6)

    for (const landmark of this.landmarks) {
      const normal = surfaceNormal(landmark.lat, landmark.lon)
      const surfacePos = latLonToCartesian(landmark.lat, landmark.lon, this.radius * 1.001)
      const color = new THREE.Color(landmark.accent)

      const pinGroup = new THREE.Group()

      // Light beam — two crossed planes for visibility from any angle
      const beamMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
      const beam1 = new THREE.Mesh(beamGeo, beamMat)
      const beam2 = new THREE.Mesh(beamGeo, beamMat)
      beam2.rotation.y = Math.PI / 2
      pinGroup.add(beam1)
      pinGroup.add(beam2)

      // Base ring
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      pinGroup.add(ring)

      // Invisible hit target for raycasting
      const hitMat = new THREE.MeshBasicMaterial({ visible: false })
      const hitSphere = new THREE.Mesh(this.pinGeometry, hitMat)
      hitSphere.position.y = beamHeight * 0.5
      pinGroup.add(hitSphere)

      // Orient along surface normal
      pinGroup.position.copy(surfacePos)
      const quat = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0), normal
      )
      pinGroup.quaternion.copy(quat)

      this.root.add(pinGroup)
      this.pinMeshes.push(hitSphere)
      this.landmarkMap.set(hitSphere, landmark)

      // Label
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
      label.position.copy(surfacePos).addScaledVector(normal, beamHeight * 1.1)
      this.root.add(label)

      this.labelObjects.push(label)
      this.normals.push(normal)
    }

    beamGeo.dispose()
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
