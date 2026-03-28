#!/usr/bin/env python3
"""
Generate a flat terrain tile GLB from USGS HRSC_MOLA BlendDEM GeoTIFF.

Extracts a region around a given lat/lon with a specified radius (km),
then builds a flat plane mesh with elevation displacement — suitable for
use as a game map tile.

Usage:
    python scripts/generate_tile.py --lat -4.5 --lon 137.4 --radius 50
    python scripts/generate_tile.py --lat 18.65 --lon -226.2 --radius 100 --resolution 200
"""
import argparse
import sys
import os
import time
import numpy as np


MARS_RADIUS = 3389500.0  # meters
MARS_CIRCUMFERENCE = 2 * np.pi * MARS_RADIUS


def parse_args():
    p = argparse.ArgumentParser(description="Generate Mars terrain tile GLB from MOLA GeoTIFF")
    p.add_argument("--input", default="data/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif",
                    help="Path to source GeoTIFF")
    p.add_argument("--output", default=None,
                    help="Output GLB path (default: output/tile_<lat>_<lon>.glb)")
    p.add_argument("--lat", type=float, required=True,
                    help="Center latitude in degrees (-90 to 90)")
    p.add_argument("--lon", type=float, required=True,
                    help="Center longitude in degrees (-180 to 180)")
    p.add_argument("--radius", type=float, default=50.0,
                    help="Radius in km around the center point (default: 50)")
    p.add_argument("--resolution", type=int, default=None,
                    help="Target meters per pixel (default: use source resolution)")
    p.add_argument("--grid-size", type=int, default=None,
                    help="Fixed grid size — output will be grid-size x grid-size vertices (overrides --resolution)")
    p.add_argument("--exaggeration", type=float, default=1.0,
                    help="Vertical exaggeration factor (default: 1.0, realistic)")
    return p.parse_args()


def latlon_to_pixel(lat, lon, transform, width, height):
    """Convert lat/lon (degrees) to pixel coordinates in the GeoTIFF."""
    # The MOLA TIFF is simple equirectangular:
    #   X axis: longitude (-180 to 180 or 0 to 360)
    #   Y axis: latitude (90 to -90, top to bottom)
    col = (lon - transform.c) / transform.a
    row = (lat - transform.f) / transform.e
    return row, col


def load_tile(input_path, lat, lon, radius_km, target_resolution, grid_size=None):
    """
    Load a rectangular window from the GeoTIFF centered on lat/lon.

    Returns:
        elevation: 2D float32 array (meters)
        meters_per_pixel: actual resolution of the output
        extent_x_m: physical width of the tile in meters
        extent_y_m: physical height of the tile in meters
    """
    import rasterio
    from rasterio.enums import Resampling
    from rasterio.windows import Window

    radius_m = radius_km * 1000.0

    print(f"Opening {input_path}...")
    with rasterio.open(input_path) as src:
        transform = src.transform
        src_width = src.width
        src_height = src.height

        # Source resolution in meters/pixel at equator
        deg_per_pixel = abs(transform.a)
        src_mpp = deg_per_pixel * (MARS_CIRCUMFERENCE / 360.0)
        print(f"Source: {src_width} x {src_height} pixels, {src_mpp:.1f} m/pixel")

        # Convert radius from meters to degrees
        # Latitude: constant ratio
        lat_deg_per_m = 360.0 / MARS_CIRCUMFERENCE
        radius_lat_deg = radius_m * lat_deg_per_m

        # For polar regions: offset center latitude away from the pole
        # so we get a proper rectangular extraction instead of a degenerate strip
        if abs(lat) + radius_lat_deg > 89.0:
            offset_lat = np.sign(lat) * (89.0 - radius_lat_deg)
            print(f"Polar adjustment: shifting center lat from {lat:.2f} to {offset_lat:.2f}")
            lat = offset_lat

        # Longitude: adjust for latitude (shorter circumference near poles)
        cos_lat = np.cos(np.radians(lat))
        if cos_lat < 1e-6:
            print("ERROR: Cannot extract tile at exact poles", file=sys.stderr)
            sys.exit(1)
        radius_lon_deg = radius_lat_deg / cos_lat

        # Bounding box in degrees
        lat_min = lat - radius_lat_deg
        lat_max = lat + radius_lat_deg
        lon_min = lon - radius_lon_deg
        lon_max = lon + radius_lon_deg

        print(f"Bounding box: lat [{lat_min:.4f}, {lat_max:.4f}], lon [{lon_min:.4f}, {lon_max:.4f}]")

        # Convert to pixel coordinates
        row_min, col_min = latlon_to_pixel(lat_max, lon_min, transform, src_width, src_height)
        row_max, col_max = latlon_to_pixel(lat_min, lon_max, transform, src_width, src_height)

        # Clamp to image bounds
        row_min = int(max(0, np.floor(row_min)))
        row_max = int(min(src_height, np.ceil(row_max)))
        col_min = int(max(0, np.floor(col_min)))
        col_max = int(min(src_width, np.ceil(col_max)))

        pixel_width = col_max - col_min
        pixel_height = row_max - row_min
        print(f"Window: ({col_min}, {row_min}) to ({col_max}, {row_max}) = {pixel_width} x {pixel_height} pixels")

        if pixel_width < 2 or pixel_height < 2:
            print("ERROR: Region too small — try a larger radius", file=sys.stderr)
            sys.exit(1)

        window = Window(col_min, row_min, pixel_width, pixel_height)

        # Determine output dimensions
        if grid_size:
            # Fixed grid: use physical aspect ratio, not pixel aspect
            # (equirectangular projection distorts lon pixels at high latitudes)
            actual_lon_deg = lon_max - lon_min
            actual_lat_deg = lat_max - lat_min
            phys_x = actual_lon_deg * (MARS_CIRCUMFERENCE / 360.0) * cos_lat
            phys_y = actual_lat_deg * (MARS_CIRCUMFERENCE / 360.0)
            phys_aspect = phys_x / phys_y if phys_y > 0 else 1.0
            if phys_aspect >= 1:
                out_width = grid_size
                out_height = max(2, int(grid_size / phys_aspect))
            else:
                out_height = grid_size
                out_width = max(2, int(grid_size * phys_aspect))
            actual_mpp = (2 * radius_km * 1000.0) / max(out_width, out_height)
        elif target_resolution and target_resolution > src_mpp:
            scale = src_mpp / target_resolution
            out_width = max(2, int(pixel_width * scale))
            out_height = max(2, int(pixel_height * scale))
            actual_mpp = target_resolution
        else:
            out_width = pixel_width
            out_height = pixel_height
            actual_mpp = src_mpp

        print(f"Output: {out_width} x {out_height} pixels at {actual_mpp:.1f} m/pixel")

        t0 = time.time()
        raw = src.read(
            1,
            window=window,
            out_shape=(out_height, out_width),
            resampling=Resampling.bilinear
        )
        elevation = raw.astype(np.float32)

        nodata = src.nodata
        if nodata is not None:
            mask = raw == nodata
            elevation[mask] = 0.0
            if mask.any():
                print(f"Replaced {mask.sum()} nodata pixels with 0")

    dt = time.time() - t0
    print(f"Loaded tile in {dt:.1f}s. Shape: {elevation.shape}")
    print(f"Elevation range: {elevation.min():.1f}m to {elevation.max():.1f}m")

    # Physical extents (both clamped to same size for square tiles at poles)
    actual_lon_deg = lon_max - lon_min
    actual_lat_deg = lat_max - lat_min
    extent_x_m = actual_lon_deg * (MARS_CIRCUMFERENCE / 360.0) * cos_lat
    extent_y_m = actual_lat_deg * (MARS_CIRCUMFERENCE / 360.0)

    return elevation, actual_mpp, extent_x_m, extent_y_m


def grid_to_plane(elevation, exaggeration, extent_x_m, extent_y_m):
    """
    Convert elevation grid to a flat plane mesh.

    The plane is centered at origin, X-Z plane with Y as elevation.
    Coordinates are in meters, normalized so the tile fits in a reasonable scale.

    Returns:
        vertices: (N, 3) float32
        uvs: (N, 2) float32
    """
    h, w = elevation.shape

    # Normalize to unit scale (longest edge = 1.0) for game use
    max_extent = max(extent_x_m, extent_y_m)
    scale = 1.0 / max_extent

    rows = np.arange(h, dtype=np.float32)
    cols = np.arange(w, dtype=np.float32)
    col_grid, row_grid = np.meshgrid(cols, rows)

    # UV coordinates
    u = col_grid / (w - 1)
    v = row_grid / (h - 1)
    uvs = np.stack([u.ravel(), v.ravel()], axis=1).astype(np.float32)

    # Position: X-Z plane, centered at origin
    x = (u - 0.5) * extent_x_m * scale
    z = (0.5 - v) * extent_y_m * scale
    y = elevation * exaggeration * scale

    vertices = np.stack([x.ravel(), y.ravel(), z.ravel()], axis=1).astype(np.float32)

    return vertices, uvs


def build_plane_faces(rows, cols):
    """Build triangle faces for a regular grid."""
    faces = []
    for r in range(rows - 1):
        for c in range(cols - 1):
            tl = r * cols + c
            tr = tl + 1
            bl = tl + cols
            br = bl + 1
            faces.append([tl, tr, bl])
            faces.append([tr, br, bl])
    return np.array(faces, dtype=np.int32)


def compute_normals(vertices, faces):
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


def export_glb(vertices, faces, normals, uvs, output_path):
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


def main():
    args = parse_args()

    if not os.path.exists(args.input):
        print(f"ERROR: Input file not found: {args.input}", file=sys.stderr)
        print("Download the MOLA GeoTIFF from:")
        print("  https://planetarymaps.usgs.gov/mosaic/Mars/HRSC_MOLA_Blend/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif")
        print(f"Place it at: {args.input}")
        sys.exit(1)

    output = args.output or f"output/tile_{args.lat}_{args.lon}.glb"

    print(f"Generating tile: center=({args.lat}, {args.lon}), radius={args.radius} km")
    print(f"Exaggeration: {args.exaggeration}x")

    # 1. Load tile
    elevation, mpp, extent_x, extent_y = load_tile(
        args.input, args.lat, args.lon, args.radius, args.resolution, args.grid_size
    )
    rows, cols = elevation.shape

    # 2. Map to plane
    print("Mapping to plane...")
    t0 = time.time()
    vertices, uvs = grid_to_plane(elevation, args.exaggeration, extent_x, extent_y)
    print(f"Plane mapping: {time.time() - t0:.1f}s")

    # 3. Build faces
    print("Building faces...")
    faces = build_plane_faces(rows, cols)
    print(f"Faces: {len(faces):,}")

    # 4. Compute normals
    print("Computing normals...")
    t0 = time.time()
    normals = compute_normals(vertices, faces)
    print(f"Normals: {time.time() - t0:.1f}s")

    # 5. Export
    export_glb(vertices, faces, normals, uvs, output)

    print(f"\nTile info:")
    print(f"  Center: ({args.lat}, {args.lon})")
    print(f"  Radius: {args.radius} km")
    print(f"  Physical size: {extent_x/1000:.1f} x {extent_y/1000:.1f} km")
    print(f"  Resolution: {mpp:.1f} m/pixel")
    print(f"  Grid: {cols} x {rows}")
    print("\nDone!")


if __name__ == "__main__":
    main()
