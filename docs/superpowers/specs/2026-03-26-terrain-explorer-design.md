# Terrain Explorer — Design Spec

## Overview

Add a first-person terrain exploration mode to the Mars globe site. When viewing a geological landmark's info card, a yellow "Explore Terrain" button navigates to a new route that loads the landmark's pre-generated terrain GLB from Cloudflare R2 and drops the user into an FPS-style walking experience on the Martian surface.

## Route

- **Path:** `/explore/:landmarkId`
- **View:** `ExploreView.vue`
- **Example:** `/explore/olympus-mons`

Only geological landmarks with terrain tiles on R2 are explorable. The landmark ID maps directly to the GLB filename: `terrain/{landmarkId}.glb`.

## R2 Assets

Base URL: `https://pub-3ae55587a05a4c0bb0a9fde6b0847d45.r2.dev`

Available terrain tiles (400x400 grid, ~8.5 MB each, 6x vertical exaggeration):

| ID | Feature | Radius |
|----|---------|--------|
| olympus-mons | Volcano | 305 km |
| valles-marineris | Canyon | 500 km |
| hellas-basin | Basin | 500 km |
| ascraeus-mons | Volcano | 230 km |
| pavonis-mons | Volcano | 187.5 km |
| arsia-mons | Volcano | 217.5 km |
| elysium-mons | Volcano | 120 km |
| syrtis-major | Plain | 500 km |
| utopia-planitia | Plain | 500 km |
| acidalia-planitia | Plain | 500 km |
| argyre-basin | Basin | 500 km |
| north-polar-region | Polar | 500 km |
| south-polar-region | Polar | 500 km |

Mesh is normalized so the longest edge = 1.0 unit. Y is elevation.

## Landmark Info Card Change

In `LandmarkInfoCard.vue`, add a yellow "Explore Terrain" button at the bottom of the card for geological landmarks that have terrain data. Clicking navigates to `/explore/${landmark.id}`.

Button style: solid yellow (`#ffca28`), dark text, full-width within the card, bold.

## ExploreView.vue

### Scene Setup

- **Renderer:** Standard WebGLRenderer, antialias, full viewport
- **Terrain:** Load GLB via GLTFLoader from R2, scale to 1000 units (1000x1000 game area)
- **Material:** Use the mesh as-is from the GLB, or apply a Mars-colored material (brownish-red MeshStandardMaterial)
- **Sky:** Dark reddish-black background (`0x1a0a04`)
- **Stars:** Optional — reuse BackgroundStars class from the globe view

### Lighting

- **Directional light:** Warm sunlight, slightly orange (`0xffd4a0`), intensity ~2, positioned high and angled
- **Ambient light:** Low intensity (`0x442200`, intensity ~0.3) for dark Martian atmosphere feel
- **No shadows** — performance consideration with 160K vertex terrain

### Fog

- **Type:** `FogExp2` with reddish-brown color (`0x33150a`)
- **Purpose:** Hides terrain tile edges naturally, creates Mars atmosphere feel
- **Density:** Calculated per tile so fog fully obscures at ~80% of tile half-width
  - Formula: `density = 3.0 / (tileSize * 0.4)` (where tileSize is the scaled mesh extent)

### FPS Controls

No Three.js PointerLockControls dependency — implement directly for full control:

- **Pointer Lock:** Engage on canvas click, release on ESC
- **Mouse:** Free look (yaw + pitch), pitch clamped to ~[-85, 85] degrees
- **WASD:** Move forward/back/strafe relative to camera facing direction
- **Shift:** Sprint (3x base speed)
- **Base speed:** Tuned so crossing the tile takes ~60 seconds at walk, ~20 seconds at sprint
- **Camera height:** ~2 units above terrain (raycast down each frame)

### Terrain Following

Each frame:
1. Raycast straight down from camera position
2. If hit, set camera Y = hit point Y + 2 (player height)
3. If no hit (walked off edge), keep last known Y
4. Smoothly interpolate Y changes (lerp factor ~0.1) to avoid jarring steps

### Camera Start Position

- **Position:** Center of the tile (X=0, Z=0), at ground level + 2 units
- **Facing:** Toward the direction of maximum elevation change (computed at load time by sampling terrain height at N/S/E/W edges and facing toward the highest point)

### Movement Collision

- Before moving, raycast in the movement direction
- If terrain slope ahead is > 60 degrees, block movement (can't walk up cliffs)
- Allows natural exploration without walking through geometry

## UI Overlay

All overlay elements are HTML, positioned absolute over the canvas:

### Top-Left: Info Panel
- Landmark name (large, white)
- Coordinates (smaller, gray)
- "Back to Globe" button/link — navigates to `/` and triggers fly-to for this landmark

### Center: Crosshair
- Simple `+` shape, thin white lines, semi-transparent
- Only visible when pointer is locked

### Bottom-Center: Controls Hint
- "Click to explore | WASD to move | SHIFT to sprint | ESC to exit"
- Shown on load, fades out after 5 seconds
- Reappears briefly when pointer lock is released

### Loading State
- Reuse `LoadingOverlay.vue` pattern from GIS view
- Show while GLB is downloading from R2

## Navigation Flow

1. User is on Globe (`/`) or GIS (`/gis`) view
2. Clicks a geological landmark pin
3. LandmarkInfoCard opens with landmark details
4. User clicks yellow "Explore Terrain" button
5. Router navigates to `/explore/{landmarkId}`
6. ExploreView loads, shows loading overlay
7. GLB downloads from R2, terrain renders
8. User clicks canvas to engage pointer lock
9. FPS exploration begins
10. User presses ESC or clicks "Back to Globe"
11. Router navigates back to `/` (optionally with query param to re-select the landmark)

## File Structure

```
src/
  views/
    ExploreView.vue          # New view
  composables/
    useTerrainScene.js       # Three.js setup for terrain (renderer, camera, loop)
    useFpsControls.js        # Pointer lock, WASD, mouse look, terrain following
  three/
    constants.js             # Add TERRAIN_* constants
```

## Constants to Add

```javascript
// Terrain Explorer
TERRAIN_SCALE = 1000            // Scale normalized mesh to 1000 units
TERRAIN_PLAYER_HEIGHT = 2       // Camera height above ground
TERRAIN_WALK_SPEED = 15         // Units per second
TERRAIN_SPRINT_MULTIPLIER = 3   // Sprint = 3x walk
TERRAIN_MAX_SLOPE = 60          // Degrees — can't walk up steeper
TERRAIN_FOG_COLOR = 0x33150a    // Reddish-brown Mars dust
TERRAIN_SKY_COLOR = 0x1a0a04    // Dark Mars sky
TERRAIN_SUN_COLOR = 0xffd4a0    // Warm orange sunlight
TERRAIN_AMBIENT_COLOR = 0x442200
TERRAIN_Y_LERP = 0.1            // Ground-following smoothness
```

## i18n

Add keys for both `en.json` and `pt-BR.json`:
- `explore.title` — "Explore Terrain" / "Explorar Terreno"
- `explore.back` — "Back to Globe" / "Voltar ao Globo"
- `explore.controls` — controls hint text
- `explore.loading` — "Loading terrain..." / "Carregando terreno..."
- `landmark.explore` — button label on card

## Edge Cases

- **Invalid landmark ID:** Show error message + link back to globe
- **Non-geological landmark:** Redirect to globe (no terrain tile exists)
- **Mobile:** Show a message that terrain exploration requires desktop (no pointer lock on mobile)
- **Pointer lock denied:** Show hint to click canvas again
