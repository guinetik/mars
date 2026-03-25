import * as THREE from 'three'
import {
  GLOBE_RADIUS,
  GLOBE_SEGMENTS,
  CAMERA_MIN_DISTANCE,
  CAMERA_MAX_DISTANCE,
  TILE_BASE_ZOOM,
} from './constants'
import { compositeToCanvas } from '@/lib/areography/tiles.js'

/**
 * Zoom level thresholds: when camera distance drops below the threshold,
 * upgrade to that tile zoom level. Sorted from closest to farthest.
 */
const DETAIL_LEVELS = [
  { maxDistance: GLOBE_RADIUS * 1.5, tileZoom: 5 },
  { maxDistance: GLOBE_RADIUS * 2.5, tileZoom: 4 },
]

export class MarsGlobe {
  root
  material
  texture = null
  textureCanvas = null
  onProgress
  currentTileZoom = TILE_BASE_ZOOM
  upgrading = false

  constructor(onProgress) {
    this.onProgress = onProgress

    this.material = new THREE.MeshStandardMaterial({
      roughness: 0.9,
      metalness: 0.0,
      color: 0x886655,
    })

    const geometry = new THREE.SphereGeometry(GLOBE_RADIUS, GLOBE_SEGMENTS, GLOBE_SEGMENTS)
    this.root = new THREE.Mesh(geometry, this.material)
  }

  async init() {
    this.textureCanvas = await compositeToCanvas(TILE_BASE_ZOOM, this.onProgress)
    this.texture = new THREE.CanvasTexture(this.textureCanvas)
    this.texture.colorSpace = THREE.SRGBColorSpace
    this.material.map = this.texture
    this.material.color.set(0xffffff)
    this.material.needsUpdate = true
  }

  /**
   * Check if camera distance warrants a higher-res tile level.
   * Call from the render loop with current camera distance.
   */
  checkDetailLevel(cameraDistance) {
    if (this.upgrading) return

    let targetZoom = TILE_BASE_ZOOM
    for (const level of DETAIL_LEVELS) {
      if (cameraDistance <= level.maxDistance) {
        targetZoom = level.tileZoom
        break
      }
    }

    if (targetZoom > this.currentTileZoom) {
      this.upgradeToZoom(targetZoom)
    }
  }

  async upgradeToZoom(zoom) {
    this.upgrading = true
    try {
      const canvas = await compositeToCanvas(zoom)
      this.textureCanvas = canvas
      if (this.texture) {
        this.texture.image = canvas
        this.texture.needsUpdate = true
      }
      this.currentTileZoom = zoom
    } finally {
      this.upgrading = false
    }
  }

  update(_elapsed) {}

  dispose() {
    this.root.geometry.dispose()
    this.material.dispose()
    this.texture?.dispose()
  }
}
