import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import {
  ROVER_SCALE,
  ROVER_MOVE_SPEED,
  ROVER_TURN_SPEED,
  ROVER_WHEEL_SPIN_SPEED,
  ROVER_STEER_ANGLE_MAX,
  ROVER_STEER_LERP,
  ROVER_CAMERA_DISTANCE_DEFAULT,
  ROVER_CAMERA_DISTANCE_MIN,
  ROVER_CAMERA_DISTANCE_MAX,
  ROVER_CAMERA_HEIGHT_OFFSET,
  ROVER_CAMERA_LOOK_HEIGHT_OFFSET,
  ROVER_CAMERA_LERP,
  ROVER_GROUND_LERP,
  ROVER_TILT_LERP,
  ROVER_ORBIT_SENSITIVITY,
  ROVER_ORBIT_PITCH_MIN,
  ROVER_ORBIT_PITCH_MAX,
  ROVER_WHEEL_ZOOM_FACTOR,
} from '@/three/constants.js'

/**
 * Wheel and steering node names from the Curiosity GLB model.
 */
const WHEEL_NAMES = [
  'wheel_01_L', 'wheel_01_R',
  'wheel_02_L', 'wheel_02_R',
  'wheel_03_L', 'wheel_03_R',
]
const STEER_NAMES = {
  FL: 'suspension_steer_F_L',
  FR: 'suspension_steer_F_R',
  BL: 'suspension_steer_B_L',
  BR: 'suspension_steer_B_R',
}

export function useRoverControls(camera, canvas) {
  const keys = new Set()
  let terrainMesh = null
  let rover = null
  let wheels = []
  let steer = { FL: null, FR: null, BL: null, BR: null }

  // Deploy animation state (used only during loadRover to bake the deployed pose)
  let mixer = null
  let deployAction = null
  let deployDuration = 0

  // Rover state
  let heading = 0
  let wheelAngle = 0
  let currentSteerAngle = 0
  const tiltQuat = new THREE.Quaternion()

  // Camera orbit state
  let orbitAngle = Math.PI
  let orbitPitch = 0.3
  let cameraDistance = ROVER_CAMERA_DISTANCE_DEFAULT
  let isDragging = false
  let lastMouseX = 0
  let lastMouseY = 0

  // Smoothed camera
  const cameraPos = new THREE.Vector3()
  const cameraTarget = new THREE.Vector3()
  let initialized = false

  // Intro swoop — camera starts high and eases down
  const INTRO_DURATION = 4.0 // seconds
  const INTRO_START_HEIGHT = 250
  const INTRO_START_DISTANCE = 60
  let introElapsed = 0
  let introActive = true

  // Chassis shake
  let shakeTime = 0

  // Heightmap — built from mesh vertices, then O(1) lookups per frame
  const HEIGHTMAP_RES = 256
  let heightmap = null  // Float32Array
  let hmMinX = 0, hmMinZ = 0, hmMaxX = 0, hmMaxZ = 0
  let hmStepX = 0, hmStepZ = 0

  function setTerrainMesh(mesh) {
    terrainMesh = mesh
    buildHeightmap(mesh)
  }

  /**
   * Build heightmap by splatting mesh vertices onto a grid.
   * Pure array math from the vertex buffer — no raycasting, instant.
   */
  function buildHeightmap(mesh) {
    const box = new THREE.Box3().setFromObject(mesh)
    hmMinX = box.min.x
    hmMinZ = box.min.z
    hmMaxX = box.max.x
    hmMaxZ = box.max.z
    hmStepX = (hmMaxX - hmMinX) / (HEIGHTMAP_RES - 1)
    hmStepZ = (hmMaxZ - hmMinZ) / (HEIGHTMAP_RES - 1)

    // Initialize with min height
    heightmap = new Float32Array(HEIGHTMAP_RES * HEIGHTMAP_RES)
    heightmap.fill(box.min.y)

    // Splat each vertex's world-space Y onto the nearest grid cell (max wins)
    const pos = new THREE.Vector3()
    mesh.traverse((child) => {
      if (!child.isMesh) return
      const geo = child.geometry
      const posAttr = geo.getAttribute('position')
      if (!posAttr) return
      child.updateWorldMatrix(true, false)
      const matrix = child.matrixWorld

      for (let i = 0; i < posAttr.count; i++) {
        pos.fromBufferAttribute(posAttr, i).applyMatrix4(matrix)
        const gx = (pos.x - hmMinX) / hmStepX
        const gz = (pos.z - hmMinZ) / hmStepZ
        const ix = Math.round(gx)
        const iz = Math.round(gz)
        if (ix < 0 || ix >= HEIGHTMAP_RES || iz < 0 || iz >= HEIGHTMAP_RES) continue
        const idx = iz * HEIGHTMAP_RES + ix
        if (pos.y > heightmap[idx]) heightmap[idx] = pos.y
      }
    })

    // Fill gaps — some grid cells may have no vertices nearby.
    // Simple box-blur pass: any cell still at min gets averaged from neighbors.
    const minY = box.min.y
    for (let pass = 0; pass < 3; pass++) {
      for (let iz = 1; iz < HEIGHTMAP_RES - 1; iz++) {
        for (let ix = 1; ix < HEIGHTMAP_RES - 1; ix++) {
          const idx = iz * HEIGHTMAP_RES + ix
          if (heightmap[idx] > minY) continue
          let sum = 0, count = 0
          for (let dz = -1; dz <= 1; dz++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dz === 0) continue
              const nv = heightmap[(iz + dz) * HEIGHTMAP_RES + (ix + dx)]
              if (nv > minY) { sum += nv; count++ }
            }
          }
          if (count > 0) heightmap[idx] = sum / count
        }
      }
    }
  }

  /**
   * Bilinear interpolation on the heightmap — same technique as irover.
   * O(1) per call, no raycasting.
   */
  function getGroundHeight(x, z) {
    if (!heightmap) return 0
    const gx = (x - hmMinX) / hmStepX
    const gz = (z - hmMinZ) / hmStepZ
    const ix = Math.floor(gx)
    const iz = Math.floor(gz)
    const fx = gx - ix
    const fz = gz - iz
    if (ix < 0 || ix >= HEIGHTMAP_RES - 1 || iz < 0 || iz >= HEIGHTMAP_RES - 1) return 0
    const i00 = iz * HEIGHTMAP_RES + ix
    return (
      heightmap[i00] * (1 - fx) * (1 - fz) +
      heightmap[i00 + 1] * fx * (1 - fz) +
      heightmap[i00 + HEIGHTMAP_RES] * (1 - fx) * fz +
      heightmap[i00 + HEIGHTMAP_RES + 1] * fx * fz
    )
  }

  // Reusable vectors to avoid per-frame allocations
  const _fwd = new THREE.Vector3()
  const _rgt = new THREE.Vector3()

  /**
   * Snapshot every node's transform, stop the mixer, then restore —
   * freezes the rover in its deployed pose so it survives mixer teardown.
   */
  function bakeDeployedPose() {
    if (!rover || !deployAction || !mixer) return
    const saved = new Map()
    rover.traverse((node) => {
      saved.set(node, {
        pos: node.position.clone(),
        quat: node.quaternion.clone(),
        scale: node.scale.clone(),
      })
    })
    deployAction.stop()
    mixer.uncacheRoot(rover)
    mixer = null
    deployAction = null
    saved.forEach(({ pos, quat, scale }, node) => {
      node.position.copy(pos)
      node.quaternion.copy(quat)
      node.scale.copy(scale)
    })

    // Now extract wheel/steer nodes from the deployed pose
    extractNodes()
  }

  function extractNodes() {
    wheels = []
    for (const name of WHEEL_NAMES) {
      const node = rover.getObjectByName(name)
      if (node) wheels.push(node)
    }
    for (const [key, name] of Object.entries(STEER_NAMES)) {
      steer[key] = rover.getObjectByName(name) || null
    }
  }

  /**
   * Load the rover GLB model. Plays the deploy animation automatically.
   * Returns the rover Group once loaded.
   */
  async function loadRover(scene) {
    const loader = new GLTFLoader()
    const gltf = await new Promise((resolve, reject) => {
      loader.load('/nasa_curiosity_clean.glb', resolve, undefined, reject)
    })

    rover = gltf.scene
    rover.scale.set(ROVER_SCALE, ROVER_SCALE, ROVER_SCALE)

    // Enable shadows on all meshes
    rover.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    // Jump deploy animation to end and bake the deployed pose
    if (gltf.animations.length > 0) {
      mixer = new THREE.AnimationMixer(rover)
      const clip = gltf.animations[0]
      deployDuration = clip.duration
      deployAction = mixer.clipAction(clip)
      deployAction.setLoop(THREE.LoopOnce, 1)
      deployAction.clampWhenFinished = true
      deployAction.reset()
      deployAction.play()
      deployAction.time = deployDuration
      mixer.update(0)
      bakeDeployedPose()
    } else {
      extractNodes()
      state = 'ready'
    }

    scene.add(rover)
    return rover
  }

  /**
   * Place the rover at the terrain center and orient camera.
   */
  function placeOnTerrain() {
    if (!rover) return
    const groundY = getGroundHeight(0, 0)
    rover.position.set(0, groundY, 0)

    // Initialize camera behind the rover
    heading = 0
    orbitAngle = Math.PI
    initialized = false
  }

  // --- Input handlers ---
  function onKeyDown(e) {
    keys.add(e.code)
  }

  function onKeyUp(e) {
    keys.delete(e.code)
  }

  function onMouseDown(e) {
    isDragging = true
    lastMouseX = e.clientX
    lastMouseY = e.clientY
  }

  function onMouseUp() {
    isDragging = false
  }

  function onMouseMove(e) {
    if (!isDragging) return
    const dx = e.clientX - lastMouseX
    const dy = e.clientY - lastMouseY
    lastMouseX = e.clientX
    lastMouseY = e.clientY

    orbitAngle -= dx * ROVER_ORBIT_SENSITIVITY
    orbitPitch += dy * ROVER_ORBIT_SENSITIVITY
    orbitPitch = Math.max(ROVER_ORBIT_PITCH_MIN, Math.min(ROVER_ORBIT_PITCH_MAX, orbitPitch))
  }

  function onWheel(e) {
    e.preventDefault()
    cameraDistance = Math.max(
      ROVER_CAMERA_DISTANCE_MIN,
      Math.min(ROVER_CAMERA_DISTANCE_MAX, cameraDistance + e.deltaY * ROVER_WHEEL_ZOOM_FACTOR),
    )
  }

  function onContextMenu(e) {
    e.preventDefault()
  }

  function init() {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('wheel', onWheel, { passive: false })
    canvas.addEventListener('contextmenu', onContextMenu)
  }

  function update(delta) {
    if (!rover) return

    // --- Steering & movement ---
    let driveSign = 0
    let steerSignVal = 0

    if (keys.has('KeyA') || keys.has('ArrowLeft')) {
      heading += ROVER_TURN_SPEED * delta
      steerSignVal = 1
    }
    if (keys.has('KeyD') || keys.has('ArrowRight')) {
      heading -= ROVER_TURN_SPEED * delta
      steerSignVal = -1
    }

    const forward = new THREE.Vector3(
      -Math.sin(heading),
      0,
      -Math.cos(heading),
    )

    const moveDir = new THREE.Vector3()
    if (keys.has('KeyW') || keys.has('ArrowUp')) {
      moveDir.sub(forward)
      driveSign = 1
    }
    if (keys.has('KeyS') || keys.has('ArrowDown')) {
      moveDir.add(forward)
      driveSign = -1
    }

    // Sprint (3x boost)
    const speed = (keys.has('ShiftLeft') || keys.has('ShiftRight'))
      ? ROVER_MOVE_SPEED * 3
      : ROVER_MOVE_SPEED

    const isMoving = moveDir.lengthSq() > 0

    if (isMoving) {
      moveDir.normalize()
      rover.position.x += moveDir.x * speed * delta
      rover.position.z += moveDir.z * speed * delta
    }

    // --- Wheel animation ---
    wheelAngle += driveSign * ROVER_WHEEL_SPIN_SPEED * delta
    for (const wheel of wheels) {
      wheel.rotation.x = wheelAngle
    }

    // Steering animation
    const targetSteer = steerSignVal * ROVER_STEER_ANGLE_MAX
    currentSteerAngle += (targetSteer - currentSteerAngle) * ROVER_STEER_LERP
    if (steer.FL) steer.FL.rotation.y = currentSteerAngle
    if (steer.FR) steer.FR.rotation.y = currentSteerAngle
    if (steer.BL) steer.BL.rotation.y = -currentSteerAngle
    if (steer.BR) steer.BR.rotation.y = -currentSteerAngle

    // --- Ground follow + tilt (3 raycasts: center, front, back) ---
    _fwd.set(-Math.sin(heading), 0, -Math.cos(heading))
    _rgt.set(_fwd.z, 0, -_fwd.x)
    const rx = rover.position.x
    const rz = rover.position.z
    const wb = 2.0 // half wheelbase
    const hC = getGroundHeight(rx, rz)
    const hF = getGroundHeight(rx + _fwd.x * wb, rz + _fwd.z * wb)
    const hB = getGroundHeight(rx - _fwd.x * wb, rz - _fwd.z * wb)
    const groundY = (hC + hF + hB) / 3
    rover.position.y += (groundY - rover.position.y) * 0.5

    // --- Tilt to terrain slope (derived from front/back heights) ---
    // Normal from finite difference along forward axis + assume flat across track
    const normal = new THREE.Vector3(
      _fwd.x * (hB - hF),
      2 * wb,
      _fwd.z * (hB - hF),
    ).normalize()
    const headingQuat = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      heading,
    )
    const up = new THREE.Vector3(0, 1, 0)
    const tiltAxis = new THREE.Vector3().crossVectors(up, normal).normalize()
    const tiltAngleVal = Math.acos(Math.min(1, up.dot(normal)))
    const slopeQuat = new THREE.Quaternion()
    if (tiltAxis.lengthSq() > 0.001) {
      slopeQuat.setFromAxisAngle(tiltAxis, tiltAngleVal)
    }
    const targetQuat = slopeQuat.multiply(headingQuat)

    // Chassis shake when moving
    if (isMoving) {
      shakeTime += delta * 15
      const slope = 1 - Math.abs(normal.y)
      const intensity = 0.012 + slope * 0.03
      const shakeX = Math.sin(shakeTime * 3.7) * intensity
      const shakeZ = Math.cos(shakeTime * 5.3) * intensity * 0.7
      const shakeY = Math.sin(shakeTime * 7.1) * intensity * 0.4
      const shakeQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(shakeX, shakeY, shakeZ),
      )
      targetQuat.multiply(shakeQuat)
      rover.position.y += Math.sin(shakeTime * 6.3) * intensity * 0.3
    }

    tiltQuat.slerp(targetQuat, ROVER_TILT_LERP)
    rover.quaternion.copy(tiltQuat)

    // --- Camera ---
    const finalCamX = Math.sin(orbitAngle) * cameraDistance * Math.cos(orbitPitch)
    const finalCamZ = Math.cos(orbitAngle) * cameraDistance * Math.cos(orbitPitch)
    let finalCamY = rover.position.y + ROVER_CAMERA_HEIGHT_OFFSET + Math.sin(orbitPitch) * cameraDistance * 0.5

    // Keep camera above ground level (use rover ground as proxy — no extra raycast)
    finalCamY = Math.max(finalCamY, groundY + 1.5)

    let desiredPos
    const desiredTarget = new THREE.Vector3(
      rover.position.x,
      rover.position.y + ROVER_CAMERA_LOOK_HEIGHT_OFFSET,
      rover.position.z,
    )

    if (introActive) {
      introElapsed += delta
      // Ease-out: fast at start, gentle landing
      const t = Math.min(1, introElapsed / INTRO_DURATION)
      const ease = 1 - Math.pow(1 - t, 3) // cubic ease-out

      // Blend from high/far start position down to the normal orbit
      const startY = rover.position.y + INTRO_START_HEIGHT
      const startX = Math.sin(orbitAngle) * INTRO_START_DISTANCE
      const startZ = Math.cos(orbitAngle) * INTRO_START_DISTANCE

      desiredPos = new THREE.Vector3(
        rover.position.x + THREE.MathUtils.lerp(startX, finalCamX, ease),
        THREE.MathUtils.lerp(startY, finalCamY, ease),
        rover.position.z + THREE.MathUtils.lerp(startZ, finalCamZ, ease),
      )

      if (t >= 1) introActive = false
    } else {
      desiredPos = new THREE.Vector3(
        rover.position.x + finalCamX,
        finalCamY,
        rover.position.z + finalCamZ,
      )
    }

    if (!initialized) {
      cameraPos.copy(desiredPos)
      cameraTarget.copy(desiredTarget)
      initialized = true
    }

    const lerpSpeed = introActive ? 0.15 : ROVER_CAMERA_LERP
    cameraPos.lerp(desiredPos, lerpSpeed)
    cameraTarget.lerp(desiredTarget, lerpSpeed)

    camera.position.copy(cameraPos)
    camera.lookAt(cameraTarget)
  }

  function dispose() {
    window.removeEventListener('keydown', onKeyDown)
    window.removeEventListener('keyup', onKeyUp)
    canvas.removeEventListener('mousedown', onMouseDown)
    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('mousemove', onMouseMove)
    canvas.removeEventListener('wheel', onWheel)
    canvas.removeEventListener('contextmenu', onContextMenu)
  }

  return {
    init,
    update,
    setTerrainMesh,
    loadRover,
    placeOnTerrain,
    dispose,
    get rover() { return rover },
  }
}
