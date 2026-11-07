import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const TAU = Math.PI * 2;

function std(color, roughness = 0.8, metalness = 0, extra = {}) {
  // No environment map in the diorama, so heavy metalness would read as black.
  return new THREE.MeshStandardMaterial({ color, roughness, metalness: Math.min(metalness, 0.16), ...extra });
}

function rbox(w, h, d, r, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function cyl(rt, rb, h, seg, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function sph(r, mat, x = 0, y = 0, z = 0, detail = 14) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, detail, Math.max(6, Math.floor(detail / 2))), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function makeTextTexture(text, color = '#f4ead8', bg = 'rgba(0,0,0,0)', size = 700) {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 256;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  if (bg !== 'rgba(0,0,0,0)') {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, c.width, c.height);
  }
  ctx.fillStyle = color;
  ctx.font = `800 ${size}px Manrope, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, c.width / 2, c.height / 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function buildPlane(family) {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: family.id === 'average' ? 0xf1f3f3 : 0xf6f1e8,
    roughness: 0.23,
    metalness: 0.38,
    clearcoat: 0.85,
  });
  const dark = std(0x22272a, 0.4, 0.4);
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x253b46,
    metalness: 0.75,
    roughness: 0.02,
    transparent: true,
    opacity: 0.88,
  });
  // fuselage
  const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.62, 12.5, 24), bodyMat);
  fuse.rotation.x = Math.PI / 2;
  fuse.castShadow = true;
  g.add(fuse);
  const nose = sph(0.72, bodyMat, 0, 0, 6.45, 20);
  nose.scale.set(1, 1, 1.55);
  g.add(nose);
  const tailCone = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.62, 2.0, 18), bodyMat);
  tailCone.rotation.x = Math.PI / 2;
  tailCone.position.set(0, 0.1, -7.0);
  g.add(tailCone);
  // stripe removed: the partial cylinder left a stray sliver under the belly
  // windows
  for (let i = 0; i < 8; i++) {
    [-1, 1].forEach((side) => {
      const w = box(0.05, 0.2, 0.28, glass, side * 0.69, 0.25, -3.4 + i * 0.85);
      g.add(w);
    });
  }
  // cockpit
  const cockpit = sph(0.55, glass, 0, 0.3, 5.9, 16);
  cockpit.scale.set(1.1, 0.7, 1.1);
  g.add(cockpit);
  // wings
  const wingShape = new THREE.Shape();
  wingShape.moveTo(-0.9, 0);
  wingShape.lineTo(8.3, -1.15);
  wingShape.lineTo(8.5, 0.3);
  wingShape.lineTo(1.2, 1.5);
  wingShape.closePath();
  const wingGeo = new THREE.ExtrudeGeometry(wingShape, { depth: 0.2, bevelEnabled: false });
  [-1, 1].forEach((side) => {
    const wing = new THREE.Mesh(wingGeo, bodyMat);
    wing.rotation.x = -Math.PI / 2;
    wing.rotation.z = side < 0 ? Math.PI : 0;
    wing.position.set(0, -0.05, 0.4);
    wing.scale.x = side;
    wing.castShadow = true;
    g.add(wing);
    const engine = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.4, 1.3, 16), bodyMat);
    engine.rotation.x = Math.PI / 2;
    engine.position.set(side * 3.4, -0.35, 1.7);
    engine.castShadow = true;
    g.add(engine);
    const intake = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.06, 16), dark);
    intake.rotation.x = Math.PI / 2;
    intake.position.set(side * 3.4, -0.35, 2.37);
    g.add(intake);
  });
  // tail
  const finShape = new THREE.Shape();
  finShape.moveTo(0, 0);
  finShape.lineTo(0, 2.5);
  finShape.lineTo(2.0, 0.28);
  finShape.lineTo(2.0, 0);
  finShape.closePath();
  const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.14, bevelEnabled: false });
  const fin = new THREE.Mesh(finGeo, bodyMat);
  fin.position.set(0, 0.2, -7.0);
  fin.rotation.y = Math.PI / 2;
  fin.castShadow = true;
  g.add(fin);
  const stab = box(5.3, 0.13, 1.0, bodyMat, 0, 0.1, -6.85);
  g.add(stab);
  // belly light
  const light = new THREE.PointLight(0xffe0ad, 1.0, 12, 2);
  light.position.set(0, -0.4, 4.2);
  g.add(light);
  g.userData = { light };
  return g;
}

function cloud(parent, x, y, z, scale, opacity = 0.42) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xffefe2, transparent: true, opacity, depthWrite: false });
  const parts = [
    [0, 0, 0, 1],
    [1.05, 0.14, 0.1, 0.78],
    [-1.15, -0.08, 0.06, 0.68],
    [0.35, 0.37, -0.2, 0.72],
    [-0.45, 0.28, 0.18, 0.6],
  ];
  parts.forEach(([px, py, pz, s]) => {
    const blob = sph(1, mat, px, py, pz, 10);
    blob.scale.set(1.25 * s, 0.45 * s, 0.9 * s);
    blob.castShadow = false;
    g.add(blob);
  });
  g.position.set(x, y, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return g;
}

function skyBackdrop() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#1d4a74');
  g.addColorStop(0.32, '#477ba3');
  g.addColorStop(0.47, '#8fb3c8');
  g.addColorStop(0.54, '#f5c79d');
  g.addColorStop(0.6, '#e8b58f');
  g.addColorStop(0.76, '#c49378');
  g.addColorStop(1, '#7a675a');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 512);
  const sun = ctx.createRadialGradient(362, 250, 0, 362, 250, 190);
  sun.addColorStop(0, 'rgba(255,248,222,0.95)');
  sun.addColorStop(0.12, 'rgba(255,230,180,0.6)');
  sun.addColorStop(0.45, 'rgba(255,214,158,0.18)');
  sun.addColorStop(1, 'rgba(255,210,150,0)');
  ctx.fillStyle = sun;
  ctx.beginPath();
  ctx.arc(362, 250, 190, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, depthWrite: false, fog: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(900, 400), mat);
  mesh.position.set(0, 16, -140);
  mesh.renderOrder = -10;
  return mesh;
}

export function buildFlightWorld(family, destination) {
  const root = new THREE.Group();
  root.name = 'flight-world';
  root.add(skyBackdrop());
  const clouds = new THREE.Group();
  root.add(clouds);
  const material = new THREE.MeshBasicMaterial({ color: 0xffe8d5, transparent: true, opacity: 0.5, depthWrite: false });
  // Clouds live below and behind the aircraft so they never wash out the view.
  for (let i = 0; i < 44; i++) {
    const x = (Math.random() - 0.5) * 110;
    const y = -6.5 + Math.random() * 7;
    const z = -72 + Math.random() * 64;
    const s = 2.4 + Math.random() * 5.4;
    const cl = cloud(clouds, x, y, z, s, 0.22 + Math.random() * 0.3);
    cl.rotation.y = Math.random() * TAU;
    cl.userData.speed = 0.4 + Math.random() * 0.8;
  }
  // A far halo of cloud banks, kept wide of the flight path.
  for (let i = 0; i < 10; i++) {
    const side = i % 2 ? 1 : -1;
    const cl = cloud(clouds, side * (32 + Math.random() * 32), 1.5 + Math.random() * 5, -55 + Math.random() * 35, 3.2 + Math.random() * 3.4, 0.2);
    cl.rotation.y = Math.random() * TAU;
    cl.userData.speed = 0.3 + Math.random() * 0.5;
  }
  // low cloud sea is formed by the banks below the aircraft

  const plane = buildPlane(family);
  plane.traverse((part) => {
    part.castShadow = false;
    part.receiveShadow = false;
  });
  plane.position.set(0, 2.8, 0);
  plane.rotation.y = 0.0;
  plane.rotation.z = 0.045;
  root.add(plane);

  return {
    root,
    kind: 'flight',
    destination,
    family,
    anim: {
      plane,
      clouds,
      time: 0,
      update(time, dt) {
        this.time += dt;
        plane.position.y = 3.1 + Math.sin(time * 0.9) * 0.12;
        plane.rotation.z = 0.07 + Math.sin(time * 0.7) * 0.025;
        clouds.children.forEach((cl) => {
          cl.position.z += dt * cl.userData.speed * 1.6;
          if (cl.position.z > 6) cl.position.z = -78;
        });
      },
    },
  };
}

function cityBase(parent, palette) {
  const baseMat = std(0x4b5a52, 0.9);
  const island = cyl(17, 15.5, 1.5, 64, baseMat, 0, -1.1, 0);
  parent.add(island);
  const lawn = new THREE.Mesh(new THREE.CircleGeometry(16.6, 64), std(palette[1], 0.91));
  lawn.rotation.x = -Math.PI / 2;
  lawn.position.y = -0.34;
  lawn.receiveShadow = true;
  parent.add(lawn);
  const water = new THREE.Mesh(
    new THREE.RingGeometry(17.1, 30, 64),
    new THREE.MeshPhysicalMaterial({ color: 0x316a73, roughness: 0.2, metalness: 0.08, transparent: true, opacity: 0.75 })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.4;
  parent.add(water);
}

function windows(parent, w, h, x, y, z, color = 0xffd18b, rows = 4) {
  const mat = new THREE.MeshBasicMaterial({ color });
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < Math.max(2, Math.floor(w * 2)); c++) {
      if ((r + c) % 3 === 0) continue;
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.13), mat);
      pane.position.set(x - w / 2 + 0.22 + c * 0.31, y - h / 2 + 0.38 + r * 0.42, z);
      parent.add(pane);
    }
  }
}

function skyline(parent, palette, items) {
  const mat1 = std(0x687880, 0.72, 0.12);
  const mat2 = std(0x748088, 0.68, 0.12);
  items.forEach(([x, z, w, h, d, tone], i) => {
    const m = i % 3 === 0 ? mat2 : mat1;
    const b = box(w, h, d, m, x, -0.3 + h / 2, z);
    parent.add(b);
    if (tone) {
      const stripe = box(w + 0.04, 0.16, d + 0.04, std(palette[2], 0.4, 0.2), x, -0.28 + h * 0.72, z);
      parent.add(stripe);
    }
    windows(parent, w, h, x, -0.3 + h / 2, z + d / 2 + 0.01, 0xffd08c, Math.max(2, Math.floor(h / 2.2)));
  });
}

function eiffel(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const mat = std(0x8f7859, 0.6, 0.2);
  const warm = std(0xd4a45f, 0.5, 0.25, { emissive: 0xb67a30, emissiveIntensity: 0.15 });
  const levels = [
    { y: 0.15, spread: 3.25, h: 0.25 },
    { y: 2.1, spread: 2.25, h: 0.3 },
    { y: 5.5, spread: 1.3, h: 0.28 },
    { y: 8.7, spread: 0.55, h: 0.22 },
  ];
  // four legs, angled inward at tiers
  [[-1, -1], [-1, 1], [1, -1], [1, 1]].forEach(([sx, sz]) => {
    for (let i = 0; i < 3; i++) {
      const lower = levels[i];
      const upper = levels[i + 1];
      const a = new THREE.Vector3(sx * lower.spread, lower.y, sz * lower.spread);
      const b = new THREE.Vector3(sx * upper.spread, upper.y, sz * upper.spread);
      const dir = b.clone().sub(a);
      const len = dir.length();
      const leg = cyl(0.1, 0.13, len, 8, i === 2 ? warm : mat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
      leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      g.add(leg);
    }
  });
  levels.forEach((l) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(l.spread, 0.08, 6, 22), warm);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = l.y;
    g.add(ring);
    g.add(box(l.spread * 2.1, l.h, 0.22, warm, 0, l.y + 0.1, 0));
    g.add(box(0.22, l.h, l.spread * 2.1, warm, 0, l.y + 0.1, 0));
  });
  // deck boxes
  g.add(box(4.8, 0.32, 4.8, warm, 0, 0.42, 0));
  g.add(box(3.2, 0.25, 3.2, warm, 0, 2.35, 0));
  g.add(cyl(0.1, 0.24, 4.2, 8, warm, 0, 11.0, 0));
  g.add(cyl(0.04, 0.06, 2.4, 6, warm, 0, 14.2, 0));
  g.add(sph(0.11, std(0xffd58c, 0.2, 0.1, { emissive: 0xffae44, emissiveIntensity: 2 }), 0, 15.4, 0, 8));
  g.position.set(x, -0.3, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return g;
}

function bigBen(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const stone = std(0xc7b394, 0.85);
  const dark = std(0x635a50, 0.7);
  const gold = std(0xd4b06a, 0.4, 0.3);
  g.add(box(2.0, 10.5, 2.0, stone, 0, 5.25, 0));
  for (let i = 0; i < 4; i++) g.add(box(0.12, 9.2, 0.12, dark, -0.85 + i * 0.56, 5.2, 1.02));
  g.add(box(2.1, 0.25, 2.1, gold, 0, 10.55, 0));
  g.add(box(1.8, 1.7, 1.8, stone, 0, 11.4, 0));
  const clock = new THREE.Mesh(
    new THREE.CircleGeometry(0.62, 24),
    std(0xf3dfae, 0.6, 0.1, { emissive: 0xf0c66f, emissiveIntensity: 0.25 })
  );
  clock.position.set(0, 11.45, 0.93);
  g.add(clock);
  const hands = new THREE.Group();
  hands.position.set(0, 11.45, 0.96);
  const hand1 = box(0.05, 0.43, 0.02, dark, 0, 0.18, 0);
  const hand2 = box(0.32, 0.05, 0.02, dark, 0.13, 0, 0);
  hands.add(hand1, hand2);
  g.add(hands);
  // roof
  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.35, 2.3, 4), dark);
  roof.position.y = 13.4;
  roof.rotation.y = Math.PI / 4;
  g.add(roof);
  g.add(cyl(0.03, 0.05, 1.3, 6, gold, 0, 15.0, 0));
  g.position.set(x, -0.3, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return { group: g, hands };
}

function londonEye(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const mat = std(0xd8d0c0, 0.5, 0.4);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(4.1, 0.1, 6, 48), mat);
  ring.position.y = 4.5;
  ring.rotation.y = 0.1;
  g.add(ring);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const spoke = box(0.05, 4.0, 0.05, mat, 0, 2.5, 0);
    spoke.position.set(Math.cos(a) * 2.0, 4.5 + Math.sin(a) * 2.0, 0);
    spoke.rotation.z = a + Math.PI / 2;
    g.add(spoke);
    const pod = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), std(0xe9dcc6, 0.7));
    pod.position.set(Math.cos(a) * 4.1, 4.5 + Math.sin(a) * 4.1, 0);
    pod.scale.z = 0.65;
    g.add(pod);
  }
  [-2.2, 2.2].forEach((sx) => {
    const leg = cyl(0.08, 0.14, 5.5, 8, mat, sx * 0.7, 2.2, 0);
    leg.rotation.z = sx > 0 ? -0.36 : 0.36;
    g.add(leg);
  });
  g.position.set(x, -0.3, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return { group: g, wheel: ring, pods: g.children.filter((c) => c.geometry?.type === 'SphereGeometry') };
}

function burj(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const mat = std(0x9aa6aa, 0.35, 0.3);
  const lightMat = std(0xd7e2e4, 0.2, 0.3, { emissive: 0x36494f, emissiveIntensity: 0.2 });
  const sections = [
    [2.2, 8, 0],
    [1.55, 7, 8],
    [1.1, 6.5, 15],
    [0.72, 5.2, 21.5],
    [0.4, 4.5, 26.7],
  ];
  let y = -0.3;
  sections.forEach(([r, h, offset], i) => {
    g.add(cyl(r * 1.02, r, h, 8, i === 4 ? lightMat : mat, 0, y + h / 2, 0));
    y += h;
    g.add(cyl(r * 1.18, r * 1.18, 0.12, 8, std(0xffd28c, 0.4, 0.2, { emissive: 0xc8943f, emissiveIntensity: 0.55 }), 0, y, 0));
  });
  g.add(cyl(0.05, 0.18, 3.4, 6, mat, 0, y + 1.7, 0));
  g.add(sph(0.11, std(0xffe4a1, 0.2, 0.1, { emissive: 0xffa737, emissiveIntensity: 2 }), 0, y + 3.5, 0, 8));
  g.position.set(x, 0, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return g;
}

function marinaBaySands(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const towerMat = std(0x7e8e92, 0.4, 0.4);
  [-3.4, 0, 3.4].forEach((tx, i) => {
    const tower = rbox(2.0, 10.5, 2.2, 0.12, towerMat, tx, 5.2, 0);
    g.add(tower);
    for (let f = 0; f < 10; f++) {
      g.add(box(2.05, 0.06, 2.24, std(0x87a5a4, 0.5, 0.2, { emissive: 0x274a49, emissiveIntensity: 0.2 }), tx, 1.1 + f, 0));
    }
    g.add(box(2.06, 0.1, 2.26, std(0xc8a96e, 0.4, 0.4), tx, 10.8, 0));
  });
  const park = rbox(9.4, 0.7, 2.8, 0.28, std(0x4c5b55, 0.6), 0, 11.2, -0.1);
  g.add(park);
  for (let i = 0; i < 7; i++) {
    g.add(sph(0.55, std(0x497554, 0.9), -3.5 + i * 1.15, 11.75, 0.3, 8));
  }
  g.position.set(x, -0.3, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return g;
}

function tokyoTower(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const mat = std(0xc95a49, 0.6, 0.3);
  const light = std(0xe06a50, 0.5, 0.4, { emissive: 0x5d160f, emissiveIntensity: 0.25 });
  const levels = [
    [3.0, 0.2],
    [2.1, 4.0],
    [1.35, 7.4],
    [0.75, 10.2],
    [0.32, 12.2],
  ];
  [[-1, -1], [-1, 1], [1, -1], [1, 1]].forEach(([sx, sz]) => {
    for (let i = 0; i < levels.length - 1; i++) {
      const [spread, y] = levels[i];
      const [spread2, y2] = levels[i + 1];
      const a = new THREE.Vector3(sx * spread, y, sz * spread);
      const b = new THREE.Vector3(sx * spread2, y2, sz * spread2);
      const dir = b.clone().sub(a);
      const len = dir.length();
      const leg = cyl(0.055, 0.09, len, 6, i % 2 ? light : mat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
      leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      g.add(leg);
    }
  });
  levels.forEach(([spread, y], i) => {
    g.add(box(spread * 2.2, 0.09, spread * 2.2, light, 0, y, 0));
    if (i < 3) {
      g.add(box(spread * 2.0, 0.12, 0.16, mat, 0, y, 0));
      g.add(box(0.16, 0.12, spread * 2.0, mat, 0, y, 0));
    }
  });
  g.add(cyl(0.06, 0.12, 3.2, 6, mat, 0, 14.0, 0));
  g.add(sph(0.14, std(0xffd27e, 0.2, 0.1, { emissive: 0xff9f37, emissiveIntensity: 2 }), 0, 15.7, 0, 8));
  g.position.set(x, -0.3, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return g;
}

function empireState(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const mat = std(0x8a9094, 0.5, 0.15);
  const lit = std(0xe0b878, 0.3, 0.2, { emissive: 0xa36f2e, emissiveIntensity: 0.45 });
  g.add(box(4.6, 8, 4.6, mat, 0, 3.7, 0));
  g.add(box(3.4, 5.2, 3.4, mat, 0, 10.3, 0));
  g.add(box(2.2, 4.1, 2.2, mat, 0, 14.8, 0));
  g.add(box(1.2, 3.0, 1.2, lit, 0, 18.3, 0));
  g.add(cyl(0.12, 0.3, 4.5, 8, mat, 0, 22.0, 0));
  g.add(cyl(0.03, 0.07, 3.0, 6, mat, 0, 25.7, 0));
  // setbacks
  [2, 4, 6].forEach((f) => {
    g.add(box(4.62, 0.08, 4.62, lit, 0, f, 0));
  });
  windows(g, 4.2, 7.5, 0, 3.7, 2.31, 0xffd79b, 5);
  windows(g, 3.0, 4.8, 0, 10.3, 1.71, 0xffd79b, 4);
  g.position.set(x, -0.3, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return g;
}

function gothicDuomo(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const marble = std(0xe2d7c4, 0.8);
  const trim = std(0xb59a7c, 0.7);
  g.add(box(7.2, 5.4, 7.2, marble, 0, 2.7, 0));
  g.add(box(7.35, 0.35, 7.35, trim, 0, 5.35, 0));
  // nave
  g.add(box(3.2, 4.0, 5.2, marble, 0, 6.7, 0));
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.7, 3.2, 4), trim);
  roof.position.y = 10.3;
  roof.rotation.y = Math.PI / 4;
  g.add(roof);
  // spires
  for (let i = 0; i < 14; i++) {
    const sx = -3.0 + (i % 7) * 1.0;
    const sz = i < 7 ? -3.3 : 3.3;
    g.add(cyl(0.04, 0.1, 1.8 + (i % 3) * 0.5, 4, trim, sx, 6.4 + (i % 3) * 0.25, sz));
  }
  // facade
  for (let i = 0; i < 5; i++) g.add(cyl(0.04, 0.09, 2.3, 4, trim, -2.0 + i * 1.0, 6.6, 3.7));
  g.add(box(1.1, 2.2, 0.25, std(0x4b4239, 0.8), 0, 4.0, 3.66));
  g.position.set(x, -0.3, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return g;
}

function museumDoha(parent, x, z, scale = 1) {
  const g = new THREE.Group();
  const stone = std(0xd8c9ac, 0.85);
  const glass = std(0x6d8b90, 0.3, 0.16);
  g.add(box(5.4, 2.0, 5.4, stone, 0, 1.0, 0));
  g.add(box(4.6, 2.6, 4.6, stone, 0, 3.3, 0));
  g.add(box(3.1, 3.4, 3.1, glass, 0, 6.3, 0));
  g.add(box(3.3, 0.25, 3.3, stone, 0, 8.0, 0));
  const dome = new THREE.Mesh(new THREE.SphereGeometry(2.3, 20, 10, 0, TAU, 0, Math.PI / 2), stone);
  dome.position.y = 8.1;
  g.add(dome);
  g.add(sph(0.18, std(0xcda56e, 0.3, 0.7), 0, 10.5, 0, 8));
  g.position.set(x, -0.3, z);
  g.scale.setScalar(scale);
  parent.add(g);
  return g;
}

function laScene(parent, palette) {
  const hills = new THREE.Group();
  const hillMat = std(0x6f6d4f, 0.95);
  for (let i = 0; i < 6; i++) {
    const hill = new THREE.Mesh(new THREE.SphereGeometry(7 + (i % 3) * 2, 18, 10), hillMat);
    hill.position.set(-17 + i * 7, -1.0, -17 - (i % 2) * 2);
    hill.scale.set(1.5, 0.34, 0.8);
    hill.receiveShadow = true;
    hills.add(hill);
  }
  parent.add(hills);
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(9.5, 2.1),
    new THREE.MeshBasicMaterial({ map: makeTextTexture('HOLLYWOOD', '#f3e9d5'), transparent: true, toneMapped: false })
  );
  sign.position.set(-4.0, 6.3, -13.1);
  sign.rotation.x = -0.08;
  parent.add(sign);
  const board = box(9.8, 2.35, 0.18, std(0xd7cfbb, 0.9), -4.0, 6.3, -13.25);
  parent.add(board);
  // palms
  const palmMat = std(0x6f563d, 0.9);
  const leafMat = std(0x426246, 0.85);
  [[-9.5, 2.5], [9.4, 2.0], [-7.2, -5.4], [7.8, -4.8]].forEach(([px, pz], idx) => {
    const pg = new THREE.Group();
    for (let i = 0; i < 6; i++) pg.add(cyl(0.09, 0.15, 0.7, 6, palmMat, i * 0.05, 0.35 + i * 0.64, 0));
    for (let i = 0; i < 8; i++) {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.14, 2.2, 3), leafMat);
      const a = (i / 8) * TAU;
      leaf.position.set(Math.cos(a) * 0.7, 4.15, Math.sin(a) * 0.7);
      leaf.rotation.z = Math.PI / 2;
      leaf.rotation.y = -a;
      leaf.scale.set(0.5, 1, 0.25);
      pg.add(leaf);
    }
    pg.position.set(px, -0.3, pz);
    pg.scale.setScalar(idx % 2 ? 1.1 : 0.9);
    parent.add(pg);
  });
}

function zurichScene(parent, palette) {
  const mountainMat = std(0x6d7b70, 0.95);
  for (let i = 0; i < 5; i++) {
    const peak = new THREE.Mesh(new THREE.ConeGeometry(6 + i * 1.2, 12 + (i % 3) * 4, 5), mountainMat);
    peak.position.set(-18 + i * 9, 3.5, -16 - (i % 2) * 4);
    peak.rotation.y = i * 0.6;
    parent.add(peak);
    const snow = new THREE.Mesh(new THREE.ConeGeometry((6 + i * 1.2) * 0.34, (12 + (i % 3) * 4) * 0.3, 5), std(0xe8e2d5, 0.8));
    snow.position.set(-18 + i * 9, 8.4 + (i % 3) * 0.6, -16 - (i % 2) * 4);
    snow.rotation.y = i * 0.6;
    parent.add(snow);
  }
  // lake
  const lake = new THREE.Mesh(new THREE.CircleGeometry(13, 32), std(0x44737b, 0.2, 0.1, { transparent: true, opacity: 0.8 }));
  lake.rotation.x = -Math.PI / 2;
  lake.position.set(0, -0.2, 5.5);
  lake.scale.set(1, 0.6, 1);
  parent.add(lake);
  // church spire
  const g = new THREE.Group();
  g.add(box(2.2, 5.5, 2.2, std(0xd2c5ad, 0.85), 0, 2.5, 0));
  g.add(cyl(0.02, 0.7, 3.0, 4, std(0x4b5a54, 0.7), 0, 6.7, 0));
  g.add(sph(0.08, std(0xd6ad64, 0.3, 0.7), 0, 8.3, 0, 6));
  g.position.set(7.5, -0.3, -3.2);
  parent.add(g);
}

function buildDestinationStage(destination) {
  const root = new THREE.Group();
  root.name = 'destination-world';
  const palette = destination.palette;
  const anim = { kind: 'city', destination, elapsed: 0, eyes: [] };

  cityBase(root, palette);
  // atmospheric clouds below and around
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const cl = cloud(root, Math.cos(a) * 24, -4 - (i % 3), Math.sin(a) * 24, 5 + (i % 4) * 2, 0.18);
    cl.rotation.y = a;
  }

  const skylines = {
    singapore: [[-11, -2, 2.3, 7, 3, 1], [10, -4, 3, 9, 3, 0], [-9, 7, 2, 5, 2, 0], [8, 8, 2, 4.5, 2, 1], [12, 3, 1.5, 6, 2, 0]],
    tokyo: [[-10, -3, 2.4, 6, 2.4, 1], [-7, 6, 2, 4, 2, 0], [9, -4, 2.8, 8, 2.6, 1], [12, 5, 2, 5, 2, 0], [7, 8, 1.6, 3.8, 2, 0]],
    losangeles: [[-11, -1, 2.5, 4.5, 2.5, 0], [-8, 7, 1.7, 3, 2, 1], [10, -2, 3, 6, 2.8, 1], [8, 8, 2, 3.6, 2, 0]],
    doha: [[-10, 2, 2, 6, 2, 1], [-7, -4, 2.5, 4, 2.4, 0], [10, -1, 2.4, 7, 2.3, 1], [8, 8, 2, 4, 2, 0]],
    dubai: [[-11, 2, 2.4, 7, 2.5, 1], [-8, -5, 2, 5, 2, 0], [11, -3, 2.7, 8, 2.7, 1], [9, 7, 2.2, 5.5, 2.2, 0], [13, 4, 1.8, 4, 1.8, 0]],
    london: [[-10, -1, 3.5, 4, 3, 0], [-7, 7, 2.2, 3.5, 2.2, 1], [9, -4, 3, 5, 2.8, 0], [12, 5, 2.4, 4, 2.2, 0]],
    paris: [[-10, 0, 3.6, 4, 3.2, 0], [-8, 8, 2.2, 3.5, 2.2, 0], [10, -3, 3.4, 4.5, 3, 1], [12, 6, 2.2, 3.8, 2.2, 0]],
    milan: [[-10, 0, 3.4, 4.5, 3, 0], [-8, 8, 2.2, 3.6, 2, 1], [10, -4, 3, 5, 2.8, 0], [12, 5, 2.4, 4, 2.2, 0]],
    newyork: [[-11, -2, 2.6, 6, 2.6, 1], [-7, 6, 2.4, 5, 2.4, 0], [10, -3, 3, 7, 3, 1], [13, 5, 2.2, 5, 2.2, 0], [7, 9, 1.8, 4, 1.8, 0]],
    zurich: [[-9, 4, 2.8, 4, 2.6, 0], [10, 0, 2.4, 4.5, 2.2, 1], [12, 7, 2, 3.4, 2, 0]],
  };
  skyline(root, palette, skylines[destination.id] || []);

  // island greenery gives the diorama a lived-in edge
  const trunkMat = std(0x6b5138, 0.9);
  const leafMats = [std(0x4f7355, 0.9), std(0x5e7f5d, 0.9), std(0x426348, 0.9)];
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * TAU + (i % 3) * 0.08;
    const r = 13.4 + ((i * 7) % 5) * 0.55;
    const h = 0.9 + ((i * 5) % 4) * 0.26;
    const tree = new THREE.Group();
    tree.add(cyl(0.06, 0.09, h * 0.75, 6, trunkMat, 0, h * 0.375, 0));
    const crown = sph(0.42 + (i % 3) * 0.08, leafMats[i % 3], 0, h * 0.85, 0, 8);
    crown.scale.set(1, 1.18, 1);
    tree.add(crown);
    if (i % 4 === 0) tree.add(sph(0.28, leafMats[(i + 1) % 3], 0.28, h * 0.68, 0.1, 7));
    tree.position.set(Math.cos(a) * r, -0.34, Math.sin(a) * r);
    tree.rotation.y = a;
    root.add(tree);
  }

  if (destination.id === 'singapore') anim.landmark = marinaBaySands(root, 0, -1.2, 1.0);
  if (destination.id === 'tokyo') anim.landmark = tokyoTower(root, 0, -1.8, 1.0);
  if (destination.id === 'losangeles') laScene(root, palette);
  if (destination.id === 'doha') anim.landmark = museumDoha(root, 0, -1.8, 1.0);
  if (destination.id === 'dubai') anim.landmark = burj(root, 0, -1.8, 0.52);
  if (destination.id === 'london') {
    const bb = bigBen(root, 0, -2.0, 1.0);
    anim.landmark = bb.group;
    anim.clock = bb.hands;
    const eye = londonEye(root, 9.5, 4.0, 0.9);
    anim.eye = eye;
  }
  if (destination.id === 'paris') anim.landmark = eiffel(root, 0, -1.5, 0.76);
  if (destination.id === 'milan') anim.landmark = gothicDuomo(root, 0, -1.8, 1.0);
  if (destination.id === 'newyork') anim.landmark = empireState(root, 0, -2.2, 0.62);
  if (destination.id === 'zurich') zurichScene(root, palette);

  // foreground: glowing water edge / arrival pier
  const pier = new THREE.Group();
  pier.add(box(7.0, 0.25, 1.8, std(0x9c876a, 0.8), 0, 0.0, 10.5));
  for (let i = 0; i < 4; i++) pier.add(cyl(0.06, 0.08, 1.1, 6, std(0x544b40, 0.5, 0.3), -3.2 + i * 2.1, 0.5, 10.5));
  root.add(pier);
  // warm street lamps
  [[-8.8, 8.9], [8.8, 8.9]].forEach(([x, z]) => {
    const lamp = new THREE.PointLight(0xffc375, 2.2, 13, 2);
    lamp.position.set(x, 2.2, z);
    root.add(lamp);
    root.add(cyl(0.04, 0.06, 2.6, 6, std(0x3d3a34, 0.5, 0.4), x, 1.3, z));
    root.add(sph(0.16, std(0xffd18b, 0.4, 0, { emissive: 0xffad55, emissiveIntensity: 2 }), x, 2.7, z, 8));
  });

  // camera-side warmth so landmarks keep their detail at golden hour
  root.add(new THREE.AmbientLight(0xffd9b0, 0.4));
  const warmFill = new THREE.DirectionalLight(0xffd6a4, 1.9);
  warmFill.position.set(24, 17, 28);
  root.add(warmFill);
  const coolRim = new THREE.DirectionalLight(0x9fc4de, 0.7);
  coolRim.position.set(-20, 11, -24);
  root.add(coolRim);

  return {
    root,
    kind: 'destination',
    destination,
    anim: {
      ...anim,
      update(time, dt) {
        this.elapsed += dt;
        if (this.clock) this.clock.rotation.z = -time * 0.06;
        if (this.eye) {
          this.eye.wheel.rotation.z = time * 0.08;
          this.eye.pods.forEach((pod, i) => {
            const a = (i / 16) * TAU + time * 0.08;
            pod.position.x = Math.cos(a) * 4.1;
            pod.position.y = 4.5 + Math.sin(a) * 4.1;
          });
        }
        root.position.y = Math.sin(time * 0.3) * 0.04;
      },
    },
  };
}

export function buildDestinationWorld(destination) {
  return buildDestinationStage(destination);
}

export function disposeTravelObject(obj) {
  obj.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((m) => {
        if (m.map) m.map.dispose();
        m.dispose();
      });
    }
  });
}
