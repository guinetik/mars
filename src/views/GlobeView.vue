<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { colorSchemes, createElevationMaterial } from '@/lib/colorSchemes.js'

const container = ref(null)
const loadingText = ref('Loading Mars globe...')
const isLoading = ref(true)
const activeScheme = ref('elevation')

let renderer, scene, camera, controls, animationId
let resizeHandler
let elevationMaterial = null

function onSchemeChange(schemeId) {
  activeScheme.value = schemeId
  const scheme = colorSchemes.find(s => s.id === schemeId)
  if (scheme && elevationMaterial) {
    elevationMaterial.updateScheme(scheme)
  }
}

onMounted(() => {
  const el = container.value
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0a0a)

  camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000)
  camera.position.set(0, 0, 3)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  el.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.minDistance = 0.5
  controls.maxDistance = 20

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
  dirLight.position.set(5, 3, 5)
  scene.add(dirLight)

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
  fillLight.position.set(-3, -1, -3)
  scene.add(fillLight)

  // Create elevation material with default scheme
  const defaultScheme = colorSchemes.find(s => s.id === activeScheme.value)
  elevationMaterial = createElevationMaterial(defaultScheme)

  const loader = new GLTFLoader()
  loader.load(
    '/mars_globe.glb',
    (gltf) => {
      const model = gltf.scene
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      if (maxDim > 0) {
        model.scale.setScalar(2 / maxDim)
      }

      // Compute elevation range from vertex radii
      let minR = Infinity, maxR = -Infinity
      model.traverse((child) => {
        if (child.isMesh) {
          const pos = child.geometry.attributes.position
          for (let i = 0; i < pos.count; i++) {
            const r = Math.sqrt(
              pos.getX(i) ** 2 + pos.getY(i) ** 2 + pos.getZ(i) ** 2
            )
            if (r < minR) minR = r
            if (r > maxR) maxR = r
          }
          child.material = elevationMaterial
        }
      })

      elevationMaterial.setElevationRange(minR, maxR)
      scene.add(model)
      isLoading.value = false
    },
    (progress) => {
      if (progress.total > 0) {
        const pct = ((progress.loaded / progress.total) * 100).toFixed(0)
        loadingText.value = `Loading Mars globe... ${pct}%`
      }
    },
    (error) => {
      loadingText.value = `Error loading globe: ${error.message}`
      console.error('GLB load error:', error)
    }
  )

  resizeHandler = () => {
    const w = el.clientWidth
    const h = el.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', resizeHandler)

  function animate() {
    animationId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeHandler)
  controls?.dispose()
  renderer?.dispose()
  if (elevationMaterial) {
    if (elevationMaterial._rampTexture) elevationMaterial._rampTexture.dispose()
    elevationMaterial.dispose()
  }
  if (scene) {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.geometry?.dispose()
      }
    })
  }
})
</script>

<template>
  <div ref="container" class="globe-container">
    <div v-if="isLoading" class="loading">{{ loadingText }}</div>
    <div v-if="!isLoading" class="controls-panel">
      <label class="control-label">Color</label>
      <select
        :value="activeScheme"
        @change="onSchemeChange($event.target.value)"
        class="scheme-select"
      >
        <option v-for="s in colorSchemes" :key="s.id" :value="s.id">{{ s.name }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.globe-container {
  width: 100%;
  height: calc(100vh - var(--nav-height));
  position: relative;
  overflow: hidden;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.875rem;
}

.controls-panel {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  border-radius: 6px;
  z-index: 10;
}

.control-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.scheme-select {
  appearance: none;
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.3rem 1.5rem 0.3rem 0.5rem;
  font-family: var(--font);
  font-size: 0.8rem;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23888'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
}

.scheme-select:hover {
  border-color: var(--accent);
}

.scheme-select:focus {
  outline: none;
  border-color: var(--accent);
}
</style>
