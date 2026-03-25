# GIS Globe Port — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the irover ArcGIS-tiled Mars globe with landmarks to the mars project's GIS page, removing gameplay elements.

**Architecture:** Copy the irover Three.js scene (globe, atmosphere, landmarks, stars) and composables, converting from TypeScript to plain JavaScript, removing Tailwind classes, and stripping the "SELECT SITE" game CTA. The GIS page becomes a second globe example alongside the existing GLB globe.

**Tech Stack:** Vue 3, Three.js, CSS2DRenderer, ArcGIS tile service

**Source:** `D:\Developer\irover\src\` (read-only reference)

---

## File Map

| File | Action | Source in irover |
|------|--------|-----------------|
| `public/data/landmarks.json` | Copy | `public/data/landmarks.json` |
| `src/three/constants.js` | Port from TS | `src/three/constants.ts` |
| `src/three/shaders/atmosphere.vert.glsl` | Copy | `src/three/shaders/atmosphere.vert.glsl` |
| `src/three/shaders/atmosphere.frag.glsl` | Copy | `src/three/shaders/atmosphere.frag.glsl` |
| `src/lib/areography/coordinates.js` | Port from TS | `src/lib/areography/coordinates.ts` |
| `src/lib/areography/tiles.js` | Port from TS | `src/lib/areography/tiles.ts` |
| `src/three/MarsGlobe.js` | Port from TS | `src/three/MarsGlobe.ts` |
| `src/three/MarsAtmosphere.js` | Port from TS | `src/three/MarsAtmosphere.ts` |
| `src/three/MarsLandmarks.js` | Port from TS | `src/three/MarsLandmarks.ts` |
| `src/three/BackgroundStars.js` | Port from TS | `src/three/BackgroundStars.ts` |
| `src/three/MarsScene.js` | Port from TS | `src/three/MarsScene.ts` |
| `src/composables/useThreeScene.js` | Port from TS | `src/composables/useThreeScene.ts` |
| `src/composables/useMarsData.js` | Port from TS | `src/composables/useMarsData.ts` |
| `src/components/gis/MarsCanvas.vue` | Port, remove Tailwind | `src/components/MarsCanvas.vue` |
| `src/components/gis/LandmarkInfoCard.vue` | Port, remove SELECT SITE button | `src/components/LandmarkInfoCard.vue` |
| `src/components/gis/LandmarkTooltip.vue` | Port | `src/components/LandmarkTooltip.vue` |
| `src/components/gis/LoadingOverlay.vue` | Port, remove Tailwind | `src/components/LoadingOverlay.vue` |
| `src/views/GisView.vue` | Rewrite | `src/views/GlobeView.vue` |
| `src/router.js` | Modify | Add lazy import |
| `vite.config.js` | Modify | Add path alias |

### Key transformations across ALL ported files:

1. **Remove TypeScript** — strip type annotations, `as` casts, interface/type definitions, generic parameters
2. **Remove `@/` import alias** — use relative paths (or we add the alias to vite.config.js — recommended)
3. **Remove Tailwind classes** — replace with scoped CSS
4. **Remove gameplay** — no "SELECT SITE" button, no router.push to /site/:id
5. **SceneLayer interface** — not ported (JS has no interfaces). Classes just follow the convention.

---

## Task 1: Foundation — Data, Constants, Utilities, Shaders

**Files to create:**
- `public/data/landmarks.json`
- `src/three/constants.js`
- `src/three/shaders/atmosphere.vert.glsl`
- `src/three/shaders/atmosphere.frag.glsl`
- `src/lib/areography/coordinates.js`
- `src/lib/areography/tiles.js`

**Files to modify:**
- `vite.config.js` — add `@` path alias so imports work like irover

- [ ] **Step 1: Add `@` path alias to vite.config.js**

Add to the defineConfig:
```js
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}
```

- [ ] **Step 2: Copy landmarks.json**

Copy `D:\Developer\irover\public\data\landmarks.json` to `D:\Developer\mars\public\data\landmarks.json` exactly as-is. This requires creating the `public/data/` directory.

- [ ] **Step 3: Create src/three/constants.js**

Port from `D:\Developer\irover\src\three\constants.ts` — remove TypeScript type annotation from LANDMARK_COLORS (remove `Record<string, string>`). Everything else is already valid JS. Keep ALL constants exactly as-is.

- [ ] **Step 4: Copy shader files**

Copy these files exactly:
- `D:\Developer\irover\src\three\shaders\atmosphere.vert.glsl` → `src/three/shaders/atmosphere.vert.glsl`
- `D:\Developer\irover\src\three\shaders\atmosphere.frag.glsl` → `src/three/shaders/atmosphere.frag.glsl`

- [ ] **Step 5: Create src/lib/areography/coordinates.js**

Port from `D:\Developer\irover\src\lib\areography\coordinates.ts`:
- Remove `: THREE.Vector3` return types
- Remove `: number` parameter types
- Remove `: { lat: number; lon: number }` return type
- Keep all logic identical

- [ ] **Step 6: Create src/lib/areography/tiles.js**

Port from `D:\Developer\irover\src\lib\areography\tiles.ts`:
- Remove all TypeScript type annotations
- Change `@/three/constants` import to `@/three/constants.js`
- Keep all logic identical

- [ ] **Step 7: Commit**

```bash
git add vite.config.js public/data/landmarks.json src/three/constants.js src/three/shaders/ src/lib/
git commit -m "feat(gis): add foundation — landmarks data, constants, areography utilities, shaders"
```

---

## Task 2: Three.js Scene Layers

**Files to create:**
- `src/three/MarsGlobe.js`
- `src/three/MarsAtmosphere.js`
- `src/three/MarsLandmarks.js`
- `src/three/BackgroundStars.js`
- `src/three/MarsScene.js`

Each file is ported from the corresponding `.ts` file in `D:\Developer\irover\src\three/`.

- [ ] **Step 1: Create src/three/MarsGlobe.js**

Port from `D:\Developer\irover\src\three\MarsGlobe.ts`:
- Remove `implements SceneLayer` and all type annotations
- Remove the `SceneLayer` import
- Change `@/lib/areography/tiles` → `@/lib/areography/tiles.js`
- Keep detail level upgrade logic, tile compositing, everything

- [ ] **Step 2: Create src/three/MarsAtmosphere.js**

Port from `D:\Developer\irover\src\three\MarsAtmosphere.ts`:
- Remove `implements SceneLayer` and type annotations
- Remove `SceneLayer` import
- Shader imports use `?raw` suffix (Vite handles this)

- [ ] **Step 3: Create src/three/MarsLandmarks.js**

Port from `D:\Developer\irover\src\three\MarsLandmarks.ts`:
- Remove `implements SceneLayer`, all type annotations, type imports
- Remove `import type { Landmark, LandmarkHoverEvent }` line
- Change `@/lib/areography/coordinates` → `@/lib/areography/coordinates.js`
- Keep ALL landmark logic: pins, CSS2D labels, raycasting, visibility culling, pick throttling

- [ ] **Step 4: Create src/three/BackgroundStars.js**

Port from `D:\Developer\irover\src\three\BackgroundStars.ts`:
- Remove `implements SceneLayer` and type annotations
- Remove `SceneLayer` import
- Keep star generation, twinkling shader, everything

- [ ] **Step 5: Create src/three/MarsScene.js**

Port from `D:\Developer\irover\src\three\MarsScene.ts`:
- Remove all type annotations and type imports
- Change `@/three/constants` import to use `.js` extension
- Keep Mars obliquity tilt, lighting, all layer orchestration

- [ ] **Step 6: Verify no import errors**

Run: `npx vite build 2>&1 | head -30`
Expected: Should get past module resolution (may fail on Vue components not yet created — that's fine)

- [ ] **Step 7: Commit**

```bash
git add src/three/
git commit -m "feat(gis): add Three.js scene layers — globe, atmosphere, landmarks, stars"
```

---

## Task 3: Composables

**Files to create:**
- `src/composables/useThreeScene.js`
- `src/composables/useMarsData.js`

- [ ] **Step 1: Create src/composables/useThreeScene.js**

Port from `D:\Developer\irover\src\composables\useThreeScene.ts` (259 lines):
- Remove all TypeScript type annotations (`: THREE.WebGLRenderer | null`, etc.)
- Remove all type imports
- Change `@/three/constants` → `@/three/constants.js`
- Keep ALL functionality: OrbitControls, CSS2DRenderer, fly-to animation, smooth zoom, auto-rotate, pointer tracking, resize handling

- [ ] **Step 2: Create src/composables/useMarsData.js**

Port from `D:\Developer\irover\src\composables\useMarsData.ts`:
- Remove type annotations and type imports
- Keep the caching pattern (loaded flag, single fetch)

- [ ] **Step 3: Commit**

```bash
git add src/composables/
git commit -m "feat(gis): add composables — Three.js scene management and Mars data loading"
```

---

## Task 4: Vue Components

**Files to create:**
- `src/components/gis/MarsCanvas.vue`
- `src/components/gis/LandmarkInfoCard.vue`
- `src/components/gis/LandmarkTooltip.vue`
- `src/components/gis/LoadingOverlay.vue`

All go in `src/components/gis/` to keep them separate from the existing globe viewer components.

- [ ] **Step 1: Create MarsCanvas.vue**

Port from `D:\Developer\irover\src\components\MarsCanvas.vue`:
- Remove `lang="ts"` from script tag
- Remove all TypeScript: type imports, emit type generics, type annotations
- Replace Tailwind classes with scoped CSS:
  - `relative w-full h-full` → scoped `.canvas-wrapper { position: relative; width: 100%; height: 100%; }`
  - `block w-full h-full` → scoped `canvas { display: block; width: 100%; height: 100%; }`
  - `absolute inset-0 pointer-events-none overflow-hidden` → scoped `.css2d-overlay { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }`
- Update imports to use `@/composables/useThreeScene.js`, `@/composables/useMarsData.js`, `@/three/MarsScene.js`

- [ ] **Step 2: Create LandmarkInfoCard.vue**

Port from `D:\Developer\irover\src\components\LandmarkInfoCard.vue`:
- Remove `lang="ts"` from script tag
- Remove TypeScript type annotations and imports
- **REMOVE the SELECT SITE button entirely** — delete the `<button v-if="landmark.type === 'geological'"` block and its CSS
- **REMOVE the `select-site` emit** from defineEmits
- Keep everything else: accent bar, details, stat bars, close button, transitions

- [ ] **Step 3: Create LandmarkTooltip.vue**

Port from `D:\Developer\irover\src\components\LandmarkTooltip.vue`:
- Remove `lang="ts"` from script tag
- Remove TypeScript type annotations and imports
- Already uses scoped CSS (no Tailwind), so minimal changes

- [ ] **Step 4: Create LoadingOverlay.vue**

Port from `D:\Developer\irover\src\components\LoadingOverlay.vue`:
- Remove `lang="ts"` from script tag
- Remove TypeScript
- Replace Tailwind classes with scoped CSS:
  - `fixed inset-0 z-50 flex items-center justify-center bg-black/80` → scoped CSS
  - `text-white/60 text-sm tracking-widest uppercase` → scoped CSS
  - `text-white/40 text-xs mt-2` → scoped CSS
- Match the site's dark theme

- [ ] **Step 5: Commit**

```bash
git add src/components/gis/
git commit -m "feat(gis): add Vue components — canvas, info card, tooltip, loading overlay"
```

---

## Task 5: Wire Up GisView and Router

**Files to modify:**
- `src/views/GisView.vue` — rewrite from placeholder
- `src/router.js` — already has GIS route

- [ ] **Step 1: Rewrite GisView.vue**

Port from `D:\Developer\irover\src\views\GlobeView.vue` with these changes:
- Remove `lang="ts"` from script tag
- Remove all TypeScript type annotations and imports
- **REMOVE `useRouter` and `onSelectSite`** — no game navigation
- **REMOVE the `@select-site` event** from LandmarkInfoCard
- Replace Tailwind `w-full h-full` with scoped CSS
- Update component imports to `@/components/gis/...`
- Keep: MarsCanvas, LandmarkTooltip, LandmarkInfoCard (without select-site), LoadingOverlay
- Keep: hover/select/progress event handling, Escape key to close card

- [ ] **Step 2: Verify build**

Run: `npx vite build 2>&1`
Expected: Clean build (chunk size warning for Three.js is OK)

- [ ] **Step 3: Test dev server**

Run: `npm run dev`
Visit `/gis` — verify:
- Tiles load from ArcGIS (progress overlay shows)
- Globe renders with atmosphere and stars
- Landmarks appear as colored pins with labels
- Hover shows tooltip
- Click shows info card
- Escape closes info card
- No "SELECT SITE" button anywhere

- [ ] **Step 4: Commit**

```bash
git add src/views/GisView.vue src/router.js
git commit -m "feat(gis): wire up GIS globe view with landmarks and tile loading"
```
