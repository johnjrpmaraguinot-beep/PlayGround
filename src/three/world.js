import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildEstate, updateEstate, disposeObject } from './estate.js';
import { buildFlightWorld, buildDestinationWorld, disposeTravelObject } from './travel.js';

const PALETTES = {
  ultra: {
    lawn: 0x5d7447,
    lawnAlt: 0x68804e,
    wall: 0xf1e7d6,
    wallAlt: 0xe4d5bb,
    stone: 0xd4c2a4,
    stoneAlt: 0xc5b294,
  },
  rich: {
    lawn: 0x5a7445,
    lawnAlt: 0x65804c,
    wall: 0xdac6a8,
    wallAlt: 0xc9ad87,
    stone: 0xcbb792,
    stoneAlt: 0xbaa47f,
  },
  average: {
    lawn: 0x6c844e,
    lawnAlt: 0x768e54,
    wall: 0xd8cbb0,
    wallAlt: 0xc8b795,
    stone: 0xae9c80,
    stoneAlt: 0x9f8d72,
  },
};

const MOODS = {
  sunset: {
    top: new THREE.Color(0x324b5b),
    horizon: new THREE.Color(0xf3b27d),
    sun: new THREE.Color(0xffce8f),
    fog: 0xd7a47c,
    sunLight: 0xffc286,
    sunIntensity: 2.55,
    hemiSky: 0xffd5ad,
    hemiGround: 0x34473f,
    hemiIntensity: 1.1,
    exposure: 1.03,
  },
  day: {
    top: new THREE.Color(0x4a7598),
    horizon: new THREE.Color(0xf7d7ad),
    sun: new THREE.Color(0xfff0c7),
    fog: 0xd9c4a2,
    sunLight: 0xfff0d0,
    sunIntensity: 2.7,
    hemiSky: 0xcfe3f0,
    hemiGround: 0x3f4f3d,
    hemiIntensity: 1.25,
    exposure: 1.0,
  },
  dusk: {
    top: new THREE.Color(0x152438),
    horizon: new THREE.Color(0xbb6f66),
    sun: new THREE.Color(0xffb070),
    fog: 0x9b6e69,
    sunLight: 0xffae74,
    sunIntensity: 1.65,
    hemiSky: 0x9cb6cf,
    hemiGround: 0x28312d,
    hemiIntensity: 0.85,
    exposure: 1.08,
  },
  travel: {
    top: new THREE.Color(0x5d86a6),
    horizon: new THREE.Color(0xffd8b1),
    sun: new THREE.Color(0xffefc1),
    fog: 0xe3b993,
    sunLight: 0xffdfb2,
    sunIntensity: 2.9,
    hemiSky: 0xdfe9ef,
    hemiGround: 0x5e6c60,
    hemiIntensity: 1.35,
    exposure: 1.02,
  },
  destination: {
    top: new THREE.Color(0x3f6382),
    horizon: new THREE.Color(0xf6c99a),
    sun: new THREE.Color(0xffe3b8),
    fog: 0xd9b28f,
    sunLight: 0xffd2a0,
    sunIntensity: 2.85,
    hemiSky: 0xffe0c0,
    hemiGround: 0x445548,
    hemiIntensity: 1.7,
    exposure: 1.16,
  },
};

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function makeSky() {
  const uniforms = {
    topColor: { value: new THREE.Color(0x324b5b) },
    horizonColor: { value: new THREE.Color(0xf3b27d) },
    sunColor: { value: new THREE.Color(0xffce8f) },
    sunDir: { value: new THREE.Vector3(-0.55, 0.22, 0.58).normalize() },
    haze: { value: 0.2 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    vertexShader: `
      varying vec3 vPos;
      void main() {
        vPos = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 sunColor;
      uniform vec3 sunDir;
      uniform float haze;
      varying vec3 vPos;
      void main() {
        float h = clamp(vPos.y * 0.9 + 0.08, -0.1, 1.0);
        vec3 col = mix(horizonColor, topColor, smoothstep(0.0, 0.72, h));
        float sunDot = max(dot(normalize(vPos), normalize(sunDir)), 0.0);
        float disk = pow(sunDot, 900.0);
        float glow = pow(sunDot, 8.0) * 0.22 + pow(sunDot, 70.0) * 0.45;
        col += sunColor * glow;
        col += sunColor * disk * 1.7;
        float band = smoothstep(0.0, 0.08, h) * (1.0 - smoothstep(0.15, 0.55, h));
        col += horizonColor * band * haze;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(160, 40, 22), material);
  mesh.frustumCulled = false;
  mesh.renderOrder = -20;
  return { mesh, uniforms };
}

function makeMotes() {
  const count = 90;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 5 + Math.random() * 55;
    positions[i * 3] = Math.cos(a) * r;
    positions[i * 3 + 1] = 1 + Math.random() * 14;
    positions[i * 3 + 2] = Math.sin(a) * r;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xffd8a0,
    size: 0.1,
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
    sizeAttenuation: true,
  });
  return new THREE.Points(geo, mat);
}

export class World {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.03;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xd7a47c, 0.0048);

    this.camera = new THREE.PerspectiveCamera(33, 1, 0.1, 340);
    this.camera.position.set(26, 16, 32);

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.enablePan = false;
    this.controls.minDistance = 10;
    this.controls.maxDistance = 76;
    this.controls.minPolarAngle = 0.6;
    this.controls.maxPolarAngle = 1.42;
    this.controls.rotateSpeed = 0.5;
    this.controls.zoomSpeed = 0.7;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.28;
    this.controls.target.set(0, 3.5, 0);

    this.clock = new THREE.Clock();
    this.time = 0;
    this.mode = 'select';
    this.family = null;
    this.homeRoot = null;
    this.homeAnim = null;
    this.travel = null;
    this.tween = null;
    this.mood = 'sunset';
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.members = [];
    this.onSelectMember = null;
    this.running = false;
    this._buildStage();
    this._bindResize();
    this.resize();
  }

  _buildStage() {
    const sky = makeSky();
    this.sky = sky;
    this.scene.add(sky.mesh);

    // sea
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: 0x38646c,
      roughness: 0.24,
      metalness: 0.16,
      transparent: true,
      opacity: 0.9,
    });
    const water = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.9;
    water.receiveShadow = true;
    this.water = water;
    this.scene.add(water);

    // distant islands / horizon
    const far = new THREE.Group();
    const hillMat = new THREE.MeshBasicMaterial({ color: 0x5e6658 });
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + 0.3;
      const r = 55 + (i % 3) * 8;
      const hill = new THREE.Mesh(new THREE.SphereGeometry(8 + (i % 3) * 3, 16, 8), hillMat);
      hill.position.set(Math.cos(a) * r, -4.4, Math.sin(a) * r);
      hill.scale.set(1.8, 0.28, 1.0);
      far.add(hill);
    }
    this.scene.add(far);
    this.far = far;

    // ambient
    this.hemi = new THREE.HemisphereLight(0xffd5ad, 0x34473f, 1.1);
    this.scene.add(this.hemi);

    this.sun = new THREE.DirectionalLight(0xffc286, 2.55);
    this.sun.position.set(-22, 26, 15);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(window.innerWidth > 900 ? 2048 : 1024, window.innerWidth > 900 ? 2048 : 1024);
    this.sun.shadow.camera.left = -27;
    this.sun.shadow.camera.right = 27;
    this.sun.shadow.camera.top = 27;
    this.sun.shadow.camera.bottom = -24;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 90;
    this.sun.shadow.bias = -0.00035;
    this.sun.shadow.normalBias = 0.025;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    this.fill = new THREE.DirectionalLight(0x87b6cf, 0.65);
    this.fill.position.set(18, 12, -18);
    this.scene.add(this.fill);

    this.motes = makeMotes();
    this.scene.add(this.motes);

    // ambient water glints
    const glintMat = new THREE.MeshBasicMaterial({
      color: 0xffdfae,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.glints = new THREE.Group();
    for (let i = 0; i < 18; i++) {
      const glint = new THREE.Mesh(new THREE.PlaneGeometry(1.6 + Math.random() * 4.5, 0.035), glintMat);
      glint.rotation.x = -Math.PI / 2;
      glint.position.set((Math.random() - 0.5) * 70, -0.87, (Math.random() - 0.5) * 70);
      this.glints.add(glint);
    }
    this.scene.add(this.glints);
  }

  _bindResize() {
    this.onResize = () => this.resize();
    window.addEventListener('resize', this.onResize, { passive: true });
    window.addEventListener('orientationchange', this.onResize, { passive: true });
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.fov = w / h < 0.75 ? 42 : 33;
    this.camera.updateProjectionMatrix();
    const portrait = w / h < 0.82;
    if (this.mode === 'select') this.controls.target.set(0, portrait ? 4.6 : 3.6, 0);
    if (this.tween) this.tween = null;
    if (this.mode === 'select' || this.mode === 'home') {
      if (!this.controls.autoRotate) this._frameEstate(false);
    }
  }

  _cameraFor(mode) {
    const aspect = this.camera.aspect;
    const portrait = aspect < 0.85;
    const mobile = window.innerWidth < 760;
    const s = portrait ? 1.44 : mobile ? 1.08 : 1;
    if (mode === 'select') {
      return {
        pos: new THREE.Vector3(31 * s, 18 * s, 38 * s),
        target: new THREE.Vector3(-1.4, portrait ? 3.9 : 3.1, 0),
      };
    }
    if (mode === 'home') {
      return {
        pos: new THREE.Vector3(28 * s, 16.4 * s, 35 * s),
        target: new THREE.Vector3(-1.0, portrait ? 3.9 : 3.3, 0),
      };
    }
    if (mode === 'flight') {
      return {
        pos: new THREE.Vector3(18 * s, 9.4 * s, 25 * s),
        target: new THREE.Vector3(0, 3.3, 0),
      };
    }
    if (mode === 'destination') {
      return {
        pos: new THREE.Vector3(30 * s, 18 * s, 38 * s),
        target: new THREE.Vector3(0, portrait ? 5.0 : 4.4, 0),
      };
    }
    return { pos: new THREE.Vector3(25, 15, 31), target: new THREE.Vector3(0, 3.5, 0) };
  }

  _frameEstate(animate = true) {
    const view = this._cameraFor(this.mode === 'select' ? 'select' : 'home');
    this._moveCamera(view.pos, view.target, animate ? 1.1 : 0);
  }

  _moveCamera(pos, target, duration = 1.1) {
    if (duration <= 0) {
      this.camera.position.copy(pos);
      this.controls.target.copy(target);
      this.controls.update();
      return;
    }
    this.tween = {
      p0: this.camera.position.clone(),
      p1: pos.clone(),
      t0: this.controls.target.clone(),
      t1: target.clone(),
      elapsed: 0,
      duration,
    };
    this.controls.enabled = false;
  }

  setFamily(family, mode = 'select', animate = false) {
    if (this.homeRoot) {
      this.scene.remove(this.homeRoot);
      disposeObject(this.homeRoot);
      this.homeRoot = null;
      this.homeAnim = null;
      this.members = [];
    }
    this.family = family;
    this.mode = mode;
    const built = buildEstate(family, { palette: PALETTES[family.id] || PALETTES.average });
    this.homeRoot = built.root;
    this.homeAnim = built.anim;
    this.scene.add(this.homeRoot);
    this.members = built.anim.people || [];

    this.controls.autoRotate = mode === 'select';
    this.controls.autoRotateSpeed = 0.24;
    this._setGroundVisible(true);
    this.controls.minDistance = mode === 'select' ? 13 : 10;
    this.controls.maxDistance = mode === 'select' ? 76 : 62;
    this.mood = 'sunset';
    this._applyMood('sunset');

    const view = this._cameraFor(mode);
    if (animate) this._moveCamera(view.pos, view.target, 1.1);
    else {
      this.camera.position.copy(view.pos);
      this.controls.target.copy(view.target);
      this.controls.update();
    }
  }

  setMode(mode, animate = true) {
    this.mode = mode;
    this.controls.autoRotate = mode === 'select';
    const view = this._cameraFor(mode);
    this._moveCamera(view.pos, view.target, animate ? 1.2 : 0);
  }

  _applyMood(name) {
    const m = MOODS[name] || MOODS.sunset;
    this.sky.uniforms.topColor.value.copy(m.top);
    this.sky.uniforms.horizonColor.value.copy(m.horizon);
    this.sky.uniforms.sunColor.value.copy(m.sun);
    this.sky.uniforms.haze.value = name === 'dusk' ? 0.32 : 0.2;
    this.scene.fog.color.setHex(m.fog);
    this.sun.color.setHex(m.sunLight);
    this.sun.intensity = m.sunIntensity;
    this.hemi.color.setHex(m.hemiSky);
    this.hemi.groundColor.setHex(m.hemiGround);
    this.hemi.intensity = m.hemiIntensity;
    this.renderer.toneMappingExposure = m.exposure;
    if (name === 'dusk') {
      this.sun.position.set(-18, 10, 17);
      this.scene.fog.density = 0.007;
    } else {
      this.sun.position.set(-22, 26, 15);
      this.scene.fog.density = 0.0048;
    }
    this.mood = name;
  }

  setDayMood(day) {
    const sequence = ['sunset', 'day', 'dusk'];
    const mood = sequence[(Math.max(1, day) - 1) % sequence.length];
    this._applyMood(mood);
  }

  get isTraveling() {
    return !!this.travel;
  }

  showFlight(family, destination) {
    if (this.homeRoot) this.homeRoot.visible = false;
    this._setGroundVisible(false);
    this._clearTravel();
    const stage = buildFlightWorld(family, destination);
    stage.anim.plane.rotation.y = -0.62;
    stage.anim.plane.position.set(0, 3.2, -1);
    this.travel = stage;
    this.scene.add(stage.root);
    this.mode = 'flight';
    this.controls.autoRotate = false;
    this._applyMood('travel');
    const view = this._cameraFor('flight');
    this._moveCamera(view.pos, view.target, 1.4);
  }

  showDestination(destination) {
    this._setGroundVisible(false);
    if (this.travel) {
      this.scene.remove(this.travel.root);
      disposeTravelObject(this.travel.root);
      this.travel = null;
    }
    const stage = buildDestinationWorld(destination);
    this.travel = stage;
    this.scene.add(stage.root);
    this.mode = 'destination';
    this._applyMood('destination');
    const view = this._cameraFor('destination');
    this._moveCamera(view.pos, view.target, 1.6);
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.18;
  }

  _clearTravel() {
    if (!this.travel) return;
    this.scene.remove(this.travel.root);
    disposeTravelObject(this.travel.root);
    this.travel = null;
  }

  _setGroundVisible(visible) {
    if (this.water) this.water.visible = visible;
    if (this.far) this.far.visible = visible;
    if (this.glints) this.glints.visible = visible;
    if (this.motes) this.motes.visible = visible;
  }

  returnHome(animate = true) {
    this._clearTravel();
    this._setGroundVisible(true);
    if (this.homeRoot) this.homeRoot.visible = true;
    this.mode = 'home';
    this.controls.autoRotate = false;
    this._applyMood(this.mood === 'travel' ? 'sunset' : this.mood);
    const view = this._cameraFor('home');
    this._moveCamera(view.pos, view.target, animate ? 1.4 : 0);
  }

  pick(clientX, clientY) {
    if (!this.homeRoot || this.mode !== 'home') return null;
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.members, true);
    for (const hit of hits) {
      let obj = hit.object;
      while (obj) {
        if (typeof obj.userData?.memberIndex === 'number') return obj.userData.memberIndex;
        obj = obj.parent;
      }
    }
    return null;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.clock.start();
    const tick = () => {
      requestAnimationFrame(tick);
      const dt = Math.min(0.05, this.clock.getDelta());
      this.time += dt;
      if (this.tween) {
        this.tween.elapsed += dt;
        const t = Math.min(1, this.tween.elapsed / this.tween.duration);
        const e = easeInOutCubic(t);
        this.camera.position.lerpVectors(this.tween.p0, this.tween.p1, e);
        this.controls.target.lerpVectors(this.tween.t0, this.tween.t1, e);
        if (t >= 1) {
          this.tween = null;
          this.controls.enabled = true;
        }
      }
      this.controls.update();
      if (this.mode === 'home'|| this.mode === 'select') {
        updateEstate(this.homeAnim, this.time, dt);
      }
      if (this.travel) this.travel.anim.update(this.time, dt);
      this.motes.rotation.y = this.time * 0.01;
      this.glints.children.forEach((g, i) => {
        g.material.opacity = 0.1 + (Math.sin(this.time * 0.5 + i) * 0.5 + 0.5) * 0.2;
        g.position.x += Math.sin(this.time * 0.1 + i) * 0.001;
      });
      this.renderer.render(this.scene, this.camera);
    };
    tick();
  }
}
