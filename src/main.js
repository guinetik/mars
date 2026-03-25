import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Scene setup
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000)
camera.position.set(0, 0, 3)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 1.5)
dirLight.position.set(5, 3, 5)
scene.add(dirLight)

// Load globe
const loader = new GLTFLoader()
const loadingEl = document.getElementById('loading')

loader.load(
  '/mars_globe.glb',
  (gltf) => {
    const model = gltf.scene
    // Auto-center
    const box = new THREE.Box3().setFromObject(model)
    const center = box.getCenter(new THREE.Vector3())
    model.position.sub(center)
    // Auto-scale to fit
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    if (maxDim > 0) {
      const scale = 2 / maxDim
      model.scale.setScalar(scale)
    }
    scene.add(model)
    loadingEl.style.display = 'none'
  },
  (progress) => {
    if (progress.total > 0) {
      const pct = ((progress.loaded / progress.total) * 100).toFixed(0)
      loadingEl.textContent = `Loading Mars globe... ${pct}%`
    }
  },
  (error) => {
    loadingEl.textContent = `Error loading globe: ${error.message}`
    console.error('GLB load error:', error)
  }
)

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Render loop
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
animate()
