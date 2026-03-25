# MARS Vue.js Site — Design Spec

## Overview

Migrate the vanilla Vite + Three.js globe viewer into a Vue 3 SPA called "MARS" with Vue Router, dark chic theme (Vercel meets NASA aesthetic), and three pages: Globe, About, and Mars GIS.

## Pages

### Globe (`/`)
- Full-viewport Three.js globe below a fixed navbar
- Migrated from current `src/main.js` into a Vue component
- Three.js scene created in `onMounted`, fully disposed in `onUnmounted` (cancel animation frame, dispose renderer/controls/geometries/materials, remove resize listener)
- Canvas fills remaining viewport height (`calc(100vh - 48px)`)
- Renderer size and camera aspect ratio computed from container dimensions (not window) to account for navbar height
- Same functionality: GLTFLoader, OrbitControls, lighting, loading indicator

### About (`/about`)
- Centered content column (~680px max-width)
- Explains the MOLA dataset, HRSC blending, processing pipeline, and data sources
- Science and data analysis framing only — no game references
- Sections: Introduction, Data Source, Processing Pipeline, Methodology, References
- Clean typography, generous padding

### Mars GIS (`/gis`)
- Blank placeholder page
- Centered "Coming soon" message
- TBD content

## Navigation

- Fixed top navbar, 48px height
- Background: `#0a0a0a`
- "MARS" wordmark on the left — clean sans-serif, bold
- Three page links on the right: Globe, About, Mars GIS
- Active link: underlined with `#c44` accent
- No hamburger menu — three links always visible

## Theme

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0a0a0a` | Page background |
| `--surface` | `#111111` | Card/section backgrounds |
| `--border` | `#222222` | Subtle dividers |
| `--text` | `#ededed` | Primary text |
| `--text-secondary` | `#888888` | Secondary/muted text |
| `--accent` | `#cc4444` | Mars rust accent, active states |

### Typography
- Font stack: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Monospace for data labels: `'SF Mono', 'Fira Code', monospace`
- Clean hierarchy: large headings, comfortable body size, generous line height

## File Structure

```
src/
  App.vue              — layout shell: navbar + <router-view>
  main.js              — Vue app creation + router plugin
  router.js            — route definitions (/, /about, /gis)
  views/
    GlobeView.vue      — Three.js globe component
    AboutView.vue      — methodology/science content
    GisView.vue        — blank placeholder
  components/
    NavBar.vue          — top nav with MARS branding + links
  assets/
    style.css           — CSS custom properties, reset, global styles
index.html             — root HTML (moves to project root for Vite)
```

## Tech Stack

- Vue 3 (Composition API, `<script setup>`)
- Vue Router 4 (history mode)
- Vite (already present) + `@vitejs/plugin-vue`
- Three.js (already present)
- No additional UI libraries

### New Dependencies

```bash
npm install vue vue-router
npm install -D @vitejs/plugin-vue
```

## Migration Notes

- Current `src/main.js` Three.js code moves into `GlobeView.vue`'s `onMounted` hook
- Current `src/index.html` loading div becomes part of the GlobeView template
- Delete `src/index.html` after migration — root `index.html` replaces it
- Root `index.html` must include `<div id="app"></div>` and `<script type="module" src="/src/main.js"></script>`
- `vite.config.js`: remove `root: 'src'`, keep `publicDir` pointing to `output/`, add `vue()` plugin
- About page content: real content based on our spec's Data Source section and pipeline description, not placeholder text

## Non-Goals

- No responsive/mobile optimization
- No state management (Pinia etc.)
- No build-time SSR
- No game integration references in About content
