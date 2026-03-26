# Terrain Explorer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a first-person terrain exploration mode that lets users walk across real Mars terrain loaded from pre-generated GLB tiles.

**Architecture:** New `/explore/:landmarkId` route loads a terrain GLB from Cloudflare R2, renders it with Mars lighting and fog, and provides FPS controls (WASD + mouse look + sprint). Two new composables (`useFpsControls`, `useTerrainScene`) keep the logic modular. The existing LandmarkInfoCard gets a yellow "Explore" button for geological landmarks.

**Tech Stack:** Vue 3, Three.js (GLTFLoader, Raycaster, FogExp2), Vue Router, vue-i18n

**Spec:** `docs/superpowers/specs/2026-03-26-terrain-explorer-design.md`

---

### Task 1: Add terrain constants and i18n keys

**Files:**
- Modify: `src/three/constants.js`
- Modify: `src/i18n/en.json`
- Modify: `src/i18n/pt-BR.json`

- [ ] **Step 1: Add terrain constants to `src/three/constants.js`**

Append to the end of the file:

```javascript
// Terrain Explorer
export const TERRAIN_SCALE = 1000
export const TERRAIN_PLAYER_HEIGHT = 2
export const TERRAIN_WALK_SPEED = 15
export const TERRAIN_SPRINT_MULTIPLIER = 3
export const TERRAIN_MAX_SLOPE_DEG = 60
export const TERRAIN_FOG_COLOR = 0x33150a
export const TERRAIN_SKY_COLOR = 0x1a0a04
export const TERRAIN_SUN_COLOR = 0xffd4a0
export const TERRAIN_AMBIENT_COLOR = 0x442200
export const TERRAIN_Y_LERP = 0.1

export const EXPLORABLE_LANDMARKS = [
  'acidalia-planitia',
  'argyre-basin',
  'arsia-mons',
  'ascraeus-mons',
  'elysium-mons',
  'hellas-basin',
  'north-polar-region',
  'olympus-mons',
  'pavonis-mons',
  'south-polar-region',
  'syrtis-major',
  'utopia-planitia',
  'valles-marineris',
]
```

- [ ] **Step 2: Add English i18n keys to `src/i18n/en.json`**

Add a new `"explore"` section after `"infoCard"`:

```json
"explore": {
  "title": "Explore Terrain",
  "back": "Back to Globe",
  "controls": "Click to explore | WASD to move | SHIFT to sprint | ESC to exit",
  "loading": "Loading terrain...",
  "notFound": "Terrain not available for this landmark.",
  "desktopOnly": "Terrain exploration requires a desktop browser."
}
```

And add inside `"infoCard"`:

```json
"exploreTerrain": "Explore Terrain"
```

- [ ] **Step 3: Add Portuguese i18n keys to `src/i18n/pt-BR.json`**

Add a new `"explore"` section after `"infoCard"`:

```json
"explore": {
  "title": "Explorar Terreno",
  "back": "Voltar ao Globo",
  "controls": "Clique para explorar | WASD para mover | SHIFT para correr | ESC para sair",
  "loading": "Carregando terreno...",
  "notFound": "Terreno não disponível para este marco.",
  "desktopOnly": "A exploração de terreno requer um navegador de desktop."
}
```

And add inside `"infoCard"`:

```json
"exploreTerrain": "Explorar Terreno"
```

- [ ] **Step 4: Commit**

```bash
git add src/three/constants.js src/i18n/en.json src/i18n/pt-BR.json
git commit -m "feat: add terrain explorer constants and i18n keys"
```

---

### Task 2: Add "Explore Terrain" button to LandmarkInfoCard

**Files:**
- Modify: `src/components/gis/LandmarkInfoCard.vue`

- [ ] **Step 1: Add the router import, emit, and explore button**

In the `<script setup>` block, add the router import and the `explore` emit:

```javascript
import { EXPLORABLE_LANDMARKS } from '@/three/constants.js'

defineProps({
  landmark: { type: Object, default: null }
})

defineEmits(['close', 'explore'])
```

In the template, add the explore button after the closing `</div>` of `.card-details` and before the closing `</div>` of `.info-card`:

```html
<button
  v-if="landmark?.type === 'geological' && EXPLORABLE_LANDMARKS.includes(landmark.id)"
  class="explore-btn"
  @click="$emit('explore', landmark)"
>
  {{ $t('infoCard.exploreTerrain') }}
</button>
```

- [ ] **Step 2: Add button styles**

Add these styles inside the `<style scoped>` block:

```css
.explore-btn {
  display: block;
  width: 100%;
  margin-top: 16px;
  padding: 10px 0;
  background: #ffca28;
  color: #1a1a1a;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;
}

.explore-btn:hover {
  background: #ffd54f;
}
```

- [ ] **Step 3: Wire up the explore emit in GlobeView.vue**

In `src/views/GlobeView.vue`, find the `<LandmarkInfoCard>` usage and add the `@explore` handler. Add `import { useRouter } from 'vue-router'` at the top of the `<script setup>` block, then `const router = useRouter()` after the existing refs. Then update the template:

```html
<LandmarkInfoCard
  :landmark="selectedLandmark"
  @close="selectedLandmark = null"
  @explore="(lm) => router.push(`/explore/${lm.id}`)"
/>
```

- [ ] **Step 4: Wire up the explore emit in GisView.vue**

Same pattern in `src/views/GisView.vue` — add `useRouter` import, create `router` const, and add `@explore` handler to `<LandmarkInfoCard>`:

```html
<LandmarkInfoCard
  :landmark="selectedLandmark"
  @close="selectedLandmark = null"
  @explore="(lm) => router.push(`/explore/${lm.id}`)"
/>
```

- [ ] **Step 5: Commit**

```bash
git add src/components/gis/LandmarkInfoCard.vue src/views/GlobeView.vue src/views/GisView.vue
git commit -m "feat: add Explore Terrain button to landmark info card"
```

---

### Task 3: Create FPS controls composable

**Files:**
- Create: `src/composables/useFpsControls.js`

This composable handles pointer lock, mouse look, WASD movement, sprint, terrain following via raycast, and slope collision.

- [ ] **Step 1: Create `src/composables/useFpsControls.js`**

```javascript
import * as THREE from 'three'
import {
  TERRAIN_PLAYER_HEIGHT,
  TERRAIN_WALK_SPEED,
  TERRAIN_SPRINT_MULTIPLIER,
  TERRAIN_MAX_SLOPE_DEG,
  TERRAIN_Y_LERP,
} from '@/three/constants.js'

export function useFpsControls(camera, canvas) {
  const keys = {}
  let yaw = 0
  let pitch = 0
  let isLocked = false
  let terrainMesh = null
  let lastGroundY = TERRAIN_PLAYER_HEIGHT

  const raycaster = new THREE.Raycaster()
  const moveDirection = new THREE.Vector3()
  const forward = new THREE.Vector3()
  const right = new THREE.Vector3()
  const downDirection = new THREE.Vector3(0, -1, 0)
  const maxSlopeRad = TERRAIN_MAX_SLOPE_DEG * Math.PI / 180

  function setTerrainMesh(mesh) {
    terrainMesh = mesh
  }

  function onKeyDown(e) {
    keys[e.code] = true
  }

  function onKeyUp(e) {
    keys[e.code] = false
  }

  function onMouseMove(e) {
    if (!isLocked) return
    const sensitivity = 0.002
    yaw -= e.movementX * sensitivity
    pitch -= e.movementY * sensitivity
    pitch = Math.max(-Math.PI * 0.47, Math.min(Math.PI * 0.47, pitch))
  }

  function onPointerLockChange() {
    isLocked = document.pointerLockElement === canvas
  }

  function requestLock() {
    canvas.requestPointerLock()
  }

  function init() {
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('pointerlockchange', onPointerLockChange)
    canvas.addEventListener('click', requestLock)
  }

  function getGroundHeight(x, z) {
    if (!terrainMesh) return 0
    raycaster.set(new THREE.Vector3(x, 9999, z), downDirection)
    const hits = raycaster.intersectObject(terrainMesh, true)
    if (hits.length > 0) return hits[0].point.y
    return null
  }

  function canMoveTo(x, z) {
    if (!terrainMesh) return true
    const groundY = getGroundHeight(x, z)
    if (groundY === null) return false
    const dy = groundY - lastGroundY
    const slopeAngle = Math.atan2(Math.abs(dy), 1)
    return slopeAngle < maxSlopeRad
  }

  function update(delta) {
    if (!isLocked || !camera) return

    // Apply rotation
    const euler = new THREE.Euler(pitch, yaw, 0, 'YXZ')
    camera.quaternion.setFromEuler(euler)

    // Movement
    const speed = (keys['ShiftLeft'] || keys['ShiftRight'])
      ? TERRAIN_WALK_SPEED * TERRAIN_SPRINT_MULTIPLIER
      : TERRAIN_WALK_SPEED

    forward.set(0, 0, -1).applyQuaternion(camera.quaternion)
    forward.y = 0
    forward.normalize()

    right.set(1, 0, 0).applyQuaternion(camera.quaternion)
    right.y = 0
    right.normalize()

    moveDirection.set(0, 0, 0)
    if (keys['KeyW']) moveDirection.add(forward)
    if (keys['KeyS']) moveDirection.sub(forward)
    if (keys['KeyD']) moveDirection.add(right)
    if (keys['KeyA']) moveDirection.sub(right)

    if (moveDirection.lengthSq() > 0) {
      moveDirection.normalize()
      const nextX = camera.position.x + moveDirection.x * speed * delta
      const nextZ = camera.position.z + moveDirection.z * speed * delta

      if (canMoveTo(nextX, nextZ)) {
        camera.position.x = nextX
        camera.position.z = nextZ
      }
    }

    // Terrain following
    const groundY = getGroundHeight(camera.position.x, camera.position.z)
    if (groundY !== null) {
      lastGroundY = groundY
      const targetY = groundY + TERRAIN_PLAYER_HEIGHT
      camera.position.y += (targetY - camera.position.y) * TERRAIN_Y_LERP
    }
  }

  function dispose() {
    document.removeEventListener('keydown', onKeyDown)
    document.removeEventListener('keyup', onKeyUp)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('pointerlockchange', onPointerLockChange)
    canvas.removeEventListener('click', requestLock)
    if (document.pointerLockElement === canvas) {
      document.exitPointerLock()
    }
  }

  return {
    init,
    update,
    setTerrainMesh,
    dispose,
    get isLocked() { return isLocked },
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/composables/useFpsControls.js
git commit -m "feat: add FPS controls composable with WASD, mouse look, terrain following"
```

---

### Task 4: Create ExploreView

**Files:**
- Create: `src/views/ExploreView.vue`

This is the main view — sets up the Three.js scene, loads the terrain GLB, configures lighting/fog, wires FPS controls, and renders the UI overlay.

- [ ] **Step 1: Create `src/views/ExploreView.vue`**

```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useFpsControls } from '@/composables/useFpsControls.js'
import { useMarsData } from '@/composables/useMarsData.js'
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

    // Apply Mars material to all meshes
    const marsMaterial = new THREE.MeshStandardMaterial({
      color: 0xb5724a,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: false,
    })

    terrainGroup.traverse((child) => {
      if (child.isMesh) {
        child.material = marsMaterial
      }
    })

    scene.add(terrainGroup)

    // Init FPS controls
    fps = useFpsControls(camera, canvas)
    fps.setTerrainMesh(terrainGroup)
    fps.init()

    // Position camera at center, find ground height
    camera.position.set(0, 0, 0)
    // Raycast down to find ground at center
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
    let maxY = -Infinity
    let lookDir = new THREE.Vector3(0, 0, -1)
    for (const s of samples) {
      const samplePos = s.dir.clone().multiplyScalar(TERRAIN_SCALE * 0.4)
      raycaster.set(new THREE.Vector3(samplePos.x, 9999, samplePos.z), new THREE.Vector3(0, -1, 0))
      const sHits = raycaster.intersectObject(terrainGroup, true)
      if (sHits.length > 0 && sHits[0].point.y > maxY) {
        maxY = sHits[0].point.y
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
```

- [ ] **Step 2: Commit**

```bash
git add src/views/ExploreView.vue
git commit -m "feat: add ExploreView with terrain loading, FPS controls, and Mars atmosphere"
```

---

### Task 5: Add the route and test

**Files:**
- Modify: `src/router.js`

- [ ] **Step 1: Add the explore route to `src/router.js`**

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import GlobeView from './views/GlobeView.vue'
import AboutView from './views/AboutView.vue'
import GisView from './views/GisView.vue'
import ExploreView from './views/ExploreView.vue'

const routes = [
  { path: '/', name: 'Globe', component: GlobeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/gis', name: 'Mars GIS', component: GisView },
  { path: '/explore/:landmarkId', name: 'Explore', component: ExploreView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
```

- [ ] **Step 2: Run dev server and verify**

Run: `npm run dev`

Test the following:
1. Navigate to `/` — globe loads normally
2. Click a geological landmark (e.g., Olympus Mons) — info card appears with yellow "Explore Terrain" button
3. Click "Explore Terrain" — navigates to `/explore/olympus-mons`
4. Loading overlay appears while GLB downloads
5. Terrain renders with Mars lighting and fog
6. Click canvas — pointer locks, crosshair appears
7. WASD moves, mouse looks around, Shift sprints
8. Camera follows terrain height
9. ESC releases pointer lock, controls hint reappears
10. "Back to Globe" returns to `/`
11. Navigate to `/explore/invalid-id` — shows "not available" error
12. Landing site landmarks (e.g., Curiosity) — no explore button appears

- [ ] **Step 3: Commit**

```bash
git add src/router.js
git commit -m "feat: add /explore/:landmarkId route for terrain exploration"
```
