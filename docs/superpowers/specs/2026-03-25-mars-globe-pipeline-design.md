# Mars Globe Pipeline — Design Spec

## Overview

Build a Python pipeline that converts the USGS HRSC_MOLA BlendDEM v2 GeoTIFF (200m/pixel global Mars elevation data) into a high-resolution GLB globe mesh, plus a minimal Three.js viewer to inspect the output.

## Problem

The existing `research/mars_terrain_model.glb` was downscaled to 5km resolution (900K vertices) from the original 200m/pixel source. At rover-game scale, terrain between height samples averages ~4km apart, making the surface effectively flat unless you're on a massive feature like Olympus Mons.

## Goals

- Generate a ~14M vertex Mars globe at ~4km effective resolution (configurable down to 2km for ~57M vertices)
- Configurable vertical exaggeration (default 10x, current model uses 20x)
- Reproducible pipeline: change a CLI arg, re-run, get a new globe
- Minimal Three.js viewer to validate output visually

## Non-Goals (for now)

- Per-landmark rectangular detail maps (future work, CTX 6m data)
- Runtime terrain generation
- Game integration

## Data Source

- **Dataset:** Mars MGS MOLA - MEX HRSC Blended DEM Global 200m v2
- **Citation:** Fergason, R. L, Hare, T. M., & Laura, J. (2018). HRSC and MOLA Blended Digital Elevation Model at 200m v2. Astrogeology PDS Annex, U.S. Geological Survey.
- **URL:** https://astrogeology.usgs.gov/search/map/Mars/Topography/HRSC_MOLA_Blend/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2
- **Direct download:** https://planetarymaps.usgs.gov/mosaic/Mars/HRSC_MOLA_Blend/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif
- **Format:** GeoTIFF, signed 16-bit integers, elevation in meters
- **Size:** ~11 GB
- **Resolution:** 200m/pixel, ~106,694 x 53,347 pixels
- **Coverage:** Global, equirectangular projection

## Pipeline: `scripts/generate_globe.py`

### CLI Arguments

| Arg | Default | Description |
|-----|---------|-------------|
| `--input` | `data/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif` | Path to source GeoTIFF |
| `--output` | `output/mars_globe.glb` | Output GLB path |
| `--resolution` | `4000` | Target meters per pixel (2000 for max detail, needs ~50GB RAM) |
| `--exaggeration` | `10` | Vertical exaggeration factor |

### Processing Steps

1. **Load GeoTIFF** — Open with GDAL, read the single elevation band as a NumPy array.

2. **Downsample** — From ~106K x 53K (200m) to target resolution using GDAL bilinear resampling. At default 4km: ~5.3K x 2.7K pixels. The `--resolution` arg controls this. Higher values = fewer vertices = smaller file.

3. **Map to sphere** — Each pixel at grid position (col, row) maps to spherical coordinates. All trig uses radians:
   - `lon = (col / width) * 2*pi - pi`
   - `lat = pi/2 - (row / height) * pi`
   - `r = 1.0 + (elevation * exaggeration) / MARS_RADIUS`
   - `x = r * cos(lat) * cos(lon)`
   - `y = r * sin(lat)` (Y-up, matching Three.js right-handed coordinate system)
   - `z = r * cos(lat) * sin(lon)`
   - Where `MARS_RADIUS = 3389500` meters. The globe is normalized to a unit sphere with elevation displacement scaled relative to the radius.

4. **Generate mesh** — Standard equirectangular grid triangulation:
   - Two triangles per grid cell
   - Poles collapsed to a single vertex each (north pole = fan of triangles from one vertex, same for south). This avoids degenerate zero-area triangles.
   - UV coordinates: `u = col/width`, `v = row/height`

5. **Compute normals** — Per-vertex normals averaged from adjacent face normals.

6. **Export GLB** — Using trimesh for mesh construction and GLB export. Draco compression deferred to post-processing with `gltf-transform` CLI (Node.js) if needed — trimesh does not natively support Draco. Initial exports will be uncompressed; if file size is a problem, a `--compress` flag can invoke gltf-transform as a subprocess.

### Expected Output

| Resolution | Grid Size | Vertices | Faces | Approx GLB (uncompressed) | Peak RAM |
|-----------|-----------|----------|-------|--------------------------|----------|
| 6000m | ~3.6K x 1.8K | ~6M | ~12M | ~200MB | ~4GB |
| 4000m (default) | ~5.3K x 2.7K | ~14M | ~28M | ~500MB | ~8-12GB |
| 2000m | ~10.7K x 5.3K | ~57M | ~113M | ~2GB+ | ~50GB+ |

- Elevation range preserved in vertex positions for shader use
- Draco compression (optional post-process) can reduce file size by 60-80%

## Viewer: Vite + Three.js

### Project Setup

- `package.json` with vite and three as dependencies
- `src/index.html` — minimal HTML
- `src/main.js` — viewer logic

### Viewer Features

- Load GLB from `output/mars_globe.glb` using GLTFLoader
- OrbitControls for rotation/zoom
- Directional light + ambient light
- Auto-center and scale to fit viewport
- Loading progress indicator (large GLB files take time)
- That's it — research validation tool, not a product

## Project Structure

```
mars/
  .gitignore             # data/, output/, node_modules/
  package.json           # vite + three
  scripts/
    generate_globe.py    # pipeline script
    requirements.txt     # gdal, numpy, trimesh
  src/
    index.html
    main.js
  data/                  # gitignored — 11GB GeoTIFF goes here
  output/                # gitignored — generated GLBs
  research/              # existing reference files
    mars_terrain_model.glb
    mars-terrain.md
  docs/
    superpowers/
      specs/
        2026-03-25-mars-globe-pipeline-design.md
```

## Dependencies

### Python (scripts/requirements.txt)
- `gdal` (via `osgeo`) — GeoTIFF reading, resampling, projection
- `numpy` — array manipulation
- `trimesh` — mesh construction and GLB export
- `scipy` (optional) — for interpolation if needed

### Node.js (package.json)
- `vite` — dev server
- `three` — 3D rendering, GLTFLoader, OrbitControls

## Decisions

- **Draco compression:** Deferred to optional post-processing via `gltf-transform` CLI. Not built into the Python pipeline. If file size becomes an issue, add a `--compress` flag that shells out to gltf-transform.
- **Pole handling:** Collapse to a single vertex per pole with a triangle fan. Standard approach, cleaner geometry.
- **Coordinate system:** Y-up, right-handed, matching Three.js conventions. The sphere mapping formula uses Y as the polar axis.
