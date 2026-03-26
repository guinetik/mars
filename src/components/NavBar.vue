<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const route = useRoute()
const menuOpen = ref(false)

function setLocale(code) {
  locale.value = code
  localStorage.setItem('mars-locale', code)
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="brand">{{ $t('nav.brand') }}</RouterLink>
    <div class="links">
      <RouterLink to="/" exact-active-class="active">{{ $t('nav.elevationGlobe') }}</RouterLink>
      <RouterLink to="/gis" active-class="active">{{ $t('nav.marsGis') }}</RouterLink>
      <RouterLink to="/about" active-class="active">{{ $t('nav.about') }}</RouterLink>
    </div>
    <div class="nav-end">
      <div class="locale-switch" role="radiogroup" aria-label="Language">
        <span class="locale-track" :class="{ 'at-right': locale === 'pt-BR' }" />
        <button class="locale-opt" :class="{ selected: locale === 'en' }" @click="setLocale('en')" :aria-checked="locale === 'en'" role="radio">EN</button>
        <button class="locale-opt" :class="{ selected: locale === 'pt-BR' }" @click="setLocale('pt-BR')" :aria-checked="locale === 'pt-BR'" role="radio">PT</button>
      </div>
      <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span /><span /><span />
      </button>
    </div>
  </nav>

  <Transition name="drawer">
    <div v-if="menuOpen" class="mobile-drawer" @click.self="closeMenu">
      <div class="drawer-panel">
        <RouterLink to="/" exact-active-class="active" @click="closeMenu">{{ $t('nav.elevationGlobe') }}</RouterLink>
        <RouterLink to="/gis" active-class="active" @click="closeMenu">{{ $t('nav.marsGis') }}</RouterLink>
        <RouterLink to="/about" active-class="active" @click="closeMenu">{{ $t('nav.about') }}</RouterLink>
        <div class="drawer-locale">
          <div class="locale-switch" role="radiogroup" aria-label="Language">
            <span class="locale-track" :class="{ 'at-right': locale === 'pt-BR' }" />
            <button class="locale-opt" :class="{ selected: locale === 'en' }" @click="setLocale('en')" role="radio">EN</button>
            <button class="locale-opt" :class="{ selected: locale === 'pt-BR' }" @click="setLocale('pt-BR')" role="radio">PT</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
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
  white-space: nowrap;
}

.links a:hover {
  color: var(--text);
}

.links a.active {
  color: var(--text);
  border-bottom-color: var(--accent);
}

.nav-end {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--text-secondary);
  border-radius: 1px;
  transition: transform 0.25s, opacity 0.2s;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(5.5px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-5.5px) rotate(-45deg);
}

/* Locale toggle */
.locale-switch {
  position: relative;
  display: flex;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.locale-track {
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(50% - 2px);
  height: calc(100% - 4px);
  background: var(--accent);
  border-radius: 2px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.9;
}

.locale-track.at-right {
  transform: translateX(100%);
}

.locale-opt {
  position: relative;
  z-index: 1;
  background: none;
  border: none;
  padding: 0.2rem 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  cursor: pointer;
  transition: color 0.2s;
  line-height: 1.4;
}

.locale-opt.selected {
  color: #fff;
}

.locale-opt:not(.selected):hover {
  color: var(--text);
}

/* Mobile drawer */
.mobile-drawer {
  display: none;
}

.drawer-panel a,
.drawer-locale {
  display: none;
}

@media (max-width: 430px) {
  .navbar {
    grid-template-columns: 1fr auto;
    padding: 0 0.75rem;
  }

  .links {
    display: none;
  }

  .nav-end .locale-switch {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-drawer {
    display: block;
    position: fixed;
    inset: 0;
    top: var(--nav-height);
    z-index: 99;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }

  .drawer-panel {
    display: flex;
    flex-direction: column;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 1rem 1.25rem 1.25rem;
    gap: 0;
  }

  .drawer-panel a {
    display: block;
    padding: 0.75rem 0;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
    transition: color 0.15s;
  }

  .drawer-panel a:last-of-type {
    border-bottom: none;
  }

  .drawer-panel a.active {
    color: var(--text);
  }

  .drawer-locale {
    display: flex;
    padding-top: 1rem;
  }

  .drawer-locale .locale-switch {
    display: flex;
  }

  /* Drawer transitions */
  .drawer-enter-active {
    transition: opacity 0.2s ease;
  }
  .drawer-enter-active .drawer-panel {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .drawer-leave-active {
    transition: opacity 0.15s ease;
  }
  .drawer-leave-active .drawer-panel {
    transition: transform 0.15s ease-in;
  }
  .drawer-enter-from {
    opacity: 0;
  }
  .drawer-enter-from .drawer-panel {
    transform: translateY(-8px);
  }
  .drawer-leave-to {
    opacity: 0;
  }
  .drawer-leave-to .drawer-panel {
    transform: translateY(-8px);
  }
}
</style>
