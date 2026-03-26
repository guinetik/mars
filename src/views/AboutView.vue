<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const lightboxOpen = ref(false)
</script>

<template>
  <div class="about">
    <article class="content">
      <h1>{{ t('about.title') }}</h1>
      <p class="lead">{{ t('about.lead') }}</p>

      <figure class="cover" @click="lightboxOpen = true">
        <picture>
          <source srcset="/images/mola-preview.webp" type="image/webp" />
          <img src="/images/mola-preview.png" alt="Mars HRSC-MOLA Blended DEM — global elevation map with hypsometric color ramp" loading="lazy" />
        </picture>
        <figcaption>{{ t('about.figcaption') }}</figcaption>
      </figure>

      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="lightbox" @click="lightboxOpen = false">
          <img src="/images/mola-preview.png" alt="Mars HRSC-MOLA Blended DEM — full resolution" />
          <span class="lightbox-close">&times;</span>
        </div>
      </Transition>

      <section>
        <h2>{{ t('about.dataSource.title') }}</h2>
        <p>
          <i18n-t keypath="about.dataSource.p1" tag="span">
            <template #strong_dem><strong>{{ t('about.dataSource.strong_dem') }}</strong></template>
          </i18n-t>
        </p>
        <ul>
          <li>
            <i18n-t keypath="about.dataSource.mola" tag="span">
              <template #strong_mola><strong>{{ t('about.dataSource.strong_mola') }}</strong></template>
            </i18n-t>
          </li>
          <li>
            <i18n-t keypath="about.dataSource.hrsc" tag="span">
              <template #strong_hrsc><strong>{{ t('about.dataSource.strong_hrsc') }}</strong></template>
            </i18n-t>
          </li>
        </ul>
        <p>
          <i18n-t keypath="about.dataSource.p2" tag="span">
            <template #strong_res><strong>{{ t('about.dataSource.strong_res') }}</strong></template>
          </i18n-t>
        </p>
      </section>

      <section>
        <h2>{{ t('about.pipeline.title') }}</h2>
        <p>{{ t('about.pipeline.intro') }}</p>
        <ol>
          <li>
            <strong>{{ t('about.pipeline.step1_title') }}</strong> &mdash;
            <i18n-t keypath="about.pipeline.step1" tag="span">
              <template #code_rasterio><code>rasterio</code></template>
            </i18n-t>
          </li>
          <li><strong>{{ t('about.pipeline.step2_title') }}</strong> &mdash; {{ t('about.pipeline.step2') }}</li>
          <li><strong>{{ t('about.pipeline.step3_title') }}</strong> &mdash; {{ t('about.pipeline.step3') }}</li>
          <li><strong>{{ t('about.pipeline.step4_title') }}</strong> &mdash; {{ t('about.pipeline.step4') }}</li>
          <li><strong>{{ t('about.pipeline.step5_title') }}</strong> &mdash; {{ t('about.pipeline.step5') }}</li>
        </ol>
      </section>

      <section>
        <h2>{{ t('about.elevation.title') }}</h2>
        <p>
          <i18n-t keypath="about.elevation.p1" tag="span">
            <template #strong_min><strong>{{ t('about.elevation.strong_min') }}</strong></template>
            <template #strong_max><strong>{{ t('about.elevation.strong_max') }}</strong></template>
          </i18n-t>
        </p>
        <p>{{ t('about.elevation.p2') }}</p>
      </section>

      <section>
        <h2>{{ t('about.references.title') }}</h2>
        <ul class="references">
          <li>
            <i18n-t keypath="about.references.ref1" tag="span">
              <template #em><em>{{ t('about.references.ref1_em') }}</em></template>
            </i18n-t>
          </li>
          <li>
            <i18n-t keypath="about.references.ref2" tag="span">
              <template #em><em>{{ t('about.references.ref2_em') }}</em></template>
            </i18n-t>
          </li>
          <li>
            <i18n-t keypath="about.references.ref3" tag="span">
              <template #em><em>{{ t('about.references.ref3_em') }}</em></template>
            </i18n-t>
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

@media (max-width: 430px) {
  .about {
    padding: 2rem 1rem 3rem;
  }

  .content h1 {
    font-size: 1.5rem;
  }

  .lead {
    font-size: 0.95rem;
  }

  section h2 {
    font-size: 1.15rem;
  }

  .cover {
    margin: 0 -0.5rem 2rem;
  }

  .cover figcaption {
    font-size: 0.65rem;
    padding: 0.5rem 0.75rem;
  }

  .lightbox {
    padding: 1rem;
  }

  .references li {
    font-size: 0.8rem;
  }
}

@media (max-width: 300px) {
  .about {
    padding: 1.5rem 0.75rem 2rem;
  }

  .content h1 {
    font-size: 1.25rem;
  }

  .lead {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  section h2 {
    font-size: 1rem;
  }

  li {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .cover {
    margin: 0 0 1.5rem;
    border-radius: 4px;
  }

  .lightbox {
    padding: 0.5rem;
  }
}
</style>
