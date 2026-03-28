export const MARS_RADIUS_KM = 3389.5
export const MARS_OBLIQUITY_DEG = 25.19
export const MARS_OBLIQUITY_RAD = MARS_OBLIQUITY_DEG * Math.PI / 180

export const GLOBE_RADIUS = 10
export const GLOBE_SEGMENTS = 64
export const ATMOSPHERE_RADIUS = GLOBE_RADIUS * 1.008
export const STAR_SPHERE_RADIUS = GLOBE_RADIUS * 80

export const CAMERA_FOV = 45
export const CAMERA_NEAR = 0.1
export const CAMERA_FAR = STAR_SPHERE_RADIUS * 2
export const CAMERA_MIN_DISTANCE = GLOBE_RADIUS * 1.2
export const CAMERA_MAX_DISTANCE = GLOBE_RADIUS * 4
export const CAMERA_DEFAULT_DISTANCE = GLOBE_RADIUS * 2.8

export const AUTO_ROTATE_SPEED = 0.3
export const AUTO_ROTATE_RESUME_DELAY = 3000

export const FLY_TO_DURATION = 1.5
export const FLY_TO_DISTANCE = GLOBE_RADIUS * 1.6

export const ATMOSPHERE_COLOR = [0.8, 0.35, 0.1]
export const ATMOSPHERE_FRESNEL_POWER = 5.0

export const TILE_SERVICE_BASE = 'https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer/tile'
export const TILE_SIZE = 512
export const TILE_BASE_ZOOM = 3

export const LANDMARK_COLORS = {
  'landing-site': '#4fc3f7',
  volcano: '#ff7043',
  canyon: '#ab47bc',
  basin: '#66bb6a',
  plain: '#ffca28',
  'polar-cap': '#e0e0e0',
}

// Terrain Explorer
export const TERRAIN_SCALE = 1000
export const TERRAIN_PLAYER_HEIGHT = 2
export const TERRAIN_WALK_SPEED = 15
export const TERRAIN_SPRINT_MULTIPLIER = 3
export const TERRAIN_MAX_SLOPE_DEG = 60
export const TERRAIN_FOG_COLOR = 0x33150a
export const TERRAIN_SKY_COLOR = 0x1a0a04
export const TERRAIN_SUN_COLOR = 0xffd4a0
export const TERRAIN_AMBIENT_COLOR = 0x442200
export const TERRAIN_Y_LERP = 0.1

// Rover Explorer
export const ROVER_SCALE = 0.5
export const ROVER_MOVE_SPEED = 4
export const ROVER_TURN_SPEED = 0.6
export const ROVER_WHEEL_SPIN_SPEED = 8
export const ROVER_STEER_ANGLE_MAX = 0.4
export const ROVER_STEER_LERP = 0.15
export const ROVER_CAMERA_DISTANCE_DEFAULT = 8
export const ROVER_CAMERA_DISTANCE_MIN = 2.2
export const ROVER_CAMERA_DISTANCE_MAX = 18
export const ROVER_CAMERA_HEIGHT_OFFSET = 3
export const ROVER_CAMERA_LOOK_HEIGHT_OFFSET = 1
export const ROVER_CAMERA_LERP = 0.08
export const ROVER_GROUND_LERP = 0.2
export const ROVER_TILT_LERP = 0.1
export const ROVER_ORBIT_SENSITIVITY = 0.005
export const ROVER_ORBIT_PITCH_MIN = -0.3
export const ROVER_ORBIT_PITCH_MAX = 1.3
export const ROVER_WHEEL_ZOOM_FACTOR = 0.0032

export const EXPLORABLE_LANDMARKS = [
  'acidalia-planitia',
  'argyre-basin',
  'arsia-mons',
  'ascraeus-mons',
  'elysium-mons',
  'hellas-basin',
  'north-polar-region',
  'olympus-mons',
  'pavonis-mons',
  'south-polar-region',
  'syrtis-major',
  'utopia-planitia',
  'valles-marineris',
]
