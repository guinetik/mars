<template>
  <div class="canvas-wrapper">
    <canvas ref="canvasRef" />
    <div ref="css2dRef" class="css2d-overlay" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThreeScene } from '@/composables/useThreeScene.js'
import { useMarsData } from '@/composables/useMarsData.js'
import { MarsScene } from '@/three/MarsScene.js'

const emit = defineEmits(['ready', 'hover', 'select', 'progress'])

const canvasRef = ref(null)
const css2dRef = ref(null)

const { init, startLoop, flyTo, getCamera, getPointer, setClickHandler, dispose } = useThreeScene()
const { loadLandmarks } = useMarsData()

let marsScene = null

onMounted(async () => {
  if (!canvasRef.value || !css2dRef.value) return

  init(canvasRef.value, css2dRef.value)

  const landmarks = await loadLandmarks()

  marsScene = new MarsScene(landmarks, (loaded, total) => {
    emit('progress', loaded, total)
  })

  marsScene.landmarks.onHover = (event) => emit('hover', event)
  marsScene.landmarks.onClick = (landmark) => {
    emit('select', landmark)
    const target = marsScene.landmarks.getLandmarkTarget(landmark.id)
    if (target) {
      // Transform local landmark position to world space (accounts for Mars obliquity tilt)
      marsScene.marsGroup.updateMatrixWorld()
      const worldPos = target.position.clone().applyMatrix4(marsScene.marsGroup.matrixWorld)
      flyTo(worldPos, target.distance)
    }
  }

  setClickHandler((pointer, camera) => {
    marsScene?.landmarks.clickTest(pointer, camera)
  })

  await marsScene.init()

  startLoop(marsScene.scene, (elapsed) => {
    marsScene.update(elapsed)
    const cam = getCamera()
    if (cam) {
      marsScene.globe.checkDetailLevel(cam.position.length())
      marsScene.landmarks.updateVisibility(cam)
      marsScene.landmarks.pick(getPointer(), cam)
    }
  })

  emit('ready')
})

onUnmounted(() => {
  marsScene?.dispose()
  dispose()
})
</script>

<style scoped>
.canvas-wrapper { position: relative; width: 100%; height: 100%; }
canvas { display: block; width: 100%; height: 100%; }
.css2d-overlay { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
</style>
