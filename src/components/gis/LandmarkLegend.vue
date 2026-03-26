<script setup>
import { ref, watch } from 'vue'
import { LANDMARK_COLORS } from '@/three/constants.js'

const emit = defineEmits(['filter'])

const TYPES = [
  { key: 'landing-site', labelKey: 'legend.landingSite' },
  { key: 'volcano', labelKey: 'legend.volcano' },
  { key: 'canyon', labelKey: 'legend.canyon' },
  { key: 'basin', labelKey: 'legend.basin' },
  { key: 'plain', labelKey: 'legend.plain' },
  { key: 'polar-cap', labelKey: 'legend.polarCap' },
]

// All visible by default
const active = ref(new Set(TYPES.map(t => t.key)))

function toggle(key) {
  const next = new Set(active.value)
  if (next.has(key)) {
    next.delete(key)
  } else {
    next.add(key)
  }
  active.value = next
  // Emit the hidden set (inverse of active)
  const hidden = new Set(TYPES.map(t => t.key).filter(k => !next.has(k)))
  emit('filter', hidden)
}
</script>

<template>
  <div class="legend">
    <button
      v-for="t in TYPES"
      :key="t.key"
      class="legend-item"
      :class="{ dimmed: !active.has(t.key) }"
      @click="toggle(t.key)"
    >
      <span class="legend-dot" :style="{ backgroundColor: LANDMARK_COLORS[t.key] }" />
      <span class="legend-label">{{ $t(t.labelKey) }}</span>
    </button>
  </div>
</template>

<style scoped>
.legend {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 0.6rem;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  border-radius: 6px;
  z-index: 10;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
  border-radius: 3px;
  transition: opacity 0.15s;
}

.legend-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.legend-item.dimmed {
  opacity: 0.3;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
}

.legend-item:not(.dimmed) .legend-label {
  color: var(--text);
}

@media (max-width: 430px) {
  .legend {
    bottom: 0.5rem;
    left: 0.5rem;
    padding: 0.35rem 0.5rem;
  }

  .legend-label {
    font-size: 0.6rem;
  }

  .legend-dot {
    width: 6px;
    height: 6px;
  }
}

@media (max-width: 300px) {
  .legend {
    flex-direction: row;
    flex-wrap: wrap;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
  }

  .legend-item {
    gap: 0.3rem;
    padding: 0.15rem 0.2rem;
  }

  .legend-label {
    font-size: 0.55rem;
  }
}
</style>
