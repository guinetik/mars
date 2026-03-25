/**
 * Globe color schemes registry.
 *
 * Each scheme has:
 *   id    — unique key
 *   name  — display label
 *   stops — array of { t, color } where t is [0,1] (low to high elevation)
 *
 * To add a new scheme, just push to this array.
 */
import * as THREE from 'three'

export const colorSchemes = [
  {
    id: 'marble',
    name: 'Marble',
    stops: [
      { t: 0.0, color: '#cccccc' },
      { t: 1.0, color: '#cccccc' },
    ]
  },
  {
    id: 'elevation',
    name: 'Elevation',
    stops: [
      { t: 0.00, color: '#1a0a2e' },
      { t: 0.15, color: '#2d1b4e' },
      { t: 0.28, color: '#8b4513' },
      { t: 0.40, color: '#cd853f' },
      { t: 0.55, color: '#deb887' },
      { t: 0.70, color: '#d2b48c' },
      { t: 0.85, color: '#f5deb3' },
      { t: 0.95, color: '#ffffff' },
      { t: 1.00, color: '#ffffff' },
    ]
  },
]

/**
 * Build a DataTexture color ramp (1D, 256 pixels) from a scheme's stops.
 */
export function buildRampTexture(scheme) {
  const size = 256
  const data = new Uint8Array(size * 4)
  const colors = scheme.stops.map(s => ({ t: s.t, c: new THREE.Color(s.color) }))

  for (let i = 0; i < size; i++) {
    const t = i / (size - 1)
    // Find the two stops we're between
    let lo = colors[0], hi = colors[colors.length - 1]
    for (let j = 0; j < colors.length - 1; j++) {
      if (t >= colors[j].t && t <= colors[j + 1].t) {
        lo = colors[j]
        hi = colors[j + 1]
        break
      }
    }
    const range = hi.t - lo.t
    const f = range > 0 ? (t - lo.t) / range : 0
    const r = lo.c.r + (hi.c.r - lo.c.r) * f
    const g = lo.c.g + (hi.c.g - lo.c.g) * f
    const b = lo.c.b + (hi.c.b - lo.c.b) * f

    data[i * 4] = Math.round(r * 255)
    data[i * 4 + 1] = Math.round(g * 255)
    data[i * 4 + 2] = Math.round(b * 255)
    data[i * 4 + 3] = 255
  }

  const tex = new THREE.DataTexture(data, size, 1, THREE.RGBAFormat)
  tex.needsUpdate = true
  return tex
}

/**
 * Create a ShaderMaterial that colors vertices by radial distance (elevation).
 * Call updateScheme() to swap color ramps without rebuilding the material.
 */
export function createElevationMaterial(scheme) {
  const ramp = buildRampTexture(scheme)

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uRamp: { value: ramp },
      uMinRadius: { value: 0.0 },
      uMaxRadius: { value: 1.0 },
    },
    vertexShader: /* glsl */`
      varying float vRadius;
      void main() {
        vRadius = length(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform sampler2D uRamp;
      uniform float uMinRadius;
      uniform float uMaxRadius;
      varying float vRadius;
      void main() {
        float t = clamp((vRadius - uMinRadius) / (uMaxRadius - uMinRadius), 0.0, 1.0);
        vec4 color = texture2D(uRamp, vec2(t, 0.5));
        gl_FragColor = color;
      }
    `,
  })

  material._rampTexture = ramp

  material.updateScheme = (newScheme) => {
    if (material._rampTexture) material._rampTexture.dispose()
    const newRamp = buildRampTexture(newScheme)
    material.uniforms.uRamp.value = newRamp
    material._rampTexture = newRamp
  }

  material.setElevationRange = (min, max) => {
    material.uniforms.uMinRadius.value = min
    material.uniforms.uMaxRadius.value = max
  }

  return material
}
