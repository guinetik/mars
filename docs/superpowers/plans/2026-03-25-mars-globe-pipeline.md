# Mars Globe Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Python pipeline that converts the USGS MOLA GeoTIFF into a high-resolution Mars globe GLB, with a Three.js viewer to inspect it.

**Architecture:** A single Python script (`scripts/generate_globe.py`) reads a GeoTIFF with GDAL, downsamples to target resolution, maps the equirectangular grid to sphere vertices, triangulates, computes normals, and exports GLB via trimesh. A minimal Vite + Three.js app (`src/`) loads and displays the GLB.

**Tech Stack:** Python 3.13 (GDAL, NumPy, trimesh), Node.js (Vite, Three.js)

**Spec:** `docs/superpowers/specs/2026-03-25-mars-globe-pipeline-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `.gitignore` | Modify | Add `data/`, `output/`, `node_modules/` |
| `scripts/requirements.txt` | Create | Python dependencies |
| `scripts/generate_globe.py` | Create | Full pipeline: load, downsample, sphere map, triangulate, export |
| `scripts/test_globe.py` | Create | Unit tests for sphere math and triangulation |
| `package.json` | Create | Vite + Three.js dev dependencies |
| `src/index.html` | Create | Minimal HTML shell |
| `src/main.js` | Create | GLB loader, OrbitControls, lighting |
| `vite.config.js` | Create | Vite config: root=src, publicDir=output |

---

## Task 1: Project Scaffolding

**Files:**
- Modify: `.gitignore`
- Create: `scripts/requirements.txt`
- Create: `package.json`

- [ ] **Step 1: Update .gitignore**

Add to the end of `.gitignore`:

```
# Mars pipeline data (large files)
data/
output/
node_modules/
```

- [ ] **Step 2: Create scripts/requirements.txt**

```
GDAL>=3.6
numpy>=1.24
trimesh>=4.0
pytest>=7.0
```

Note: GDAL Python bindings can be tricky to install. On Windows, the easiest path is `pip install GDAL` after installing GDAL system-wide via OSGeo4W, or use `conda install gdal`. If pip install fails, try `pip install gdal==$(gdal-config --version)` on systems where GDAL is already installed.

- [ ] **Step 3: Create package.json**

```json
{
  "name": "mars-globe-viewer",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "three": "^0.172.0"
  },
  "devDependencies": {
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 4: Install Node dependencies**

Run: `npm install`

- [ ] **Step 5: Commit**

```bash
git add .gitignore scripts/requirements.txt package.json package-lock.json
git commit -m "scaffold: add project dependencies and gitignore updates"
```

---

## Task 2: GeoTIFF Loading and Downsampling

**Files:**
- Create: `scripts/generate_globe.py`

This task creates the script with just the GDAL loading and downsampling step. We build the script incrementally — this first version reads the GeoTIFF and prints stats.

- [ ] **Step 1: Create generate_globe.py with CLI args and GeoTIFF loading**

```python
#!/usr/bin/env python3
"""
Generate a Mars globe GLB from USGS HRSC_MOLA BlendDEM GeoTIFF.

Usage:
    python scripts/generate_globe.py --input data/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif
"""
import argparse
import sys
import os
import time
import numpy as np

def parse_args():
    p = argparse.ArgumentParser(description="Generate Mars globe GLB from MOLA GeoTIFF")
    p.add_argument("--input", default="data/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif",
                    help="Path to source GeoTIFF")
    p.add_argument("--output", default="output/mars_globe.glb",
                    help="Output GLB path")
    p.add_argument("--resolution", type=int, default=4000,
                    help="Target meters per pixel (default: 4000)")
    p.add_argument("--exaggeration", type=float, default=10.0,
                    help="Vertical exaggeration factor (default: 10)")
    return p.parse_args()


def load_and_downsample(input_path: str, target_resolution: int) -> np.ndarray:
    """Load GeoTIFF and downsample to target resolution. Returns 2D elevation array in meters."""
    from osgeo import gdal
    gdal.UseExceptions()

    print(f"Opening {input_path}...")
    ds = gdal.Open(input_path, gdal.GA_ReadOnly)
    if ds is None:
        print(f"ERROR: Could not open {input_path}", file=sys.stderr)
        sys.exit(1)

    width = ds.RasterXSize
    height = ds.RasterYSize
    gt = ds.GetGeoTransform()
    # GeoTransform: (origin_x, pixel_width, 0, origin_y, 0, pixel_height)
    # pixel_width is in degrees for equirectangular; convert to meters at equator
    # Mars circumference at equator: 2 * pi * 3389500 = ~21,298,884 m
    # 360 degrees = 21,298,884 m => 1 degree = ~59,163 m
    MARS_CIRCUMFERENCE = 2 * np.pi * 3389500
    deg_per_pixel = abs(gt[1])
    meters_per_pixel = deg_per_pixel * (MARS_CIRCUMFERENCE / 360.0)

    print(f"Source: {width} x {height} pixels, {meters_per_pixel:.1f} m/pixel")

    # Compute target dimensions
    scale_factor = meters_per_pixel / target_resolution
    target_width = max(1, int(width * scale_factor))
    target_height = max(1, int(height * scale_factor))

    print(f"Target: {target_width} x {target_height} pixels at {target_resolution} m/pixel")
    print(f"Downsampling {scale_factor:.2f}x ...")

    t0 = time.time()
    # Use GDAL warp to downsample in memory
    mem_driver = gdal.GetDriverByName("MEM")
    dst_ds = mem_driver.Create("", target_width, target_height, 1, gdal.GDT_Float32)

    # Set geotransform for target
    dst_gt = (gt[0], gt[1] / scale_factor, 0, gt[3], 0, gt[5] / scale_factor)
    dst_ds.SetGeoTransform(dst_gt)
    dst_ds.SetProjection(ds.GetProjection())

    gdal.ReprojectImage(ds, dst_ds, ds.GetProjection(), ds.GetProjection(),
                        gdal.GRA_Bilinear)

    band = dst_ds.GetRasterBand(1)
    elevation = band.ReadAsArray().astype(np.float32)

    # Handle nodata — check before float32 cast to avoid precision issues
    nodata = band.GetNoDataValue()
    if nodata is not None:
        raw = band.ReadAsArray()
        mask = raw == nodata
        elevation[mask] = 0.0
        if mask.any():
            print(f"Replaced {mask.sum()} nodata pixels with 0")

    dt = time.time() - t0
    print(f"Downsampled in {dt:.1f}s. Shape: {elevation.shape}")
    print(f"Elevation range: {elevation.min():.1f}m to {elevation.max():.1f}m")

    ds = None
    dst_ds = None
    return elevation


def main():
    args = parse_args()

    if not os.path.exists(args.input):
        print(f"ERROR: Input file not found: {args.input}", file=sys.stderr)
        print("Download the MOLA GeoTIFF from:")
        print("  https://planetarymaps.usgs.gov/mosaic/Mars/HRSC_MOLA_Blend/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif")
        print(f"Place it at: {args.input}")
        sys.exit(1)

    elevation = load_and_downsample(args.input, args.resolution)
    print(f"\nLoaded elevation grid: {elevation.shape[1]} x {elevation.shape[0]}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Verify the script runs (requires GeoTIFF)**

Run: `python scripts/generate_globe.py --help`
Expected: prints CLI help without errors.

If GeoTIFF is available: `python scripts/generate_globe.py --resolution 10000`
(Use 10km for a quick test — small grid, fast processing)

- [ ] **Step 3: Commit**

```bash
git add scripts/generate_globe.py
git commit -m "feat: add GeoTIFF loading and downsampling pipeline"
```

---

## Task 3: Sphere Mapping with Unit Tests

**Files:**
- Modify: `scripts/generate_globe.py`
- Create: `scripts/test_globe.py`

The sphere mapping is the math-heavy core. We test it independently.

- [ ] **Step 1: Write unit tests for sphere mapping**

Create `scripts/test_globe.py`:

```python
"""Unit tests for Mars globe generation math."""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

import numpy as np
import pytest

from generate_globe import grid_to_sphere, MARS_RADIUS


class TestGridToSphere:
    """Test equirectangular grid to sphere coordinate mapping."""

    def test_north_pole(self):
        """Row 0 center should map to north pole (0, +r, 0)."""
        vertices, uvs = grid_to_sphere(
            np.zeros((3, 5), dtype=np.float32),  # 3 rows, 5 cols, flat
            exaggeration=1.0
        )
        # Row 0, col 2 (center) — should be near north pole
        # North pole: lat = pi/2, so y ≈ r, x ≈ 0, z ≈ 0
        idx = 2  # row 0, col 2
        assert vertices[idx, 1] > 0.99  # y near 1 (unit sphere)
        assert abs(vertices[idx, 0]) < 0.05  # x near 0
        assert abs(vertices[idx, 2]) < 0.05  # z near 0

    def test_south_pole(self):
        """Last row center should map to south pole (0, -r, 0)."""
        vertices, uvs = grid_to_sphere(
            np.zeros((3, 5), dtype=np.float32),
            exaggeration=1.0
        )
        # Row 2 (last), col 2
        idx = 2 * 5 + 2  # row 2, col 2
        assert vertices[idx, 1] < -0.99
        assert abs(vertices[idx, 0]) < 0.05
        assert abs(vertices[idx, 2]) < 0.05

    def test_equator_prime_meridian(self):
        """Middle row, col 0 should be on equator at lon=-180 (negative X)."""
        vertices, uvs = grid_to_sphere(
            np.zeros((5, 10), dtype=np.float32),
            exaggeration=1.0
        )
        # Row 2 (middle of 5), col 0 — lat=0, lon=-pi
        idx = 2 * 10 + 0
        assert abs(vertices[idx, 1]) < 0.05  # y near 0 (equator)
        assert vertices[idx, 0] < -0.95  # x near -1 (lon=-180)

    def test_unit_sphere_radius(self):
        """With zero elevation, all vertices should be on unit sphere."""
        vertices, uvs = grid_to_sphere(
            np.zeros((10, 20), dtype=np.float32),
            exaggeration=1.0
        )
        radii = np.linalg.norm(vertices, axis=1)
        np.testing.assert_allclose(radii, 1.0, atol=1e-6)

    def test_exaggeration_scales_displacement(self):
        """Higher elevation + exaggeration should push vertices outward."""
        flat = np.zeros((5, 10), dtype=np.float32)
        elevated = np.full((5, 10), 10000.0, dtype=np.float32)  # 10km elevation

        v_flat, _ = grid_to_sphere(flat, exaggeration=10.0)
        v_high, _ = grid_to_sphere(elevated, exaggeration=10.0)

        r_flat = np.linalg.norm(v_flat, axis=1)
        r_high = np.linalg.norm(v_high, axis=1)

        # 10km * 10x exaggeration = 100km displacement on 3389.5km radius ≈ 2.95%
        expected_ratio = 1.0 + (10000 * 10) / MARS_RADIUS
        np.testing.assert_allclose(r_high / r_flat, expected_ratio, atol=1e-4)

    def test_uv_corners(self):
        """UV coordinates should span [0,1] at grid corners."""
        _, uvs = grid_to_sphere(
            np.zeros((3, 5), dtype=np.float32),
            exaggeration=1.0
        )
        # Top-left: row 0, col 0
        assert abs(uvs[0, 0]) < 0.01  # u near 0
        assert abs(uvs[0, 1]) < 0.01  # v near 0
        # Bottom-right: row 2, col 4
        idx = 2 * 5 + 4
        assert abs(uvs[idx, 0] - 1.0) < 0.01  # u near 1
        assert abs(uvs[idx, 1] - 1.0) < 0.01  # v near 1
```

- [ ] **Step 2: Run tests — verify they fail**

Run: `cd scripts && python -m pytest test_globe.py -v`
Expected: ImportError — `grid_to_sphere` does not exist yet.

- [ ] **Step 3: Implement grid_to_sphere in generate_globe.py**

Add to `scripts/generate_globe.py`, before `main()`:

```python
MARS_RADIUS = 3389500.0  # meters


def grid_to_sphere(elevation: np.ndarray, exaggeration: float) -> tuple[np.ndarray, np.ndarray]:
    """
    Convert equirectangular elevation grid to sphere vertices.

    Args:
        elevation: 2D array (height x width) of elevation values in meters
        exaggeration: vertical exaggeration multiplier

    Returns:
        vertices: (N, 3) float32 array of XYZ positions on unit sphere
        uvs: (N, 2) float32 array of UV coordinates [0,1]
    """
    h, w = elevation.shape
    rows = np.arange(h, dtype=np.float32)
    cols = np.arange(w, dtype=np.float32)
    col_grid, row_grid = np.meshgrid(cols, rows)

    # Lat/lon in radians
    # Note: we use (w-1) and (h-1) so the last column/row maps exactly to
    # +pi longitude and -pi/2 latitude, avoiding a one-pixel gap at the seam.
    # The spec uses width/height as conceptual pseudocode; this is the correct impl.
    lon = (col_grid / (w - 1)) * 2 * np.pi - np.pi  # [-pi, pi]
    lat = np.pi / 2 - (row_grid / (h - 1)) * np.pi   # [pi/2, -pi/2]

    # Radius: unit sphere + scaled elevation displacement
    r = 1.0 + (elevation * exaggeration) / MARS_RADIUS

    # Spherical to Cartesian (Y-up, right-handed)
    cos_lat = np.cos(lat)
    x = r * cos_lat * np.cos(lon)
    y = r * np.sin(lat)
    z = r * cos_lat * np.sin(lon)

    vertices = np.stack([x.ravel(), y.ravel(), z.ravel()], axis=1).astype(np.float32)

    # UV coordinates
    u = col_grid / (w - 1)
    v = row_grid / (h - 1)
    uvs = np.stack([u.ravel(), v.ravel()], axis=1).astype(np.float32)

    return vertices, uvs
```

- [ ] **Step 4: Run tests — verify they pass**

Run: `cd scripts && python -m pytest test_globe.py -v`
Expected: All 6 tests pass.

- [ ] **Step 5: Commit**

```bash
git add scripts/generate_globe.py scripts/test_globe.py
git commit -m "feat: add sphere mapping with unit tests"
```

---

## Task 4: Mesh Triangulation and Pole Handling

**Files:**
- Modify: `scripts/generate_globe.py`
- Modify: `scripts/test_globe.py`

- [ ] **Step 1: Add triangulation tests**

Append to `scripts/test_globe.py`:

```python
from generate_globe import build_faces


class TestBuildFaces:
    """Test grid triangulation and pole collapsing."""

    def test_simple_grid_face_count(self):
        """A 4x5 grid should produce 16 faces with pole collapsing."""
        faces = build_faces(rows=4, cols=5)
        # rows=4, cols=5, after pole collapse:
        # North fan: cols-1 = 4 triangles
        # Middle strips: (rows-3) = 1 strip, (cols-1) = 4 quads, 2 tris each = 8
        # South fan: cols-1 = 4 triangles
        # Total: 4 + 8 + 4 = 16
        assert len(faces) == 16

    def test_faces_are_valid_indices(self):
        """All face indices should be within vertex count range."""
        rows, cols = 5, 8
        faces = build_faces(rows, cols)
        # Vertex count after pole collapse: 2 (poles) + (rows-2)*cols (middle rows)
        vertex_count = 2 + (rows - 2) * cols
        for face in faces:
            for idx in face:
                assert 0 <= idx < vertex_count, f"Index {idx} out of range [0, {vertex_count})"

    def test_all_triangles(self):
        """All faces should be triangles (3 indices each)."""
        faces = build_faces(rows=6, cols=10)
        for face in faces:
            assert len(face) == 3
```

- [ ] **Step 2: Run tests — verify they fail**

Run: `cd scripts && python -m pytest test_globe.py::TestBuildFaces -v`
Expected: ImportError — `build_faces` does not exist yet.

- [ ] **Step 3: Implement build_faces and update grid_to_sphere for pole collapsing**

Add to `scripts/generate_globe.py`:

```python
def collapse_poles(vertices: np.ndarray, uvs: np.ndarray, rows: int, cols: int) -> tuple[np.ndarray, np.ndarray]:
    """
    Collapse north and south pole rows into single vertices each.

    Input vertices are (rows*cols,3) from a full grid.
    Output vertices are (2 + (rows-2)*cols, 3) — one north pole, middle rows, one south pole.

    Returns:
        collapsed_vertices: (N, 3) array
        collapsed_uvs: (N, 2) array
    """
    # North pole: average of row 0
    north_pos = vertices[:cols].mean(axis=0, keepdims=True)
    north_uv = np.array([[0.5, 0.0]], dtype=np.float32)

    # South pole: average of last row
    south_pos = vertices[-cols:].mean(axis=0, keepdims=True)
    south_uv = np.array([[0.5, 1.0]], dtype=np.float32)

    # Middle rows
    mid_start = cols
    mid_end = rows * cols - cols
    mid_pos = vertices[mid_start:mid_end]
    mid_uv = uvs[mid_start:mid_end]

    collapsed_verts = np.concatenate([north_pos, mid_pos, south_pos], axis=0).astype(np.float32)
    collapsed_uvs = np.concatenate([north_uv, mid_uv, south_uv], axis=0).astype(np.float32)

    return collapsed_verts, collapsed_uvs


def build_faces(rows: int, cols: int) -> np.ndarray:
    """
    Build triangle face indices for a pole-collapsed equirectangular sphere.

    Vertex layout:
      Index 0: north pole
      Index 1 to (rows-2)*cols: middle rows (row 1 through row rows-2)
      Last index: south pole

    Returns:
        faces: (F, 3) int32 array of triangle indices
    """
    north_pole = 0
    south_pole = 1 + (rows - 2) * cols
    faces = []

    # North pole fan: connect pole to first middle row
    for c in range(cols - 1):
        v0 = 1 + c          # first middle row
        v1 = 1 + c + 1
        faces.append([north_pole, v0, v1])

    # Middle rows: standard quad strips
    for r in range(rows - 3):  # (rows-2) middle rows, (rows-3) strips between them
        for c in range(cols - 1):
            # Top-left of quad
            tl = 1 + r * cols + c
            tr = tl + 1
            bl = tl + cols
            br = bl + 1
            faces.append([tl, bl, tr])
            faces.append([tr, bl, br])

    # South pole fan: connect last middle row to pole
    last_row_start = 1 + (rows - 3) * cols
    for c in range(cols - 1):
        v0 = last_row_start + c
        v1 = last_row_start + c + 1
        faces.append([v0, south_pole, v1])

    return np.array(faces, dtype=np.int32)
```

- [ ] **Step 4: Run tests — verify they pass**

Run: `cd scripts && python -m pytest test_globe.py -v`
Expected: All tests pass (both TestGridToSphere and TestBuildFaces).

- [ ] **Step 5: Commit**

```bash
git add scripts/generate_globe.py scripts/test_globe.py
git commit -m "feat: add mesh triangulation with pole collapsing"
```

---

## Task 5: Normals, GLB Export, and Full Pipeline

**Files:**
- Modify: `scripts/generate_globe.py`

- [ ] **Step 1: Add compute_normals function**

Add to `scripts/generate_globe.py`:

```python
def compute_normals(vertices: np.ndarray, faces: np.ndarray) -> np.ndarray:
    """Compute per-vertex normals averaged from adjacent face normals."""
    normals = np.zeros_like(vertices)

    # Compute face normals and accumulate to vertices
    v0 = vertices[faces[:, 0]]
    v1 = vertices[faces[:, 1]]
    v2 = vertices[faces[:, 2]]

    edge1 = v1 - v0
    edge2 = v2 - v0
    face_normals = np.cross(edge1, edge2)

    # Accumulate face normals to each vertex of each face
    for i in range(3):
        np.add.at(normals, faces[:, i], face_normals)

    # Normalize
    lengths = np.linalg.norm(normals, axis=1, keepdims=True)
    lengths[lengths < 1e-10] = 1.0
    normals /= lengths

    return normals.astype(np.float32)
```

- [ ] **Step 2: Add GLB export and wire up main()**

Update `main()` in `scripts/generate_globe.py`:

```python
def export_glb(vertices: np.ndarray, faces: np.ndarray, normals: np.ndarray,
               uvs: np.ndarray, output_path: str):
    """Export mesh as GLB using trimesh."""
    import trimesh

    mesh = trimesh.Trimesh(
        vertices=vertices,
        faces=faces,
        vertex_normals=normals,
    )
    # Attach UV coordinates as visual
    mesh.visual = trimesh.visual.TextureVisuals(uv=uvs)

    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)

    print(f"Exporting to {output_path}...")
    t0 = time.time()
    mesh.export(output_path, file_type="glb")
    dt = time.time() - t0

    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print(f"Exported {output_path} ({size_mb:.1f} MB) in {dt:.1f}s")
    print(f"  Vertices: {len(vertices):,}")
    print(f"  Faces: {len(faces):,}")


def main():
    args = parse_args()

    if not os.path.exists(args.input):
        print(f"ERROR: Input file not found: {args.input}", file=sys.stderr)
        print("Download the MOLA GeoTIFF from:")
        print("  https://planetarymaps.usgs.gov/mosaic/Mars/HRSC_MOLA_Blend/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif")
        print(f"Place it at: {args.input}")
        sys.exit(1)

    # 1. Load and downsample
    elevation = load_and_downsample(args.input, args.resolution)
    rows, cols = elevation.shape

    # 2. Map to sphere
    print("Mapping to sphere...")
    t0 = time.time()
    vertices, uvs = grid_to_sphere(elevation, args.exaggeration)
    print(f"Sphere mapping: {time.time() - t0:.1f}s")

    # 3. Collapse poles
    print("Collapsing poles...")
    vertices, uvs = collapse_poles(vertices, uvs, rows, cols)

    # 4. Build faces
    print("Building faces...")
    faces = build_faces(rows, cols)
    print(f"Faces: {len(faces):,}")

    # 5. Compute normals
    print("Computing normals...")
    t0 = time.time()
    normals = compute_normals(vertices, faces)
    print(f"Normals: {time.time() - t0:.1f}s")

    # 6. Export
    export_glb(vertices, faces, normals, uvs, args.output)

    print("\nDone!")
```

- [ ] **Step 3: Test with a small resolution**

Run: `python scripts/generate_globe.py --resolution 20000`
(20km resolution = tiny grid, fast, verifies full pipeline end-to-end)
Expected: Creates `output/mars_globe.glb`, prints stats.

- [ ] **Step 4: Commit**

```bash
git add scripts/generate_globe.py
git commit -m "feat: complete pipeline with normals, export, and CLI"
```

---

## Task 6: Three.js Viewer

**Files:**
- Create: `src/index.html`
- Create: `src/main.js`

- [ ] **Step 1: Create src/index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mars Globe Viewer</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { overflow: hidden; background: #000; }
    canvas { display: block; }
    #loading {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #c44;
      font-family: monospace;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div id="loading">Loading Mars globe...</div>
  <script type="module" src="./main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create src/main.js**

```js
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Scene setup
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000)
camera.position.set(0, 0, 3)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 1.5)
dirLight.position.set(5, 3, 5)
scene.add(dirLight)

// Load globe
const loader = new GLTFLoader()
const loadingEl = document.getElementById('loading')

loader.load(
  '/mars_globe.glb',
  (gltf) => {
    const model = gltf.scene
    // Auto-center
    const box = new THREE.Box3().setFromObject(model)
    const center = box.getCenter(new THREE.Vector3())
    model.position.sub(center)
    // Auto-scale to fit
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    if (maxDim > 0) {
      const scale = 2 / maxDim
      model.scale.setScalar(scale)
    }
    scene.add(model)
    loadingEl.style.display = 'none'
  },
  (progress) => {
    if (progress.total > 0) {
      const pct = ((progress.loaded / progress.total) * 100).toFixed(0)
      loadingEl.textContent = `Loading Mars globe... ${pct}%`
    }
  },
  (error) => {
    loadingEl.textContent = `Error loading globe: ${error.message}`
    console.error('GLB load error:', error)
  }
)

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Render loop
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
animate()
```

- [ ] **Step 3: Configure Vite to serve output/ as static**

Create `vite.config.js` at project root. Note: `__dirname` is not available in ESM, so we use `import.meta.dirname` (Node 21+) or the `fileURLToPath` pattern:

```js
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: 'src',
  publicDir: path.resolve(__dirname, 'output'),
  server: {
    fs: {
      allow: ['..']
    }
  }
})
```

This makes files in `output/` available at the server root. The GLB loads from `/mars_globe.glb` (matching the URL in `main.js` from Step 2).

- [ ] **Step 4: Test the viewer**

Run: `npm run dev`
Expected: Opens dev server. If a GLB exists in `output/`, it loads and renders. If not, shows an error message.

- [ ] **Step 5: Commit**

```bash
git add src/index.html src/main.js vite.config.js
git commit -m "feat: add Three.js globe viewer"
```

---

## Task 7: Integration Test — Full Run

This is a manual verification task. No new code.

- [ ] **Step 1: Run unit tests**

Run: `cd scripts && python -m pytest test_globe.py -v`
Expected: All tests pass.

- [ ] **Step 2: Generate globe at test resolution**

Run: `python scripts/generate_globe.py --resolution 20000`
Expected: Creates `output/mars_globe.glb` (small file, <10MB).

- [ ] **Step 3: View in browser**

Run: `npm run dev`
Open the URL in browser. Verify:
- Globe loads and renders
- Can orbit/zoom with mouse
- Shape looks roughly like Mars (not a crumpled ball or inside-out)
- Loading percentage shows during load

- [ ] **Step 4: Generate globe at target resolution**

Run: `python scripts/generate_globe.py --resolution 4000`
Expected: Takes a few minutes. Creates `output/mars_globe.glb` (~500MB).
View in browser to validate.

- [ ] **Step 5: Final commit if any tweaks needed**

```bash
git add -A
git commit -m "chore: finalize pipeline after integration testing"
```
