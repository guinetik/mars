// src/composables/useMarsData.js
import { ref, readonly } from 'vue'

const landmarks = ref([])
const isLoading = ref(false)
let loaded = false

export function useMarsData() {
  async function loadLandmarks() {
    if (loaded) return landmarks.value
    isLoading.value = true
    try {
      const response = await fetch('/data/landmarks.json')
      landmarks.value = await response.json()
      loaded = true
    } finally {
      isLoading.value = false
    }
    return landmarks.value
  }

  return {
    landmarks: readonly(landmarks),
    isLoading: readonly(isLoading),
    loadLandmarks,
  }
}
