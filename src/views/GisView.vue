<template>
  <div class="gis-placeholder">
    <h1>Mars GIS</h1>
    <p>Coming soon.</p>
  </div>
</template>

<style scoped>
.gis-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--nav-height));
  gap: 0.75rem;
}

.gis-placeholder h1 {
  font-size: 1.5rem;
  color: var(--text);
}

.gis-placeholder p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}
</style>
