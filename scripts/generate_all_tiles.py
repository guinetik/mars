#!/usr/bin/env python3
"""Generate terrain tiles for all landmarks in landmarks.json."""
import json
import os
import sys
import subprocess

LANDMARKS_PATH = "public/data/landmarks.json"
GRID_SIZE = 400  # 400x400 grid for 2000x2000px game area (~5px per quad)
EXAGGERATION = 6
INPUT_TIFF = "data/Mars_HRSC_MOLA_BlendDEM_Global_200mp_v2.tif"
OUTPUT_DIR = "output/terrain"

def main():
    with open(LANDMARKS_PATH) as f:
        landmarks = json.load(f)

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Only geological landmarks
    landmarks = [lm for lm in landmarks if lm.get("type") == "geological"]

    skipped = []
    results = []

    for lm in landmarks:
        lid = lm["id"]
        lat = lm["lat"]
        lon = lm["lon"]

        # Skip polar caps (script can't handle lat ±90)
        if abs(lat) >= 89:
            skipped.append(lid)
            print(f"\n--- SKIPPING {lid} (lat={lat}, too close to pole) ---")
            continue

        # Use half the feature diameter as radius, clamped to [50, 500] km
        diameter = lm.get("diameterKm", 100)
        radius = min(500, max(50, diameter / 2))

        output = os.path.join(OUTPUT_DIR, f"{lid}.glb")
        print(f"\n{'='*60}")
        print(f"Generating: {lid} (lat={lat}, lon={lon}, radius={radius}km)")
        print(f"{'='*60}")

        cmd = [
            sys.executable, "scripts/generate_tile.py",
            "--lat", str(lat),
            "--lon", str(lon),
            "--radius", str(radius),
            "--grid-size", str(GRID_SIZE),
            "--exaggeration", str(EXAGGERATION),
            "--output", output,
            "--input", INPUT_TIFF,
        ]

        result = subprocess.run(cmd, capture_output=False)
        if result.returncode == 0:
            size_mb = os.path.getsize(output) / (1024 * 1024)
            results.append((lid, size_mb))
        else:
            results.append((lid, -1))

    print(f"\n{'='*60}")
    print("SUMMARY")
    print(f"{'='*60}")
    total = 0
    for lid, size in results:
        if size >= 0:
            print(f"  {lid:30s} {size:6.1f} MB")
            total += size
        else:
            print(f"  {lid:30s}  FAILED")
    print(f"  {'TOTAL':30s} {total:6.1f} MB")
    if skipped:
        print(f"  Skipped (polar): {', '.join(skipped)}")


if __name__ == "__main__":
    main()
