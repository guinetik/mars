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
            np.zeros((3, 5), dtype=np.float32),
            exaggeration=1.0
        )
        idx = 2  # row 0, col 2
        assert vertices[idx, 1] > 0.99
        assert abs(vertices[idx, 0]) < 0.05
        assert abs(vertices[idx, 2]) < 0.05

    def test_south_pole(self):
        """Last row center should map to south pole (0, -r, 0)."""
        vertices, uvs = grid_to_sphere(
            np.zeros((3, 5), dtype=np.float32),
            exaggeration=1.0
        )
        idx = 2 * 5 + 2
        assert vertices[idx, 1] < -0.99
        assert abs(vertices[idx, 0]) < 0.05
        assert abs(vertices[idx, 2]) < 0.05

    def test_equator_prime_meridian(self):
        """Middle row, col 0 should be on equator at lon=-180 (negative X)."""
        vertices, uvs = grid_to_sphere(
            np.zeros((5, 10), dtype=np.float32),
            exaggeration=1.0
        )
        idx = 2 * 10 + 0
        assert abs(vertices[idx, 1]) < 0.05
        assert vertices[idx, 0] < -0.95

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
        elevated = np.full((5, 10), 10000.0, dtype=np.float32)

        v_flat, _ = grid_to_sphere(flat, exaggeration=10.0)
        v_high, _ = grid_to_sphere(elevated, exaggeration=10.0)

        r_flat = np.linalg.norm(v_flat, axis=1)
        r_high = np.linalg.norm(v_high, axis=1)

        expected_ratio = 1.0 + (10000 * 10) / MARS_RADIUS
        np.testing.assert_allclose(r_high / r_flat, expected_ratio, atol=1e-4)

    def test_uv_corners(self):
        """UV coordinates should span [0,1] at grid corners."""
        _, uvs = grid_to_sphere(
            np.zeros((3, 5), dtype=np.float32),
            exaggeration=1.0
        )
        assert abs(uvs[0, 0]) < 0.01
        assert abs(uvs[0, 1]) < 0.01
        idx = 2 * 5 + 4
        assert abs(uvs[idx, 0] - 1.0) < 0.01
        assert abs(uvs[idx, 1] - 1.0) < 0.01


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
        vertex_count = 2 + (rows - 2) * cols
        for face in faces:
            for idx in face:
                assert 0 <= idx < vertex_count, f"Index {idx} out of range [0, {vertex_count})"

    def test_all_triangles(self):
        """All faces should be triangles (3 indices each)."""
        faces = build_faces(rows=6, cols=10)
        for face in faces:
            assert len(face) == 3
