<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const container = ref(null)
const loadingText = ref('Loading Mars globe...')
const isLoading = ref(true)

let renderer, scene, camera, controls, animationId
let resizeHandler

onMounted(() => {
  const el = container.value
  const width = el.clientWidth
  const height = el.clientHeight

  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0a0a)

  // Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000)
  camera.position.set(0, 0, 3)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  el.appendChild(renderer.domElement)

  // Controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.minDistance = 0.5
  controls.maxDistance = 20

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
  dirLight.position.set(5, 3, 5)
  scene.add(dirLight)

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
  fillLight.position.set(-3, -1, -3)
  scene.add(fillLight)

  // Load globe
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
      model.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: 0xcccccc,
            flatShading: false,
            shininess: 0
          })
        }
      })
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

  // Resize
  resizeHandler = () => {
    const w = el.clientWidth
    const h = el.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', resizeHandler)

  // Render loop
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
  if (scene) {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.geometry?.dispose()
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose())
          } else {
            obj.material.dispose()
          }
        }
      }
    })
  }
})
</script>

<template>
  <div ref="container" class="globe-container">
    <div v-if="isLoading" class="loading">{{ loadingText }}</div>
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
</style>
