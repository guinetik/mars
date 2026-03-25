/**
 * Shared Three.js scene composable.
 *
 * Provides: WebGL + CSS2D renderers, camera, OrbitControls with smooth zoom,
 * auto-rotate on idle, fly-to animation, pointer tracking, and resize handling.
 *
 * Both the Elevation Globe and Mars GIS pages use this — the only difference
 * is the options passed in (camera distances, auto-rotate speed, etc.)
 */
import { ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'

const DEFAULTS = {
  fov: 45,
  near: 0.1,
  far: 2000,
  minDistance: 1.2,
  maxDistance: 40,
  defaultDistance: 28,
  autoRotateSpeed: 0.15,
  autoRotateDelay: 3000,
  flyToDuration: 1.5,
  zoomLerp: 0.08,
  zoomFactor: 0.08,
  dampingFactor: 0.02,
  clearColor: 0x000000,
  // Post-processing
  bloom: true,
  bloomStrength: 0.35,
  bloomRadius: 0.4,
  bloomThreshold: 0.8,
  vignette: true,
  vignetteOffset: 1.0,
  vignetteDarkness: 1.1,
}

export function useThreeScene(opts = {}) {
  const config = { ...DEFAULTS, ...opts }

  const currentZoom = ref(0)
  const currentTarget = ref(new THREE.Vector3())

  let renderer = null
  let composer = null
  let css2dRenderer = null
  let camera = null
  let controls = null
  let clock = null
  let animationId = 0
  let updateCallback = null

  // Auto-rotate
  let isIdle = true
  let idleTimer = null
  const autoRotateRad = config.autoRotateSpeed * Math.PI / 180 * 0.5

  // Smooth zoom
  let targetDistance = config.defaultDistance

  // Fly-to
  let flyToActive = false
  let flyToStart = 0
  const flyToStartPos = new THREE.Vector3()
  const flyToEndPos = new THREE.Vector3()
  const flyToStartTarget = new THREE.Vector3()
  const flyToEndTarget = new THREE.Vector3()
  let flyToResolve = null

  // Pointer
  const pointer = new THREE.Vector2(-999, -999)

  // Click handler
  let onClickCallback = null

  function init(canvas, css2dContainer) {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
    renderer.setClearColor(config.clearColor, 1)

    css2dRenderer = new CSS2DRenderer({ element: css2dContainer })
    css2dRenderer.setSize(canvas.clientWidth, canvas.clientHeight)

    camera = new THREE.PerspectiveCamera(
      config.fov,
      canvas.clientWidth / canvas.clientHeight,
      config.near,
      config.far,
    )
    camera.position.set(0, 0, config.defaultDistance)

    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.dampingFactor = config.dampingFactor
    controls.minDistance = config.minDistance
    controls.maxDistance = config.maxDistance
    controls.autoRotate = false
    controls.enablePan = false
    controls.enableZoom = false

    controls.addEventListener('start', onInteractionStart)
    controls.addEventListener('end', onInteractionEnd)

    clock = new THREE.Clock()

    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('click', onPointerClick)
    canvas.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('resize', onResize)
  }

  function onInteractionStart() {
    isIdle = false
    if (controls && camera) {
      controls.target.set(0, 0, 0)
      targetDistance = camera.position.distanceTo(controls.target)
    }
    if (idleTimer) clearTimeout(idleTimer)
  }

  function onInteractionEnd() {
    if (idleTimer) clearTimeout(idleTimer)
    idleTimer = setTimeout(() => { isIdle = true }, config.autoRotateDelay)
  }

  function onPointerMove(e) {
    const canvas = renderer?.domElement
    if (!canvas) return
    pointer.x = (e.offsetX / canvas.clientWidth) * 2 - 1
    pointer.y = -(e.offsetY / canvas.clientHeight) * 2 + 1
  }

  function onWheel(e) {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 1 : -1
    targetDistance *= 1 + delta * config.zoomFactor
    targetDistance = Math.max(config.minDistance, Math.min(config.maxDistance, targetDistance))
    isIdle = false
    if (idleTimer) clearTimeout(idleTimer)
    idleTimer = setTimeout(() => { isIdle = true }, config.autoRotateDelay)
  }

  function onPointerClick() {
    if (camera && onClickCallback) {
      onClickCallback(pointer, camera)
    }
  }

  function setClickHandler(handler) {
    onClickCallback = handler
  }

  function onResize() {
    const canvas = renderer?.domElement
    if (!canvas || !camera || !renderer || !css2dRenderer) return
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
    composer?.setSize(w, h)
    css2dRenderer.setSize(w, h)
  }

  function startLoop(scene, onUpdate) {
    updateCallback = onUpdate

    // Set up post-processing
    composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))

    if (config.bloom) {
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(renderer.domElement.clientWidth, renderer.domElement.clientHeight),
        config.bloomStrength,
        config.bloomRadius,
        config.bloomThreshold,
      )
      composer.addPass(bloomPass)
    }

    if (config.vignette) {
      const vignettePass = new ShaderPass({
        uniforms: {
          tDiffuse: { value: null },
          offset: { value: config.vignetteOffset },
          darkness: { value: config.vignetteDarkness },
        },
        vertexShader: /* glsl */`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */`
          uniform sampler2D tDiffuse;
          uniform float offset;
          uniform float darkness;
          varying vec2 vUv;
          void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float dist = distance(vUv, vec2(0.5));
            float vig = smoothstep(0.8, offset * 0.5, dist * (darkness + offset));
            color.rgb *= vig;
            gl_FragColor = color;
          }
        `,
      })
      composer.addPass(vignettePass)
    }

    function animate() {
      animationId = requestAnimationFrame(animate)
      if (!renderer || !camera || !controls || !clock || !css2dRenderer) return

      const elapsed = clock.getElapsedTime()
      const delta = clock.getDelta()

      // Fly-to
      if (flyToActive) {
        const t = Math.min(1, (elapsed - flyToStart) / config.flyToDuration)
        const eased = t * t * (3 - 2 * t)
        camera.position.lerpVectors(flyToStartPos, flyToEndPos, eased)
        controls.target.lerpVectors(flyToStartTarget, flyToEndTarget, eased)

        if (t >= 1) {
          flyToActive = false
          controls.enabled = true
          targetDistance = camera.position.distanceTo(controls.target)
          flyToResolve?.()
        }
      }

      // Smooth zoom
      if (!flyToActive) {
        const dir = camera.position.clone().sub(controls.target).normalize()
        const currentDist = camera.position.distanceTo(controls.target)
        const newDist = currentDist + (targetDistance - currentDist) * config.zoomLerp
        camera.position.copy(controls.target).addScaledVector(dir, newDist)
      }

      // Auto-rotate when idle
      if (isIdle && !flyToActive) {
        const angle = autoRotateRad * delta
        const pos = camera.position.clone().sub(controls.target)
        const cosA = Math.cos(angle)
        const sinA = Math.sin(angle)
        const newX = pos.x * cosA + pos.z * sinA
        const newZ = -pos.x * sinA + pos.z * cosA
        camera.position.set(
          newX + controls.target.x,
          camera.position.y,
          newZ + controls.target.z
        )
      }

      controls.update()
      updateCallback?.(elapsed)

      const dist = camera.position.distanceTo(controls.target)
      currentZoom.value = 1 - (dist - config.minDistance) / (config.maxDistance - config.minDistance)
      currentTarget.value.copy(controls.target)

      composer.render()
      css2dRenderer.render(scene, camera)
    }

    animate()
  }

  function flyTo(targetPosition, distance) {
    if (!camera || !controls || !clock) return Promise.resolve()

    return new Promise((resolve) => {
      flyToResolve = resolve
      flyToActive = true
      flyToStart = clock.getElapsedTime()
      flyToStartPos.copy(camera.position)
      flyToStartTarget.copy(controls.target)
      flyToEndTarget.copy(targetPosition)

      const direction = targetPosition.clone().normalize()
      flyToEndPos.copy(targetPosition).addScaledVector(direction, distance)

      controls.enabled = false
      targetDistance = flyToEndPos.distanceTo(flyToEndTarget)
    })
  }

  function getCamera() { return camera }
  function getPointer() { return pointer }

  function dispose() {
    if (animationId) cancelAnimationFrame(animationId)
    controls?.removeEventListener('start', onInteractionStart)
    controls?.removeEventListener('end', onInteractionEnd)
    controls?.dispose()
    renderer?.domElement.removeEventListener('pointermove', onPointerMove)
    renderer?.domElement.removeEventListener('click', onPointerClick)
    renderer?.domElement.removeEventListener('wheel', onWheel)
    window.removeEventListener('resize', onResize)
    renderer?.dispose()
    if (idleTimer) clearTimeout(idleTimer)
  }

  return {
    currentZoom,
    currentTarget,
    init,
    startLoop,
    flyTo,
    getCamera,
    getPointer,
    setClickHandler,
    dispose,
  }
}
