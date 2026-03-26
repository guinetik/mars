import * as THREE from 'three'
import {
  TERRAIN_PLAYER_HEIGHT,
  TERRAIN_WALK_SPEED,
  TERRAIN_SPRINT_MULTIPLIER,
  TERRAIN_MAX_SLOPE_DEG,
  TERRAIN_Y_LERP,
} from '@/three/constants.js'

export function useFpsControls(camera, canvas) {
  const keys = {}
  let yaw = 0
  let pitch = 0
  let isLocked = false
  let terrainMesh = null
  let lastGroundY = TERRAIN_PLAYER_HEIGHT

  const raycaster = new THREE.Raycaster()
  const moveDirection = new THREE.Vector3()
  const forward = new THREE.Vector3()
  const right = new THREE.Vector3()
  const downDirection = new THREE.Vector3(0, -1, 0)
  const maxSlopeRad = TERRAIN_MAX_SLOPE_DEG * Math.PI / 180

  function setTerrainMesh(mesh) {
    terrainMesh = mesh
  }

  function onKeyDown(e) {
    keys[e.code] = true
  }

  function onKeyUp(e) {
    keys[e.code] = false
  }

  function onMouseMove(e) {
    if (!isLocked) return
    const sensitivity = 0.002
    yaw -= e.movementX * sensitivity
    pitch -= e.movementY * sensitivity
    pitch = Math.max(-Math.PI * 0.47, Math.min(Math.PI * 0.47, pitch))
  }

  function onPointerLockChange() {
    isLocked = document.pointerLockElement === canvas
  }

  function requestLock() {
    canvas.requestPointerLock()
  }

  function init() {
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('pointerlockchange', onPointerLockChange)
    canvas.addEventListener('click', requestLock)
  }

  function getGroundHeight(x, z) {
    if (!terrainMesh) return 0
    raycaster.set(new THREE.Vector3(x, 9999, z), downDirection)
    const hits = raycaster.intersectObject(terrainMesh, true)
    if (hits.length > 0) return hits[0].point.y
    return null
  }

  function canMoveTo(x, z) {
    if (!terrainMesh) return true
    const groundY = getGroundHeight(x, z)
    if (groundY === null) return false
    const dy = groundY - lastGroundY
    const slopeAngle = Math.atan2(Math.abs(dy), 1)
    return slopeAngle < maxSlopeRad
  }

  function update(delta) {
    if (!isLocked || !camera) return

    // Apply rotation
    const euler = new THREE.Euler(pitch, yaw, 0, 'YXZ')
    camera.quaternion.setFromEuler(euler)

    // Movement
    const speed = (keys['ShiftLeft'] || keys['ShiftRight'])
      ? TERRAIN_WALK_SPEED * TERRAIN_SPRINT_MULTIPLIER
      : TERRAIN_WALK_SPEED

    forward.set(0, 0, -1).applyQuaternion(camera.quaternion)
    forward.y = 0
    forward.normalize()

    right.set(1, 0, 0).applyQuaternion(camera.quaternion)
    right.y = 0
    right.normalize()

    moveDirection.set(0, 0, 0)
    if (keys['KeyW']) moveDirection.add(forward)
    if (keys['KeyS']) moveDirection.sub(forward)
    if (keys['KeyD']) moveDirection.add(right)
    if (keys['KeyA']) moveDirection.sub(right)

    if (moveDirection.lengthSq() > 0) {
      moveDirection.normalize()
      const nextX = camera.position.x + moveDirection.x * speed * delta
      const nextZ = camera.position.z + moveDirection.z * speed * delta

      if (canMoveTo(nextX, nextZ)) {
        camera.position.x = nextX
        camera.position.z = nextZ
      }
    }

    // Terrain following
    const groundY = getGroundHeight(camera.position.x, camera.position.z)
    if (groundY !== null) {
      lastGroundY = groundY
      const targetY = groundY + TERRAIN_PLAYER_HEIGHT
      camera.position.y += (targetY - camera.position.y) * TERRAIN_Y_LERP
    }
  }

  function dispose() {
    document.removeEventListener('keydown', onKeyDown)
    document.removeEventListener('keyup', onKeyUp)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('pointerlockchange', onPointerLockChange)
    canvas.removeEventListener('click', requestLock)
    if (document.pointerLockElement === canvas) {
      document.exitPointerLock()
    }
  }

  return {
    init,
    update,
    setTerrainMesh,
    dispose,
    get isLocked() { return isLocked },
  }
}
