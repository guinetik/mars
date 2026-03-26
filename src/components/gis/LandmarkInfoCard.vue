<template>
  <Transition name="card">
    <div v-if="landmark" class="info-card">
      <button class="card-close" @click="$emit('close')">&times;</button>
      <div class="card-accent" :style="{ backgroundColor: landmark.accent }" />
      <h2 class="card-title">{{ landmark.name }}</h2>
      <p class="card-description">{{ landmark.description }}</p>

      <div class="card-details">
        <template v-if="landmark.type === 'landing-site'">
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.mission') }}</span>
            <span class="detail-value">{{ landmark.mission }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.agency') }}</span>
            <span class="detail-value">{{ landmark.agency }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.year') }}</span>
            <span class="detail-value">{{ landmark.year }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.status') }}</span>
            <span class="detail-value" style="text-transform: capitalize">{{ landmark.status }}</span>
          </div>
        </template>

        <template v-if="landmark.type === 'geological'">
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.feature') }}</span>
            <span class="detail-value" style="text-transform: capitalize">{{ landmark.featureType.replace('-', ' ') }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.diameter') }}</span>
            <span class="detail-value">{{ landmark.diameterKm.toLocaleString() }} km</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.elevation') }}</span>
            <span class="detail-value">{{ landmark.elevationKm > 0 ? '+' : '' }}{{ landmark.elevationKm }} km</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.pressure') }}</span>
            <span class="detail-value">{{ landmark.surfacePressureMbar }} mbar</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.tempRange') }}</span>
            <span class="detail-value">{{ landmark.temperatureMinK }}K — {{ landmark.temperatureMaxK }}K</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">{{ $t('infoCard.age') }}</span>
            <span class="detail-value" style="text-transform: capitalize">{{ landmark.geologicalAge }}</span>
          </div>

          <div class="stat-bars">
            <div class="stat-bar-row">
              <span class="stat-label">{{ $t('infoCard.waterIce') }}</span>
              <div class="stat-track"><div class="stat-fill" :style="{ width: `${landmark.waterIceIndex * 100}%`, background: '#4fc3f7' }" /></div>
            </div>
            <div class="stat-bar-row">
              <span class="stat-label">{{ $t('infoCard.ironOxide') }}</span>
              <div class="stat-track"><div class="stat-fill" :style="{ width: `${landmark.ironOxideIndex * 100}%`, background: '#ff7043' }" /></div>
            </div>
            <div class="stat-bar-row">
              <span class="stat-label">{{ $t('infoCard.silicate') }}</span>
              <div class="stat-track"><div class="stat-fill" :style="{ width: `${landmark.silicateIndex * 100}%`, background: '#ab47bc' }" /></div>
            </div>
            <div class="stat-bar-row">
              <span class="stat-label">{{ $t('infoCard.basalt') }}</span>
              <div class="stat-track"><div class="stat-fill" :style="{ width: `${landmark.basaltIndex * 100}%`, background: '#66bb6a' }" /></div>
            </div>
            <div class="stat-bar-row">
              <span class="stat-label">{{ $t('infoCard.roughness') }}</span>
              <div class="stat-track"><div class="stat-fill" :style="{ width: `${landmark.roughness * 100}%`, background: '#ffca28' }" /></div>
            </div>
            <div class="stat-bar-row">
              <span class="stat-label">{{ $t('infoCard.dustCover') }}</span>
              <div class="stat-track"><div class="stat-fill" :style="{ width: `${landmark.dustCover * 100}%`, background: '#bcaaa4' }" /></div>
            </div>
            <div class="stat-bar-row">
              <span class="stat-label">{{ $t('infoCard.cratering') }}</span>
              <div class="stat-track"><div class="stat-fill" :style="{ width: `${landmark.craterDensity * 100}%`, background: '#78909c' }" /></div>
            </div>
          </div>
        </template>

        <div class="detail-row">
          <span class="detail-label">{{ $t('infoCard.coordinates') }}</span>
          <span class="detail-value">{{ landmark.lat.toFixed(2) }}°, {{ landmark.lon.toFixed(2) }}°</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  landmark: { type: Object, default: null }
})

defineEmits(['close'])
</script>

<style scoped>
.info-card {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 30;
  width: 320px;
  padding: 20px;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
}

.card-close {
  position: absolute;
  top: 12px;
  right: 14px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 18px;
  cursor: pointer;
  line-height: 1;
}

.card-close:hover {
  color: rgba(255, 255, 255, 0.8);
}

.card-accent {
  width: 24px;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 12px;
}

.card-title {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 8px;
  letter-spacing: 0.03em;
}

.card-description {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  margin: 0 0 16px;
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.detail-label {
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.detail-value {
  color: rgba(255, 255, 255, 0.7);
}

.stat-bars {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stat-bar-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
}

.stat-label {
  width: 64px;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.stat-track {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}

.stat-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.4s ease-out;
}

.card-enter-active { transition: all 0.3s ease-out; }
.card-leave-active { transition: all 0.2s ease-in; }
.card-enter-from { opacity: 0; transform: translateY(16px); }
.card-leave-to { opacity: 0; transform: translateY(8px); }

@media (max-width: 430px) {
  .info-card {
    left: 12px;
    right: 12px;
    bottom: 12px;
    width: auto;
    padding: 16px;
    max-height: 60vh;
    overflow-y: auto;
  }

  .card-title {
    font-size: 14px;
  }

  .card-description {
    font-size: 12px;
  }

  .stat-label {
    width: 54px;
    font-size: 9px;
  }
}

@media (max-width: 300px) {
  .info-card {
    left: 6px;
    right: 6px;
    bottom: 6px;
    padding: 12px;
    max-height: 50vh;
  }

  .detail-row {
    font-size: 10px;
  }
}
</style>
