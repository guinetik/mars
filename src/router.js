import { createRouter, createWebHistory } from 'vue-router'
import GlobeView from './views/GlobeView.vue'
import AboutView from './views/AboutView.vue'
import GisView from './views/GisView.vue'
import ExploreView from './views/ExploreView.vue'

const routes = [
  { path: '/', name: 'Globe', component: GlobeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/gis', name: 'Mars GIS', component: GisView },
  { path: '/explore/:landmarkId', name: 'Explore', component: ExploreView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
