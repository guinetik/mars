// src/three/MarsScene.js
import * as THREE from 'three'
import { MarsGlobe } from './MarsGlobe.js'
import { MarsAtmosphere } from './MarsAtmosphere.js'
import { MarsLandmarks } from './MarsLandmarks.js'
import { BackgroundStars } from './BackgroundStars.js'
import { MARS_OBLIQUITY_RAD } from './constants'

export class MarsScene {
  scene
  globe
  atmosphere
  landmarks
  stars

  constructor(landmarkData, onTileProgress) {
    this.scene = new THREE.Scene()

    this.globe = new MarsGlobe(onTileProgress)
    this.atmosphere = new MarsAtmosphere()
    this.landmarks = new MarsLandmarks(landmarkData)
    this.stars = new BackgroundStars()

    // Parent group for all Mars-relative layers — tilted to Mars obliquity.
    // Globe, atmosphere, and landmarks all share this tilt so positions align.
    this.marsGroup = new THREE.Group()
    this.marsGroup.rotation.z = MARS_OBLIQUITY_RAD
    this.marsGroup.add(this.globe.root)
    this.marsGroup.add(this.atmosphere.root)
    this.marsGroup.add(this.landmarks.root)
    this.scene.add(this.marsGroup)

    // Stars are not tilted — they are scene-global
    this.scene.add(this.stars.root)

    // Lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2)
    sunLight.position.set(5, 3, 4)
    this.scene.add(sunLight)

    // Hemisphere light — sky/ground gradient so the dark side isn't a void
    const hemiLight = new THREE.HemisphereLight(0x8899aa, 0x443322, 0.4)
    this.scene.add(hemiLight)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15)
    this.scene.add(ambientLight)
  }

  async init() {
    await Promise.all([
      this.globe.init(),
      this.atmosphere.init(),
      this.landmarks.init(),
      this.stars.init(),
    ])
  }

  update(elapsed) {
    this.globe.update(elapsed)
    this.atmosphere.update(elapsed)
    this.landmarks.update(elapsed)
    this.stars.update(elapsed)
  }

  dispose() {
    this.globe.dispose()
    this.atmosphere.dispose()
    this.landmarks.dispose()
    this.stars.dispose()
  }
}
