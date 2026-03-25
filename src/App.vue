<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="main">
    <router-view />
  </main>
</template>

<style scoped>
.main {
  padding-top: var(--nav-height);
}
</style>
