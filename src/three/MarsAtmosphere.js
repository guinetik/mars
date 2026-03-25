// src/three/MarsAtmosphere.js
import * as THREE from 'three'
import { ATMOSPHERE_RADIUS, GLOBE_SEGMENTS, ATMOSPHERE_COLOR, ATMOSPHERE_FRESNEL_POWER } from './constants'
import atmosphereVertexShader from './shaders/atmosphere.vert.glsl?raw'
import atmosphereFragmentShader from './shaders/atmosphere.frag.glsl?raw'

export class MarsAtmosphere {
  root

  constructor() {
    const geometry = new THREE.SphereGeometry(ATMOSPHERE_RADIUS, GLOBE_SEGMENTS, GLOBE_SEGMENTS)
    const material = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uAtmosphereColor: { value: new THREE.Color(...ATMOSPHERE_COLOR) },
        uFresnelPower: { value: ATMOSPHERE_FRESNEL_POWER },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    })

    this.root = new THREE.Mesh(geometry, material)
  }

  async init() {}

  update(_elapsed) {}

  dispose() {
    this.root.geometry.dispose()
    this.root.material.dispose()
  }
}
