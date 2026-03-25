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
    id: 'hypsometric',
    name: 'Hypsometric',
    stops: [
      { t: 0.00, color: '#0000aa' },
      { t: 0.15, color: '#0044cc' },
      { t: 0.25, color: '#00aacc' },
      { t: 0.35, color: '#00cc66' },
      { t: 0.45, color: '#44dd00' },
      { t: 0.55, color: '#ccdd00' },
      { t: 0.65, color: '#ffcc00' },
      { t: 0.75, color: '#ff8800' },
      { t: 0.85, color: '#ff3300' },
      { t: 0.95, color: '#cc0000' },
      { t: 1.00, color: '#880000' },
    ]
  },
  {
    id: 'elevation',
    name: 'Elevation',
    stops: [
      { t: 0.00, color: '#7a4a30' },
      { t: 0.12, color: '#8b5a3a' },
      { t: 0.25, color: '#a06840' },
      { t: 0.40, color: '#c08050' },
      { t: 0.55, color: '#d8a070' },
      { t: 0.68, color: '#e0b888' },
      { t: 0.80, color: '#ecd0a0' },
      { t: 0.92, color: '#f5e0c0' },
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
      uLightDir: { value: new THREE.Vector3(5, 3, 5).normalize() },
      uFillDir: { value: new THREE.Vector3(-3, -1, -3).normalize() },
    },
    vertexShader: /* glsl */`
      varying float vRadius;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      void main() {
        vRadius = length(position);
        vNormal = normalize(normalMatrix * normal);
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform sampler2D uRamp;
      uniform float uMinRadius;
      uniform float uMaxRadius;
      uniform vec3 uLightDir;
      uniform vec3 uFillDir;
      varying float vRadius;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      void main() {
        float t = clamp((vRadius - uMinRadius) / (uMaxRadius - uMinRadius), 0.0, 1.0);
        vec3 baseColor = texture2D(uRamp, vec2(t, 0.5)).rgb;

        // Diffuse lighting: main light + fill light + ambient
        vec3 n = normalize(vNormal);
        float diffuse = max(dot(n, uLightDir), 0.0);
        float fill = max(dot(n, uFillDir), 0.0) * 0.35;
        float ambient = 0.25;
        float lighting = ambient + diffuse * 0.55 + fill;

        gl_FragColor = vec4(baseColor * lighting, 1.0);
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
