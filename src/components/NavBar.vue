<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="brand">MARS</RouterLink>
    <div class="links">
      <RouterLink to="/" exact-active-class="active">Globe</RouterLink>
      <RouterLink to="/about" active-class="active">About</RouterLink>
      <RouterLink to="/gis" active-class="active">Mars GIS</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 100;
}

.brand {
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.15em;
  color: var(--text);
}

.links {
  display: flex;
  gap: 2rem;
}

.links a {
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding-bottom: 2px;
  border-bottom: 1.5px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}

.links a:hover {
  color: var(--text);
}

.links a.active {
  color: var(--text);
  border-bottom-color: var(--accent);
}
</style>
