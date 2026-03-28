<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
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

// --- Constants ---

const R2_BASE = 'https://pub-3ae55587a05a4c0bb0a9fde6b0847d45.r2.dev'
const QUALITY_OPTIONS = [
  { id: 'standard', url: `${R2_BASE}/mars_globe.glb` },
  { id: 'high', url: `${R2_BASE}/mars_globe_4km.glb` },
]

// --- State ---

const canvasRef = ref(null)
const css2dRef = ref(null)
const isLoading = ref(true)
const isLoadingHd = ref(false)
const activeScheme = ref('elevation')
const activeQuality = ref('standard')
const hoveredLandmark = ref(null)
const selectedLandmark = ref(null)
const tooltipX = ref(0)
const tooltipY = ref(0)
const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
const router = useRouter()

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
let currentModel = null

function onFilter(hiddenTypes) {
  if (landmarks) landmarks.setFilter(hiddenTypes)
}

function onSchemeChange(schemeId) {
  activeScheme.value = schemeId
  const scheme = colorSchemes.find(s => s.id === schemeId)
  if (scheme && elevationMaterial) elevationMaterial.updateScheme(scheme)
}

// --- Globe loading ---

let lastGlobeRadius = 1
const globeCache = new Map() // url → prepared model + metadata

function prepareModel(gltf) {
  const model = gltf.scene

  // Center and scale to unit
  const box = new THREE.Box3().setFromObject(model)
  const center = box.getCenter(new THREE.Vector3())
  model.position.sub(center)
  const maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray())
  const scaleFactor = maxDim > 0 ? 2 / maxDim : 1
  model.scale.setScalar(scaleFactor)

  // Compute elevation range
  let minR = Infinity, maxR = -Infinity
  model.traverse((child) => {
    if (child.isMesh) {
      const pos = child.geometry.attributes.position
      for (let i = 0; i < pos.count; i++) {
        const r = Math.sqrt(pos.getX(i) ** 2 + pos.getY(i) ** 2 + pos.getZ(i) ** 2)
        if (r < minR) minR = r
        if (r > maxR) maxR = r
      }
    }
  })

  const radius = (minR + maxR) / 2 * scaleFactor
  return { model, minR, maxR, radius }
}

function swapModel(entry) {
  // Remove previous model from scene (don't dispose — it's cached)
  if (currentModel) scene.remove(currentModel)

  // Apply current material
  entry.model.traverse((child) => {
    if (child.isMesh) child.material = elevationMaterial
  })
  elevationMaterial.setElevationRange(entry.minR, entry.maxR)
  elevationMaterial.needsUpdate = true

  lastGlobeRadius = entry.radius
  currentModel = entry.model
  scene.add(entry.model)
}

function loadGlobe(url) {
  // Return cached immediately
  if (globeCache.has(url)) {
    swapModel(globeCache.get(url))
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    new GLTFLoader().load(url, (gltf) => {
      const entry = prepareModel(gltf)
      globeCache.set(url, entry)
      swapModel(entry)
      resolve()
    }, undefined, reject)
  })
}

async function onQualityChange(qualityId) {
  if (qualityId === activeQuality.value) return
  const opt = QUALITY_OPTIONS.find(q => q.id === qualityId)
  if (!opt) return

  activeQuality.value = qualityId
  isLoadingHd.value = true

  try {
    await loadGlobe(opt.url)
  } catch (e) {
    console.error('Failed to load globe:', e)
    activeQuality.value = activeQuality.value === 'standard' ? 'high' : 'standard'
  }

  isLoadingHd.value = false
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

  // Load initial globe from R2
  await loadGlobe(QUALITY_OPTIONS[0].url)

  // Landmarks
  landmarks = new MarsLandmarks(landmarkData, lastGlobeRadius)
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

  // Stars
  stars = new BackgroundStars(lastGlobeRadius * 40, { count: 6000, pointSize: 0.6 })
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

</script>

<template>
  <div class="globe-view">
    <canvas ref="canvasRef" />
    <div ref="css2dRef" class="css2d-overlay" />

    <LoadingOverlay :is-loading="isLoading" :loaded="0" :total="0" />

    <div v-if="!isLoading" class="controls-panel controls-left">
      <label class="control-label">{{ $t('globe.qualityLabel') }}</label>
      <select
        :value="activeQuality"
        :disabled="isLoadingHd"
        @change="onQualityChange($event.target.value)"
        class="scheme-select"
      >
        <option value="standard">{{ $t('globe.qualityStandard') }}</option>
        <option value="high">{{ $t('globe.qualityHigh') }}</option>
      </select>
    </div>

    <Transition name="hd-toast">
      <div v-if="isLoadingHd" class="hd-loading">{{ $t('globe.loadingHd') }}</div>
    </Transition>

    <div v-if="!isLoading" class="controls-panel">
      <label class="control-label">{{ $t('globe.colorLabel') }}</label>
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
      @explore-rover="(lm) => router.push(`/explore/${lm.id}`)"
      @explore-foot="(lm) => router.push(`/explore-fps/${lm.id}`)"
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

.scheme-select:disabled {
  opacity: 0.5;
  cursor: wait;
}

.controls-left {
  right: auto;
  left: 1rem;
}

.hd-loading {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.4rem 1rem;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--text-secondary);
  letter-spacing: 0.06em;
  z-index: 10;
  white-space: nowrap;
}

.hd-toast-enter-active { transition: opacity 0.2s, transform 0.2s; }
.hd-toast-leave-active { transition: opacity 0.15s, transform 0.15s; }
.hd-toast-enter-from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
.hd-toast-leave-to { opacity: 0; transform: translateX(-50%) translateY(-8px); }

@media (max-width: 430px) {
  .controls-panel {
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.3rem 0.5rem;
  }

  .control-label {
    font-size: 0.6rem;
  }

  .scheme-select {
    font-size: 0.7rem;
    padding: 0.25rem 1.2rem 0.25rem 0.4rem;
  }

  .controls-left {
    left: 0.5rem;
  }

  .hd-loading {
    font-size: 0.65rem;
  }
}
</style>
