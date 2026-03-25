<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { colorSchemes, createElevationMaterial } from '@/lib/colorSchemes.js'
import { MarsLandmarks } from '@/three/MarsLandmarks.js'
import { BackgroundStars } from '@/three/BackgroundStars.js'
import { useThreeScene } from '@/composables/useThreeScene.js'
import { useMarsData } from '@/composables/useMarsData.js'
import LandmarkTooltip from '@/components/gis/LandmarkTooltip.vue'
import LandmarkInfoCard from '@/components/gis/LandmarkInfoCard.vue'
import LoadingOverlay from '@/components/gis/LoadingOverlay.vue'
import LandmarkLegend from '@/components/gis/LandmarkLegend.vue'

// --- State ---

const canvasRef = ref(null)
const css2dRef = ref(null)
const isLoading = ref(true)
const activeScheme = ref('elevation')
const hoveredLandmark = ref(null)
const selectedLandmark = ref(null)
const tooltipX = ref(0)
const tooltipY = ref(0)
const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

// --- Scene infrastructure (shared composable, configured for unit-sphere GLB) ---

const {
  init, startLoop, flyTo, getCamera, getPointer, setClickHandler, dispose
} = useThreeScene({
  minDistance: 0.5,
  maxDistance: 20,
  defaultDistance: 3,
  far: 2000,
  clearColor: 0x0a0a0a,
})

const { loadLandmarks } = useMarsData()

// --- Scene objects ---

let scene = null
let elevationMaterial = null
let landmarks = null
let stars = null

function onFilter(hiddenTypes) {
  if (landmarks) landmarks.setFilter(hiddenTypes)
}

function onSchemeChange(schemeId) {
  activeScheme.value = schemeId
  const scheme = colorSchemes.find(s => s.id === schemeId)
  if (scheme && elevationMaterial) elevationMaterial.updateScheme(scheme)
}

// --- Lifecycle ---

onMounted(async () => {
  if (!canvasRef.value || !css2dRef.value) return

  init(canvasRef.value, css2dRef.value)

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0a0a)

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.7))
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
  dirLight.position.set(5, 3, 5)
  scene.add(dirLight)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
  fillLight.position.set(-3, -1, -3)
  scene.add(fillLight)

  // Elevation color material
  const defaultScheme = colorSchemes.find(s => s.id === activeScheme.value)
  elevationMaterial = createElevationMaterial(defaultScheme)

  // Load landmarks while GLB loads
  const landmarkData = await loadLandmarks()

  // Load GLB globe
  const gltf = await loadGLB('/mars_globe.glb')
  const model = gltf.scene

  // Center and scale to unit
  const box = new THREE.Box3().setFromObject(model)
  const center = box.getCenter(new THREE.Vector3())
  model.position.sub(center)
  const maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray())
  const scaleFactor = maxDim > 0 ? 2 / maxDim : 1
  model.scale.setScalar(scaleFactor)

  // Compute elevation range and apply material
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
  scene.add(model)

  // Landmarks
  const globeRadius = (minR + maxR) / 2 * scaleFactor
  landmarks = new MarsLandmarks(landmarkData, globeRadius)
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

  setClickHandler((ptr, cam) => landmarks.clickTest(ptr, cam))

  // Stars — use fewer, further away for the smaller globe
  stars = new BackgroundStars(globeRadius * 40, { count: 6000, pointSize: 0.6 })
  scene.add(stars.root)

  // Start render loop
  startLoop(scene, (elapsed) => {
    const cam = getCamera()
    if (cam && landmarks) {
      landmarks.pick(getPointer(), cam)
      landmarks.updateVisibility(cam)
    }
    if (stars) stars.update(elapsed)
  })

  isLoading.value = false
})

onUnmounted(() => {
  landmarks?.dispose()
  stars?.dispose()
  if (elevationMaterial) {
    elevationMaterial._rampTexture?.dispose()
    elevationMaterial.dispose()
  }
  if (scene) {
    scene.traverse((obj) => {
      if (obj.isMesh) obj.geometry?.dispose()
    })
  }
  dispose()
})

// Escape to close info card
function onKeyDown(e) {
  if (e.key === 'Escape') selectedLandmark.value = null
}
window.addEventListener('keydown', onKeyDown)
onUnmounted(() => window.removeEventListener('keydown', onKeyDown))

// --- Helpers ---

function loadGLB(url) {
  return new Promise((resolve, reject) => {
    new GLTFLoader().load(url, resolve, undefined, reject)
  })
}
</script>

<template>
  <div class="globe-view">
    <canvas ref="canvasRef" />
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
    <LandmarkLegend v-if="!isLoading" @filter="onFilter" />
  </div>
</template>

<style scoped>
.globe-view {
  position: relative;
  width: 100%;
  height: calc(100vh - var(--nav-height));
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
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

.scheme-select:hover,
.scheme-select:focus {
  outline: none;
  border-color: var(--accent);
}
</style>
