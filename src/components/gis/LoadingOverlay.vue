<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-content">
        <p class="loading-text">{{ $t('loading.surface') }}</p>
        <p v-if="total > 0" class="loading-progress">{{ loaded }} / {{ total }}</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isLoading: Boolean,
  loaded: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
}
.loading-content { text-align: center; }
.loading-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.loading-progress {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  margin-top: 0.5rem;
}
.fade-leave-active { transition: opacity 0.6s ease; }
.fade-leave-to { opacity: 0; }

@media (max-width: 430px) {
  .loading-text {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }

  .loading-progress {
    font-size: 0.65rem;
  }
}
</style>
