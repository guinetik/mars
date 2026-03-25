<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js'
import { colorSchemes, createElevationMaterial } from '@/lib/colorSchemes.js'
import { MarsLandmarks } from '@/three/MarsLandmarks.js'
import { BackgroundStars } from '@/three/BackgroundStars.js'
import { useMarsData } from '@/composables/useMarsData.js'
import LandmarkTooltip from '@/components/gis/LandmarkTooltip.vue'
import LandmarkInfoCard from '@/components/gis/LandmarkInfoCard.vue'
import LoadingOverlay from '@/components/gis/LoadingOverlay.vue'

const container = ref(null)
const css2dRef = ref(null)
const isLoading = ref(true)
const activeScheme = ref('elevation')

// Landmark state
const hoveredLandmark = ref(null)
const selectedLandmark = ref(null)
const tooltipX = ref(0)
const tooltipY = ref(0)
const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

const { loadLandmarks } = useMarsData()

let renderer, css2dRenderer, scene, camera, controls, animationId
let resizeHandler, keyHandler
let elevationMaterial = null
let landmarks = null
let stars = null
const pointer = new THREE.Vector2(-999, -999)

// Fly-to state
let flyToActive = false
let flyToStart = 0
let flyToStartPos = new THREE.Vector3()
let flyToEndPos = new THREE.Vector3()
let flyToStartTarget = new THREE.Vector3()
let flyToEndTarget = new THREE.Vector3()
let clock = null
const FLY_DURATION = 1.5

function onSchemeChange(schemeId) {
  activeScheme.value = schemeId
  const scheme = colorSchemes.find(s => s.id === schemeId)
  if (scheme && elevationMaterial) {
    elevationMaterial.updateScheme(scheme)
  }
}

function flyTo(targetPosition, distance) {
  if (!camera || !controls || !clock) return
  flyToActive = true
  flyToStart = clock.getElapsedTime()
  flyToStartPos.copy(camera.position)
  flyToStartTarget.copy(controls.target)
  flyToEndTarget.copy(targetPosition)
  const direction = targetPosition.clone().normalize()
  flyToEndPos.copy(targetPosition).addScaledVector(direction, distance)
  controls.enabled = false
}

onMounted(async () => {
  const el = container.value
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0a0a)
  clock = new THREE.Clock()

  camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 2000)
  camera.position.set(0, 0, 3)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  el.appendChild(renderer.domElement)

  // CSS2D renderer for landmark labels
  css2dRenderer = new CSS2DRenderer({ element: css2dRef.value })
  css2dRenderer.setSize(width, height)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.minDistance = 0.5
  controls.maxDistance = 20
  controls.enableZoom = false // we handle zoom manually for smooth lerp

  // Reset orbit target to origin when user starts interacting
  controls.addEventListener('start', () => {
    controls.target.set(0, 0, 0)
  })

  // Smooth zoom
  let targetDistance = camera.position.length()
  const ZOOM_LERP = 0.08
  const ZOOM_FACTOR = 0.08

  el.addEventListener('wheel', (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 1 : -1
    targetDistance *= 1 + delta * ZOOM_FACTOR
    targetDistance = Math.max(0.5, Math.min(20, targetDistance))
  }, { passive: false })

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(ambientLight)
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
  dirLight.position.set(5, 3, 5)
  scene.add(dirLight)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
  fillLight.position.set(-3, -1, -3)
  scene.add(fillLight)

  const defaultScheme = colorSchemes.find(s => s.id === activeScheme.value)
  elevationMaterial = createElevationMaterial(defaultScheme)

  // Load landmarks data while GLB loads
  const landmarkData = await loadLandmarks()

  const loader = new GLTFLoader()
  loader.load(
    '/mars_globe.glb',
    async (gltf) => {
      const model = gltf.scene
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scaleFactor = maxDim > 0 ? 2 / maxDim : 1
      model.scale.setScalar(scaleFactor)

      // Compute elevation range and find effective globe radius
      let minR = Infinity, maxR = -Infinity
      model.traverse((child) => {
        if (child.isMesh) {
          const pos = child.geometry.attributes.position
          for (let i = 0; i < pos.count; i++) {
            const r = Math.sqrt(pos.getX(i) ** 2 + pos.getY(i) ** 2 + pos.getZ(i) ** 2)
            if (r < minR) minR = r
            if (r > maxR) maxR = r
          }
          child.material = elevationMaterial
        }
      })
      elevationMaterial.setElevationRange(minR, maxR)

      // The mean radius after scaling is roughly 1.0 (unit sphere scaled to fit)
      const meanRadius = (minR + maxR) / 2 * scaleFactor
      scene.add(model)

      // Add landmarks at the scaled globe radius
      landmarks = new MarsLandmarks(landmarkData, meanRadius)
      landmarks.onHover = (event) => {
        if (event) {
          hoveredLandmark.value = event.landmark
          tooltipX.value = event.screenX
          tooltipY.value = event.screenY
        } else {
          hoveredLandmark.value = null
        }
      }
      landmarks.onClick = (landmark) => {
        selectedLandmark.value = landmark
        const target = landmarks.getLandmarkTarget(landmark.id)
        if (target) flyTo(target.position, target.distance)
      }
      await landmarks.init()
      scene.add(landmarks.root)

      // Stars — scale to ~80x the globe radius
      stars = new BackgroundStars(meanRadius * 80)
      scene.add(stars.root)

      isLoading.value = false
    },
    undefined,
    (error) => {
      isLoading.value = false
      console.error('GLB load error:', error)
    }
  )

  // Pointer tracking
  el.addEventListener('pointermove', (e) => {
    pointer.x = (e.offsetX / el.clientWidth) * 2 - 1
    pointer.y = -(e.offsetY / el.clientHeight) * 2 + 1
  })
  el.addEventListener('click', () => {
    if (landmarks && camera) {
      landmarks.clickTest(pointer, camera)
    }
  })

  resizeHandler = () => {
    const w = el.clientWidth
    const h = el.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    css2dRenderer.setSize(w, h)
  }
  window.addEventListener('resize', resizeHandler)

  keyHandler = (e) => {
    if (e.key === 'Escape') selectedLandmark.value = null
  }
  window.addEventListener('keydown', keyHandler)

  function animate() {
    animationId = requestAnimationFrame(animate)
    const elapsed = clock.getElapsedTime()

    // Fly-to animation
    if (flyToActive) {
      const t = Math.min(1, (elapsed - flyToStart) / FLY_DURATION)
      const eased = t * t * (3 - 2 * t)
      camera.position.lerpVectors(flyToStartPos, flyToEndPos, eased)
      controls.target.lerpVectors(flyToStartTarget, flyToEndTarget, eased)
      if (t >= 1) {
        flyToActive = false
        controls.enabled = true
        targetDistance = camera.position.distanceTo(controls.target)
      }
    }

    // Smooth zoom lerp
    if (!flyToActive) {
      const dir = camera.position.clone().sub(controls.target).normalize()
      const currentDist = camera.position.distanceTo(controls.target)
      const newDist = currentDist + (targetDistance - currentDist) * ZOOM_LERP
      camera.position.copy(controls.target).addScaledVector(dir, newDist)
    }

    controls.update()

    // Update landmarks + stars
    if (landmarks && camera) {
      landmarks.pick(pointer, camera)
      landmarks.updateVisibility(camera)
    }
    if (stars) stars.update(elapsed)

    renderer.render(scene, camera)
    css2dRenderer.render(scene, camera)
  }
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeHandler)
  window.removeEventListener('keydown', keyHandler)
  controls?.dispose()
  renderer?.dispose()
  landmarks?.dispose()
  stars?.dispose()
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
    <div ref="css2dRef" class="css2d-overlay" />
    <LoadingOverlay :is-loading="isLoading" :loaded="0" :total="0" />
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
    <LandmarkTooltip
      v-if="!isMobile"
      :landmark="hoveredLandmark"
      :x="tooltipX"
      :y="tooltipY"
    />
    <LandmarkInfoCard
      :landmark="selectedLandmark"
      @close="selectedLandmark = null"
    />
  </div>
</template>

<style scoped>
.globe-container {
  width: 100%;
  height: calc(100vh - var(--nav-height));
  position: relative;
  overflow: hidden;
}

.css2d-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
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
