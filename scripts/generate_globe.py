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


def collapse_poles(vertices: np.ndarray, uvs: np.ndarray, rows: int, cols: int) -> tuple[np.ndarray, np.ndarray]:
    """
    Collapse north and south pole rows into single vertices each.

    Input vertices are (rows*cols,3) from a full grid.
    Output vertices are (2 + (rows-2)*cols, 3) — one north pole, middle rows, one south pole.
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
    """
    north_pole = 0
    south_pole = 1 + (rows - 2) * cols
    faces = []

    # North pole fan: connect pole to first middle row
    for c in range(cols - 1):
        v0 = 1 + c
        v1 = 1 + c + 1
        faces.append([north_pole, v0, v1])

    # Middle rows: standard quad strips
    for r in range(rows - 3):
        for c in range(cols - 1):
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


def compute_normals(vertices: np.ndarray, faces: np.ndarray) -> np.ndarray:
    """Compute per-vertex normals averaged from adjacent face normals."""
    normals = np.zeros_like(vertices)

    v0 = vertices[faces[:, 0]]
    v1 = vertices[faces[:, 1]]
    v2 = vertices[faces[:, 2]]

    edge1 = v1 - v0
    edge2 = v2 - v0
    face_normals = np.cross(edge1, edge2)

    for i in range(3):
        np.add.at(normals, faces[:, i], face_normals)

    lengths = np.linalg.norm(normals, axis=1, keepdims=True)
    lengths[lengths < 1e-10] = 1.0
    normals /= lengths

    return normals.astype(np.float32)


def export_glb(vertices: np.ndarray, faces: np.ndarray, normals: np.ndarray,
               uvs: np.ndarray, output_path: str):
    """Export mesh as GLB using trimesh."""
    import trimesh

    mesh = trimesh.Trimesh(
        vertices=vertices,
        faces=faces,
        vertex_normals=normals,
    )
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

    # Handle nodata — check before float32 cast to avoid precision issues
    nodata = band.GetNoDataValue()
    raw = band.ReadAsArray()
    elevation = raw.astype(np.float32)
    if nodata is not None:
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


if __name__ == "__main__":
    main()
