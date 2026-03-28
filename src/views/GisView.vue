<template>
  <div class="gis-view">
    <MarsCanvas
      ref="marsCanvasRef"
      @ready="onReady"
      @hover="onHover"
      @select="onSelect"
      @progress="onProgress"
    />
    <LandmarkTooltip
      v-if="!isMobile"
      :landmark="hoveredLandmark"
      :x="tooltipX"
      :y="tooltipY"
    />
    <LandmarkInfoCard
      :landmark="selectedLandmark"
      @close="selectedLandmark = null"
      @explore-rover="(lm) => router.push(`/explore/${lm.id}`)"
      @explore-foot="(lm) => router.push(`/explore-fps/${lm.id}`)"
    />
    <LoadingOverlay
      :is-loading="isLoading"
      :loaded="tilesLoaded"
      :total="tilesTotal"
    />
    <LandmarkLegend v-if="!isLoading" @filter="onFilter" />
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import MarsCanvas from '@/components/gis/MarsCanvas.vue'
import LandmarkTooltip from '@/components/gis/LandmarkTooltip.vue'
import LandmarkInfoCard from '@/components/gis/LandmarkInfoCard.vue'
import LoadingOverlay from '@/components/gis/LoadingOverlay.vue'
import LandmarkLegend from '@/components/gis/LandmarkLegend.vue'

const marsCanvasRef = ref(null)
const router = useRouter()
const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

const isLoading = ref(true)
const tilesLoaded = ref(0)
const tilesTotal = ref(0)
const hoveredLandmark = ref(null)
const selectedLandmark = ref(null)
const tooltipX = ref(0)
const tooltipY = ref(0)

function onReady() {
  isLoading.value = false
}

function onHover(event) {
  if (event) {
    hoveredLandmark.value = event.landmark
    tooltipX.value = event.screenX
    tooltipY.value = event.screenY
  } else {
    hoveredLandmark.value = null
  }
}

function onSelect(landmark) {
  selectedLandmark.value = landmark
}

function onProgress(loaded, total) {
  tilesLoaded.value = loaded
  tilesTotal.value = total
}

function onFilter(hiddenTypes) {
  marsCanvasRef.value?.setFilter(hiddenTypes)
}

function onKeyDown(e) {
  if (e.key === 'Escape') selectedLandmark.value = null
}

window.addEventListener('keydown', onKeyDown)
onUnmounted(() => window.removeEventListener('keydown', onKeyDown))
</script>

<style scoped>
.gis-view { width: 100%; height: calc(100vh - var(--nav-height)); }
</style>
