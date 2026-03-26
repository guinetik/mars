<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useFpsControls } from '@/composables/useFpsControls.js'
import { useMarsData } from '@/composables/useMarsData.js'
import { colorSchemes, createTerrainElevationMaterial } from '@/lib/colorSchemes.js'
import {
  TERRAIN_SCALE,
  TERRAIN_FOG_COLOR,
  TERRAIN_SKY_COLOR,
  TERRAIN_SUN_COLOR,
  TERRAIN_AMBIENT_COLOR,
  TERRAIN_PLAYER_HEIGHT,
  EXPLORABLE_LANDMARKS,
} from '@/three/constants.js'

const R2_BASE = 'https://pub-3ae55587a05a4c0bb0a9fde6b0847d45.r2.dev'

const route = useRoute()
const router = useRouter()
const canvasRef = ref(null)

const isLoading = ref(true)
const showControls = ref(true)
const landmarkName = ref('')
const landmarkCoords = ref('')
const isValid = ref(true)
const isMobile = ref(false)
const isLocked = ref(false)

let renderer = null
let scene = null
let camera = null
let clock = null
let animationId = 0
let fps = null
let controlsTimeout = null

function goBack() {
  router.push('/')
}

onMounted(async () => {
  const landmarkId = route.params.landmarkId

  // Check mobile
  isMobile.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  if (isMobile.value) {
    isLoading.value = false
    return
  }

  // Validate landmark
  if (!EXPLORABLE_LANDMARKS.includes(landmarkId)) {
    isValid.value = false
    isLoading.value = false
    return
  }

  // Load landmark data for name/coords
  const { loadLandmarks } = useMarsData()
  const landmarks = await loadLandmarks()
  const landmark = landmarks.find(l => l.id === landmarkId)
  if (landmark) {
    landmarkName.value = landmark.name
    landmarkCoords.value = `${landmark.lat.toFixed(2)}°, ${landmark.lon.toFixed(2)}°`
  } else {
    landmarkName.value = landmarkId.replace(/-/g, ' ')
  }

  // Setup Three.js
  const canvas = canvasRef.value
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
  renderer.setClearColor(TERRAIN_SKY_COLOR, 1)

  camera = new THREE.PerspectiveCamera(
    70,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    2000
  )

  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(TERRAIN_FOG_COLOR, 0.003)

  // Lighting
  const sun = new THREE.DirectionalLight(TERRAIN_SUN_COLOR, 2)
  sun.position.set(200, 400, 100)
  scene.add(sun)

  const ambient = new THREE.AmbientLight(TERRAIN_AMBIENT_COLOR, 0.3)
  scene.add(ambient)

  // Load terrain GLB
  const loader = new GLTFLoader()
  const url = `${R2_BASE}/terrain/${landmarkId}.glb`

  try {
    const gltf = await new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject)
    })

    const terrainGroup = gltf.scene
    terrainGroup.scale.set(TERRAIN_SCALE, TERRAIN_SCALE, TERRAIN_SCALE)

    // Find elevation range from mesh geometry
    let minY = Infinity
    let maxY = -Infinity
    terrainGroup.traverse((child) => {
      if (child.isMesh) {
        child.geometry.computeBoundingBox()
        const box = child.geometry.boundingBox
        if (box.min.y < minY) minY = box.min.y
        if (box.max.y > maxY) maxY = box.max.y
      }
    })

    // Apply elevation color scheme (same as globe)
    const elevationScheme = colorSchemes.find(s => s.id === 'elevation')
    const terrainMaterial = createTerrainElevationMaterial(elevationScheme)
    terrainMaterial.setElevationRange(minY, maxY)

    terrainGroup.traverse((child) => {
      if (child.isMesh) {
        child.material = terrainMaterial
      }
    })

    scene.add(terrainGroup)

    // Init FPS controls
    fps = useFpsControls(camera, canvas)
    fps.setTerrainMesh(terrainGroup)
    fps.init()

    // Position camera at center, find ground height
    camera.position.set(0, 0, 0)
    const raycaster = new THREE.Raycaster()
    raycaster.set(new THREE.Vector3(0, 9999, 0), new THREE.Vector3(0, -1, 0))
    const hits = raycaster.intersectObject(terrainGroup, true)
    if (hits.length > 0) {
      camera.position.y = hits[0].point.y + TERRAIN_PLAYER_HEIGHT
    } else {
      camera.position.y = TERRAIN_PLAYER_HEIGHT
    }

    // Face toward highest edge
    const samples = [
      { dir: new THREE.Vector3(0, 0, -1), label: 'N' },
      { dir: new THREE.Vector3(0, 0, 1), label: 'S' },
      { dir: new THREE.Vector3(1, 0, 0), label: 'E' },
      { dir: new THREE.Vector3(-1, 0, 0), label: 'W' },
    ]
    let highestY = -Infinity
    let lookDir = new THREE.Vector3(0, 0, -1)
    for (const s of samples) {
      const samplePos = s.dir.clone().multiplyScalar(TERRAIN_SCALE * 0.4)
      raycaster.set(new THREE.Vector3(samplePos.x, 9999, samplePos.z), new THREE.Vector3(0, -1, 0))
      const sHits = raycaster.intersectObject(terrainGroup, true)
      if (sHits.length > 0 && sHits[0].point.y > highestY) {
        highestY = sHits[0].point.y
        lookDir = s.dir.clone()
      }
    }
    camera.lookAt(camera.position.clone().add(lookDir))

    // Adjust fog density based on terrain scale
    const fogDistance = TERRAIN_SCALE * 0.4
    scene.fog.density = 3.0 / fogDistance

    isLoading.value = false

    // Auto-hide controls hint
    controlsTimeout = setTimeout(() => {
      showControls.value = false
    }, 5000)

    // Start render loop
    clock = new THREE.Clock()
    function animate() {
      animationId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      fps.update(delta)
      isLocked.value = fps.isLocked
      renderer.render(scene, camera)
    }
    animate()

  } catch (err) {
    console.error('Failed to load terrain:', err)
    isValid.value = false
    isLoading.value = false
  }

  window.addEventListener('resize', onResize)
})

function onResize() {
  const canvas = canvasRef.value
  if (!canvas || !camera || !renderer) return
  camera.aspect = canvas.clientWidth / canvas.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
}

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  fps?.dispose()
  renderer?.dispose()
  window.removeEventListener('resize', onResize)
  if (controlsTimeout) clearTimeout(controlsTimeout)
})
</script>

<template>
  <div class="explore-container">
    <canvas ref="canvasRef" class="explore-canvas" />

    <!-- Loading -->
    <Transition name="fade">
      <div v-if="isLoading" class="loading-overlay">
        <p class="loading-text">{{ $t('explore.loading') }}</p>
      </div>
    </Transition>

    <!-- Mobile message -->
    <div v-if="isMobile && !isLoading" class="error-overlay">
      <p class="error-text">{{ $t('explore.desktopOnly') }}</p>
      <button class="back-btn" @click="goBack">{{ $t('explore.back') }}</button>
    </div>

    <!-- Invalid landmark -->
    <div v-if="!isValid && !isLoading" class="error-overlay">
      <p class="error-text">{{ $t('explore.notFound') }}</p>
      <button class="back-btn" @click="goBack">{{ $t('explore.back') }}</button>
    </div>

    <!-- HUD (only when valid and loaded) -->
    <template v-if="isValid && !isLoading && !isMobile">
      <!-- Info panel -->
      <div class="hud-info">
        <button class="back-link" @click="goBack">&larr; {{ $t('explore.back') }}</button>
        <h1 class="hud-title">{{ landmarkName }}</h1>
        <p class="hud-coords">{{ landmarkCoords }}</p>
      </div>

      <!-- Crosshair -->
      <div v-if="isLocked" class="crosshair">+</div>

      <!-- Controls hint -->
      <Transition name="fade">
        <div v-if="showControls || !isLocked" class="controls-hint">
          {{ $t('explore.controls') }}
        </div>
      </Transition>
    </template>
  </div>
</template>

<style scoped>
.explore-container {
  position: fixed;
  inset: 0;
  background: #000;
}

.explore-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
}

.loading-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.error-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: rgba(0, 0, 0, 0.9);
}

.error-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

.back-btn {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

.hud-info {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 20;
}

.back-link {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  cursor: pointer;
  padding: 0;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
}

.back-link:hover {
  color: rgba(255, 255, 255, 0.8);
}

.hud-title {
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.04em;
}

.hud-coords {
  color: rgba(255, 255, 255, 0.35);
  font-size: 12px;
  margin: 4px 0 0;
}

.crosshair {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.4);
  font-size: 24px;
  font-weight: 100;
  z-index: 20;
  pointer-events: none;
  user-select: none;
}

.controls-hint {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.45);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 20;
  pointer-events: none;
  white-space: nowrap;
}

.fade-leave-active { transition: opacity 0.6s ease; }
.fade-leave-to { opacity: 0; }
.fade-enter-active { transition: opacity 0.3s ease; }
.fade-enter-from { opacity: 0; }
</style>
