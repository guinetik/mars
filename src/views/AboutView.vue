<script setup>
import { ref } from 'vue'

const lightboxOpen = ref(false)
</script>

<template>
  <div class="about">
    <article class="content">
      <h1>About This Project</h1>
      <p class="lead">
        A high-resolution 3D reconstruction of Mars' global topography, built from
        orbital elevation data collected by two spacecraft over two decades of observation.
      </p>

      <figure class="cover" @click="lightboxOpen = true">
        <picture>
          <source srcset="/images/mola-preview.webp" type="image/webp" />
          <img src="/images/mola-preview.png" alt="Mars HRSC-MOLA Blended DEM — global elevation map with hypsometric color ramp" loading="lazy" />
        </picture>
        <figcaption>
          HRSC-MOLA Blended DEM &mdash; 106,694 &times; 53,347 pixels, 200m/px. Click to enlarge.
        </figcaption>
      </figure>

      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="lightbox" @click="lightboxOpen = false">
          <img src="/images/mola-preview.png" alt="Mars HRSC-MOLA Blended DEM — full resolution" />
          <span class="lightbox-close">&times;</span>
        </div>
      </Transition>

      <section>
        <h2>Data Source</h2>
        <p>
          This globe is derived from the <strong>HRSC-MOLA Blended Digital Elevation Model</strong>,
          a dataset produced by the U.S. Geological Survey's Astrogeology Science Center. It merges
          elevation measurements from two instruments:
        </p>
        <ul>
          <li>
            <strong>MOLA</strong> (Mars Orbiter Laser Altimeter) aboard NASA's Mars Global Surveyor,
            which operated from 1997 to 2006. MOLA fired laser pulses at the surface and measured
            return time to determine elevation with ~1 meter vertical precision.
          </li>
          <li>
            <strong>HRSC</strong> (High Resolution Stereo Camera) aboard ESA's Mars Express,
            operational since 2004. HRSC captures stereo imagery that is processed into
            photogrammetric elevation models, providing detail where MOLA's along-track spacing
            leaves gaps.
          </li>
        </ul>
        <p>
          The blended product combines MOLA's global coverage with HRSC's regional detail,
          producing a unified elevation map at <strong>200 meters per pixel</strong> — approximately
          106,694 &times; 53,347 pixels covering the entire planet.
        </p>
      </section>

      <section>
        <h2>Processing Pipeline</h2>
        <p>
          The raw dataset is an 11 GB GeoTIFF file containing signed 16-bit elevation values in meters
          relative to the Mars aeroid (a reference surface analogous to Earth's sea level). Our pipeline
          processes this into a 3D mesh through the following steps:
        </p>
        <ol>
          <li>
            <strong>Downsampling</strong> — The full-resolution grid is resampled to a target resolution
            using bilinear interpolation via <code>rasterio</code> (built on GDAL). The default target
            is 4 km/pixel, yielding approximately 5,300 &times; 2,700 data points.
          </li>
          <li>
            <strong>Spherical projection</strong> — Each grid cell's latitude and longitude are converted
            to 3D Cartesian coordinates on a unit sphere. Elevation values displace each vertex radially
            outward, with a configurable exaggeration factor (default 10&times;) to make terrain features
            visible at globe scale.
          </li>
          <li>
            <strong>Mesh generation</strong> — The grid is triangulated into a watertight sphere mesh.
            Polar rows are collapsed into single vertices with triangle fans to avoid degenerate geometry
            at the poles.
          </li>
          <li>
            <strong>Normal computation</strong> — Per-vertex normals are computed by averaging adjacent
            face normals, enabling smooth shading that reveals subtle terrain features.
          </li>
          <li>
            <strong>Export</strong> — The final mesh is exported as a binary glTF (GLB) file for
            efficient loading in the browser.
          </li>
        </ol>
      </section>

      <section>
        <h2>Elevation Profile</h2>
        <p>
          Mars has the most extreme topographic range of any terrestrial planet in the solar system.
          Elevations in this dataset span from <strong>-8,200 m</strong> (the floor of Hellas Planitia,
          the deepest impact basin) to <strong>+21,229 m</strong> (the summit of Olympus Mons, the
          tallest known volcano). This ~29 km range exceeds Earth's ~20 km range from the Mariana Trench
          to Mount Everest.
        </p>
        <p>
          The planet's topography divides roughly into two hemispheres: the heavily cratered southern
          highlands, which sit 1-3 km above the datum, and the smoother northern lowlands, which are
          1-3 km below. This dichotomy, still not fully explained, is one of the major open questions
          in planetary science.
        </p>
      </section>

      <section>
        <h2>References</h2>
        <ul class="references">
          <li>
            Fergason, R. L., Hare, T. M., &amp; Laura, J. (2018).
            <em>HRSC and MOLA Blended Digital Elevation Model at 200m v2.</em>
            Astrogeology PDS Annex, U.S. Geological Survey.
          </li>
          <li>
            Smith, D. E., et al. (2001).
            <em>Mars Orbiter Laser Altimeter: Experiment summary after the first year of global
            mapping of Mars.</em> Journal of Geophysical Research, 106(E10), 23689-23722.
          </li>
          <li>
            Gwinner, K., et al. (2016).
            <em>The first global image mosaic and digital elevation model of Mars from the
            High Resolution Stereo Camera.</em> European Planetary Science Congress.
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  padding: 3rem 1.5rem 4rem;
}

.content {
  max-width: 680px;
  width: 100%;
}

.content h1 {
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

section {
  margin-bottom: 2.5rem;
}

section h2 {
  color: var(--text);
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.4rem;
}

ul, ol {
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
}

li {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 0.6rem;
}

li strong {
  color: var(--text);
}

.references li {
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.references em {
  color: var(--text);
}

code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: var(--surface);
  padding: 0.15em 0.4em;
  border-radius: 3px;
}

.cover {
  margin: 0 -1rem 2.5rem;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: border-color 0.2s;
}

.cover:hover {
  border-color: var(--accent);
}

.cover img {
  width: 100%;
  display: block;
}

.cover figcaption {
  padding: 0.6rem 1rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
  background: var(--surface);
  letter-spacing: 0.02em;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  padding: 2rem;
}

.lightbox img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.lightbox-close {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  line-height: 1;
}

.lightbox-close:hover {
  color: rgba(255, 255, 255, 0.9);
}

.lightbox-enter-active { transition: opacity 0.2s ease; }
.lightbox-leave-active { transition: opacity 0.15s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
</style>
