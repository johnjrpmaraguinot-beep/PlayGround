import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const TAU = Math.PI * 2;

function std(color, roughness = 0.82, metalness = 0, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
}

function glassMat(tint = 0xa9d3d4) {
  return new THREE.MeshPhysicalMaterial({
    color: tint,
    roughness: 0.08,
    metalness: 0.05,
    transparent: true,
    opacity: 0.19,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
}

function box(w, h, d, material, x = 0, y = 0, z = 0, cast = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
}

function rbox(w, h, d, r, material, x = 0, y = 0, z = 0, cast = true) {
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
}

function cyl(rt, rb, h, seg, material, x = 0, y = 0, z = 0, cast = true) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
}

function sph(r, material, x = 0, y = 0, z = 0, detail = 16) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, detail, Math.max(8, detail / 2)), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function add(parent, mesh) {
  parent.add(mesh);
  return mesh;
}

function addMany(parent, ...meshes) {
  meshes.forEach((m) => parent.add(m));
  return parent;
}

function makeCanvasTexture(width, height, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function abstractArt(colors, seed = 1) {
  return makeCanvasTexture(300, 220, (ctx, w, h) => {
    ctx.fillStyle = colors[0];
    ctx.fillRect(0, 0, w, h);
    let s = seed * 9187;
    const rand = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    for (let i = 0; i < 17; i++) {
      ctx.globalAlpha = 0.35 + rand() * 0.5;
      ctx.fillStyle = colors[1 + Math.floor(rand() * (colors.length - 1))];
      ctx.beginPath();
      const x = rand() * w;
      const y = rand() * h;
      const rw = 20 + rand() * 150;
      const rh = 6 + rand() * 90;
      if (rand() > 0.5) ctx.ellipse(x, y, rw / 2, rh / 2, rand() * 3, 0, TAU);
      else ctx.rect(x, y, rw, rh);
      ctx.fill();
    }
    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.moveTo(rand() * w, 0);
      ctx.lineTo(rand() * w, h);
      ctx.stroke();
    }
  });
}

function rugTexture(base, lines) {
  return makeCanvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = lines;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.4;
    for (let i = -h; i < w + h; i += 26) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + h, h);
      ctx.stroke();
    }
    ctx.globalAlpha = 0.8;
    ctx.lineWidth = 5;
    ctx.strokeRect(24, 24, w - 48, h - 48);
  });
}

function textTexture(text, bg, color, font = '700 100px Manrope') {
  return makeCanvasTexture(512, 256, (ctx, w, h) => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, w / 2, h / 2 + 4);
  });
}

function frameArt(parent, texture, w, h, x, y, z, ry = 0) {
  const art = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ map: texture, toneMapped: false })
  );
  art.position.set(x, y, z);
  art.rotation.y = ry;
  parent.add(art);
  const frame = box(w + 0.12, h + 0.12, 0.045, std(0x2b2620, 0.6, 0.2), x, y, z - 0.03, false);
  frame.rotation.y = ry;
  parent.add(frame);
}

function lamp(parent, x, y, z, warm = 0xffbe75) {
  parent.add(cyl(0.02, 0.02, 0.6, 8, std(0x6d5b47, 0.5, 0.5), x, y + 0.3, z));
  parent.add(cyl(0.14, 0.12, 0.05, 16, std(0x6d5b47, 0.5, 0.5), x, y + 0.02, z));
  const shade = new THREE.Mesh(
    new THREE.CylinderGeometry(0.13, 0.2, 0.26, 16, 1, true),
    new THREE.MeshStandardMaterial({
      color: 0xf3e1bf,
      emissive: warm,
      emissiveIntensity: 0.8,
      side: THREE.DoubleSide,
    })
  );
  shade.position.set(x, y + 0.64, z);
  parent.add(shade);
}

function plant(parent, x, y, z, scale = 1) {
  const pot = cyl(0.16 * scale, 0.13 * scale, 0.28 * scale, 12, std(0xd9c3a0, 0.85), x, y + 0.14 * scale, z);
  parent.add(pot);
  const leafMat = std(0x3e6248, 0.75);
  for (let i = 0; i < 7; i++) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.14 * scale, 8, 6), leafMat);
    const a = (i / 7) * TAU;
    leaf.scale.set(0.55, 1.6, 0.55);
    leaf.position.set(x + Math.cos(a) * 0.12 * scale, y + (0.35 + (i % 3) * 0.1) * scale, z + Math.sin(a) * 0.12 * scale);
    leaf.rotation.z = Math.cos(a) * 0.7;
    leaf.rotation.x = Math.sin(a) * 0.7;
    leaf.castShadow = true;
    parent.add(leaf);
  }
}

function sofa(parent, x, y, z, color, width = 2.2, ry = 0) {
  const g = new THREE.Group();
  const fabric = std(color, 0.95);
  const seat = rbox(width, 0.24, 0.8, 0.07, fabric, 0, 0.32, 0);
  const back = rbox(width, 0.62, 0.2, 0.08, fabric, 0, 0.58, -0.31);
  g.add(seat, back);
  g.add(rbox(0.2, 0.52, 0.82, 0.08, fabric, -width / 2 + 0.08, 0.4, 0));
  g.add(rbox(0.2, 0.52, 0.82, 0.08, fabric, width / 2 - 0.08, 0.4, 0));
  for (let i = 0; i < 2; i++) {
    g.add(rbox(width * 0.4, 0.12, 0.68, 0.06, std(0xffffff, 1, 0, { color: color }), -width * 0.23 + i * width * 0.46, 0.47, 0.03, false));
  }
  g.position.set(x, y, z);
  g.rotation.y = ry;
  parent.add(g);
  return g;
}

function coffeeTable(parent, x, y, z, color = 0x6d523b) {
  const g = new THREE.Group();
  g.add(box(1.3, 0.08, 0.7, std(color, 0.5, 0.1), 0, 0.37, 0));
  [-0.55, 0.55].forEach((lx) => [-0.25, 0.25].forEach((lz) => g.add(box(0.06, 0.36, 0.06, std(0x3c2f24, 0.5), lx, 0.18, lz))));
  g.position.set(x, y, z);
  parent.add(g);
}

function bed(parent, x, y, z, width = 2.3, headColor = 0x6c5845, linen = 0xf2e9da) {
  const g = new THREE.Group();
  g.add(rbox(width, 0.3, 2.05, 0.08, std(linen, 0.95), 0, 0.32, 0));
  g.add(rbox(width, 0.18, 1.3, 0.08, std(0xd8cab7, 0.95), 0, 0.49, 0.2));
  g.add(rbox(width + 0.15, 0.85, 0.18, 0.08, std(headColor, 0.9), 0, 0.55, -1.0));
  [-0.48, 0.48].forEach((ox) => g.add(rbox(width * 0.33, 0.16, 0.5, 0.08, std(0xffffff, 0.9), ox, 0.58, -0.63)));
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

function diningSet(parent, x, y, z, color = 0x6c5139, chairs = 6) {
  const g = new THREE.Group();
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.08, 28), std(color, 0.4, 0.1));
  top.position.y = 0.75;
  top.castShadow = true;
  g.add(top);
  g.add(cyl(0.13, 0.24, 0.72, 12, std(0x3c2f24, 0.5), 0, 0.37, 0));
  const chairMat = std(0x9b8265, 0.9);
  for (let i = 0; i < chairs; i++) {
    const a = (i / chairs) * TAU;
    const chair = new THREE.Group();
    chair.add(rbox(0.4, 0.1, 0.4, 0.05, chairMat, 0, 0.45, 0));
    chair.add(rbox(0.4, 0.52, 0.08, 0.05, chairMat, 0, 0.62, -0.18));
    [-0.14, 0.14].forEach((ox) => [-0.14, 0.14].forEach((oz) => chair.add(box(0.04, 0.45, 0.04, std(0x55422f, 0.5), ox, 0.22, oz))));
    chair.position.set(Math.cos(a) * 1.3, 0, Math.sin(a) * 1.3);
    chair.rotation.y = -a + Math.PI / 2;
    g.add(chair);
  }
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

function addWindow(parent, w, h, x, y, z, tint, frameColor = 0x3d3830, ry = 0) {
  const g = new THREE.Group();
  const frame = std(frameColor, 0.45, 0.55);
  g.add(box(w, 0.07, 0.08, frame, 0, h / 2, 0));
  g.add(box(w, 0.07, 0.08, frame, 0, -h / 2, 0));
  g.add(box(0.07, h, 0.08, frame, -w / 2, 0, 0));
  g.add(box(0.07, h, 0.08, frame, w / 2, 0, 0));
  g.add(box(0.045, h, 0.05, frame, 0, 0, 0.01));
  g.add(box(w, 0.05, 0.05, frame, 0, 0, 0.01));
  const pane = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.08, h - 0.08), glassMat(tint));
  pane.position.z = 0;
  g.add(pane);
  g.position.set(x, y, z);
  g.rotation.y = ry;
  parent.add(g);
  return g;
}

function addRailing(parent, x, y, z, width, ry = 0, color = 0x4a443b) {
  const g = new THREE.Group();
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(width, 0.72), glassMat(0xb6dfe0));
  glass.position.y = 0.36;
  g.add(glass);
  g.add(box(width, 0.06, 0.06, std(color, 0.35, 0.7), 0, 0.74, 0));
  for (let i = 0; i <= 5; i++) g.add(box(0.04, 0.75, 0.04, std(color, 0.35, 0.7), -width / 2 + (width / 5) * i, 0.38, 0));
  g.position.set(x, y, z);
  g.rotation.y = ry;
  parent.add(g);
}

function addLounge(parent, x, y, z, ry = 0, cushion = 0xf0e6d5) {
  const g = new THREE.Group();
  g.add(rbox(0.72, 0.13, 1.8, 0.07, std(cushion, 0.95), 0, 0.42, 0));
  const back = rbox(0.72, 0.1, 0.95, 0.05, std(cushion, 0.95), 0, 0.74, -0.65);
  back.rotation.x = -0.65;
  g.add(back);
  g.add(box(0.7, 0.06, 1.7, std(0x6f5237, 0.7), 0, 0.31, 0));
  [-0.65, 0.65].forEach((oz) => g.add(box(0.06, 0.34, 0.06, std(0x6f5237, 0.7), 0, 0.16, oz)));
  g.position.set(x, y, z);
  g.rotation.y = ry;
  parent.add(g);
}

function addUmbrella(parent, x, y, z, color = 0xe9dfcc) {
  const g = new THREE.Group();
  g.add(cyl(0.025, 0.025, 2.2, 8, std(0x5e4a36, 0.8), 0, 1.1, 0, false));
  const canopy = new THREE.Mesh(new THREE.ConeGeometry(1.35, 0.34, 14, 1, true), std(color, 0.95, 0, { side: THREE.DoubleSide }));
  canopy.position.y = 2.2;
  canopy.castShadow = true;
  g.add(canopy);
  g.add(cyl(0.26, 0.38, 0.1, 12, std(0x57504a, 0.7), 0, 0.05, 0, false));
  g.position.set(x, y, z);
  parent.add(g);
}

function frondGeometry(length, width) {
  const segments = 6;
  const positions = [];
  const indices = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const half = width * (0.18 + Math.sin(Math.PI * Math.min(0.96, t + 0.04)) * 0.52) * (1 - t * 0.82);
    const droop = -length * 0.34 * t * t;
    const z = length * t;
    positions.push(-half, droop, z, half, droop, z);
    if (i < segments) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function palm(parent, x, y, z, scale = 1, sway = null) {
  const g = new THREE.Group();
  const trunkMat = std(0x816344, 0.95);
  let px = 0;
  for (let i = 0; i < 8; i++) {
    const seg = cyl(0.075 * scale, 0.115 * scale, 0.48 * scale, 7, trunkMat, px, (0.24 + i * 0.44) * scale, 0, false);
    seg.rotation.z = -0.035 - i * 0.012;
    g.add(seg);
    px += (0.025 + i * 0.008) * scale;
  }
  const crown = new THREE.Group();
  crown.position.set(px, 3.7 * scale, 0);
  const leafMat = std(0x426b46, 0.82, 0, { side: THREE.DoubleSide });
  const leafMat2 = std(0x527d52, 0.82, 0, { side: THREE.DoubleSide });
  for (let i = 0; i < 10; i++) {
    const holder = new THREE.Group();
    const a = (i / 10) * TAU + (i % 2) * 0.08;
    const frond = new THREE.Mesh(frondGeometry((1.65 + (i % 3) * 0.22) * scale, 0.52 * scale), i % 3 === 0 ? leafMat2 : leafMat);
    frond.rotation.x = -0.15 - (i % 4) * 0.055;
    frond.rotation.z = (i % 2 ? 0.06 : -0.06);
    frond.castShadow = true;
    holder.add(frond);
    holder.rotation.y = a;
    crown.add(holder);
  }
  // coconuts / crown heart
  crown.add(sph(0.16 * scale, std(0x4e4a2e, 0.95), 0, 0.02, 0, 8));
  for (let i = 0; i < 3; i++) {
    crown.add(sph(0.075 * scale, std(0x6b5a34, 0.9), Math.cos(i * 2.1) * 0.14, -0.12, Math.sin(i * 2.1) * 0.14, 8));
  }
  g.add(crown);
  g.position.set(x, y, z);
  parent.add(g);
  if (sway) sway.push({ object: crown, phase: Math.random() * TAU, amp: 0.025 });
  return g;
}

function broadTree(parent, x, y, z, scale = 1, sway = null) {
  const g = new THREE.Group();
  g.add(cyl(0.12 * scale, 0.22 * scale, 1.9 * scale, 8, std(0x6d5138, 0.95), 0, 0.95 * scale, 0));
  const leafMats = [std(0x466449, 0.9), std(0x527557, 0.9), std(0x3d5b41, 0.9)];
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * TAU;
    const m = leafMats[i % 3];
    const blob = sph((0.7 + (i % 3) * 0.15) * scale, m, Math.cos(a) * 0.55 * scale, (2.0 + (i % 2) * 0.35) * scale, Math.sin(a) * 0.55 * scale, 12);
    g.add(blob);
  }
  g.add(sph(0.95 * scale, leafMats[1], 0, 2.5 * scale, 0, 12));
  g.position.set(x, y, z);
  parent.add(g);
  if (sway) sway.push({ object: g, phase: Math.random() * TAU, amp: 0.012 });
  return g;
}

function hedge(parent, x, y, z, w, d = 0.6, h = 0.7) {
  const mat = std(0x3e6043, 0.92);
  const m = rbox(w, h, d, Math.min(0.25, h / 3), mat, x, y + h / 2, z);
  parent.add(m);
  return m;
}

function flowerBed(parent, x, y, z, w, color = 0xd6a35a) {
  parent.add(rbox(w, 0.14, 0.7, 0.05, std(0x5a4431, 1), x, y + 0.07, z));
  const petal = std(color, 0.8);
  for (let i = 0; i < Math.max(4, Math.floor(w * 4)); i++) {
    const bx = x - w / 2 + 0.22 + ((w - 0.44) / Math.max(1, Math.floor(w * 4) - 1)) * i;
    parent.add(sph(0.055, petal, bx, y + 0.2 + (i % 2) * 0.03, z + (i % 3 - 1) * 0.12, 6));
    parent.add(cyl(0.012, 0.012, 0.16, 4, std(0x4b6b42, 0.8), bx, y + 0.12, z + (i % 3 - 1) * 0.12, false));
  }
}

function buildPerson(member, index, accent) {
  const group = new THREE.Group();
  const isChild = member.age < 15;
  const scale = isChild ? 0.76 : 1.0;
  const skin = std(member.skin, 0.85);
  const top = std(member.top, 0.88);
  const bottom = std(member.bottom, 0.9);
  const hairMat = std(member.hair, 0.92);
  const shoe = std(0x2f2924, 0.85);
  const person = new THREE.Group();
  person.scale.setScalar(scale);

  // legs
  [-0.105, 0.105].forEach((x) => {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.48, 4, 8), bottom);
    leg.position.set(x, 0.42, 0);
    leg.castShadow = true;
    person.add(leg);
    const shoeMesh = rbox(0.2, 0.12, 0.32, 0.05, shoe, x, 0.075, 0.06);
    person.add(shoeMesh);
  });

  if (member.style === 'gown') {
    const gown = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.43, 1.02, 16, 1, false), top);
    gown.position.y = 0.47;
    gown.castShadow = true;
    person.add(gown);
  } else {
    person.add(rbox(0.4, 0.22, 0.26, 0.07, bottom, 0, 0.74, 0));
  }

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.38, 4, 10), top);
  torso.position.y = 1.06;
  torso.castShadow = true;
  person.add(torso);

  if (member.style === 'suit' || member.style === 'tailored') {
    person.add(box(0.37, 0.54, 0.08, std(0xf3ede2, 0.85), 0, 1.08, 0.16, false));
    person.add(box(0.08, 0.54, 0.1, top, 0.02, 1.08, 0.17, false));
    if (member.style === 'suit') person.add(box(0.08, 0.28, 0.08, std(0x874041, 0.7), 0, 1.2, 0.18, false));
  }

  const arms = [];
  [-1, 1].forEach((side) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.26, 1.27, 0);
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.42, 4, 8), top);
    arm.position.y = -0.22;
    arm.castShadow = true;
    pivot.add(arm);
    const hand = sph(0.065, skin, 0, -0.47, 0, 8);
    pivot.add(hand);
    pivot.rotation.z = side * 0.14;
    person.add(pivot);
    arms.push({ pivot, side, base: side * 0.14 });
  });

  const neck = cyl(0.06, 0.07, 0.1, 8, skin, 0, 1.46, 0, false);
  person.add(neck);
  const head = sph(isChild ? 0.175 : 0.17, skin, 0, 1.65, 0, 18);
  person.add(head);

  // simple face
  [-0.063, 0.063].forEach((x) => person.add(sph(0.018, std(0x241d19, 0.5), x, 1.68, 0.158, 6)));
  person.add(sph(0.016, std(0x8d5a4a, 0.5), 0, 1.625, 0.168, 6));
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.008, 4, 8, Math.PI), std(0x74463d, 0.5));
  smile.position.set(0, 1.59, 0.164);
  smile.rotation.z = Math.PI;
  person.add(smile);

  // hair
  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(isChild ? 0.185 : 0.18, 16, 10, 0, TAU, 0, Math.PI * 0.58),
    hairMat
  );
  hairCap.position.set(0, 1.692, -0.008);
  hairCap.castShadow = true;
  person.add(hairCap);
  if (member.style === 'gown') {
    const bun = sph(0.09, hairMat, 0, 1.76, -0.11, 10);
    person.add(bun);
  }
  if (member.name === 'Ivy' || member.name === 'Celine') {
    const pony = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.35, 4, 8), hairMat);
    pony.position.set(0, 1.48, -0.16);
    pony.castShadow = true;
    person.add(pony);
  }

  person.position.y = 0;
  group.add(person);
  group.scale.setScalar(isChild ? 1.06 : 1.1);

  const ringMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(accent),
    transparent: true,
    opacity: 0.34,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.29, 0.34, 28), ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.035;
  group.add(ring);

  const hit = new THREE.Mesh(
    new THREE.SphereGeometry(0.42, 8, 6),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
  );
  hit.position.y = 0.92;
  hit.userData.memberIndex = index;
  group.add(hit);
  group.userData.memberIndex = index;
  group.userData.ring = ring;
  group.userData.person = person;
  group.userData.arms = arms;
  group.userData.phase = index * 1.7 + Math.random() * 2;
  return group;
}

function buildCar(spec) {
  const g = new THREE.Group();
  const paint = new THREE.MeshPhysicalMaterial({
    color: spec.color,
    roughness: 0.25,
    metalness: 0.52,
    clearcoat: 1,
    clearcoatRoughness: 0.16,
  });
  const dark = std(0x171b1d, 0.32, 0.2);
  const chrome = std(0xcbb895, 0.24, 0.9);
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x223239,
    roughness: 0.05,
    metalness: 0.5,
    transparent: true,
    opacity: 0.8,
  });
  const L = spec.length || 3.9;
  const W = spec.width || 1.65;
  const H = spec.height || 0.6;
  g.add(rbox(L, H, W, 0.21, paint, 0, 0.5, 0));
  g.add(rbox(L * 0.53, spec.cabinH || 0.55, W * 0.86, 0.18, spec.kind === 'suv' ? paint : glass, -L * 0.02, 0.9, 0));
  if (spec.kind !== 'suv') {
    g.add(rbox(L * 0.47, 0.12, W * 0.88, 0.06, paint, -L * 0.02, 1.17, 0));
    g.add(box(0.04, 0.5, W * 0.8, paint, -L * 0.02, 0.92, 0, false));
  } else {
    g.add(rbox(L * 0.53, 0.08, W * 0.87, 0.04, dark, -L * 0.02, 1.2, 0, false));
  }
  const wheelMat = std(0x101214, 0.7, 0.2);
  const rimMat = chrome;
  [-L * 0.32, L * 0.32].forEach((x) => [-W / 2, W / 2].forEach((z) => {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.16, 18), wheelMat);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(x, 0.31, z);
    wheel.castShadow = true;
    g.add(wheel);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.17, 12), rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(x, 0.31, z);
    g.add(rim);
  }));
  // lights and trim
  [-1, 1].forEach((side) => {
    const light = rbox(0.13, 0.13, 0.3, 0.03, std(0xfff1cb, 0.2, 0, { emissive: 0xffcc85, emissiveIntensity: 1.5 }), L / 2 - 0.04, 0.57, side * W * 0.29, false);
    g.add(light);
    g.add(box(0.06, 0.08, W * 0.55, chrome, L / 2 + 0.02, 0.37, 0, false));
  });
  g.add(box(L * 0.4, 0.03, 0.03, chrome, 0, 0.72, W / 2 + 0.01, false));
  if (spec.kind === 'luxury') {
    g.add(box(0.52, 0.34, 0.05, chrome, -L * 0.2, 0.8, W / 2 + 0.03, false));
    g.add(cyl(0.1, 0.1, 0.05, 12, chrome, -L * 0.2, 0.62, W / 2 + 0.03, false));
  }
  return g;
}

function buildHelicopter(scale = 1, accent = 0xd8b274) {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: 0xf1eee6,
    roughness: 0.28,
    metalness: 0.35,
    clearcoat: 0.7,
  });
  const dark = std(0x273034, 0.4, 0.5);
  const accentMat = std(accent, 0.4, 0.3);
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x7fa7b7,
    roughness: 0.03,
    metalness: 0.6,
    transparent: true,
    opacity: 0.7,
  });
  const body = sph(1, bodyMat, 0, 1.4, 0, 20);
  body.scale.set(1.2, 0.72, 0.85);
  g.add(body);
  const nose = sph(0.6, glass, 0, 1.38, 0.65, 16);
  nose.scale.set(0.92, 0.65, 0.7);
  g.add(nose);
  g.add(cyl(0.12, 0.28, 2.9, 8, bodyMat, 0, 1.55, -2.1).rotateX(Math.PI / 2));
  g.add(box(0.08, 1.25, 0.05, accentMat, 0, 1.95, -3.6, false));
  g.add(box(0.06, 0.05, 1.75, accentMat, 0, 1.9, -3.5, false));
  const skidMat = std(0x31373a, 0.4, 0.6);
  [-0.42, 0.42].forEach((z) => {
    g.add(cyl(0.045, 0.045, 2.65, 8, skidMat, 0, 0.52, z).rotateZ(Math.PI / 2));
    [-0.8, 0.8].forEach((x) => g.add(box(0.05, 0.45, 0.05, skidMat, x, 0.75, z, false)));
  });
  const rotor = new THREE.Group();
  rotor.position.set(0, 2.35, 0);
  rotor.add(cyl(0.12, 0.12, 0.25, 12, dark));
  for (let i = 0; i < 4; i++) {
    const blade = box(0.09, 0.025, 3.4, dark, 0, 0, 1.7, false);
    blade.rotation.y = (i / 4) * TAU;
    rotor.add(blade);
  }
  g.add(rotor);
  const tailRotor = new THREE.Group();
  tailRotor.position.set(0.34, 1.75, -3.62);
  for (let i = 0; i < 3; i++) {
    const blade = box(0.04, 1.3, 0.06, dark, 0, 0, 0, false);
    blade.rotation.z = (i / 3) * TAU;
    tailRotor.add(blade);
  }
  g.add(tailRotor);
  g.scale.setScalar(scale);
  g.userData.rotor = rotor;
  g.userData.tailRotor = tailRotor;
  return g;
}

function helipad(parent, x, z, accent, r = 3.3) {
  const pad = cyl(r, r, 0.12, 48, std(0x454844, 0.9, 0.05), x, 0.08, z);
  parent.add(pad);
  const ring = new THREE.Mesh(new THREE.RingGeometry(r * 0.76, r * 0.83, 48), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.9 }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(x, 0.15, z);
  parent.add(ring);
  const hMat = new THREE.MeshBasicMaterial({ color: 0xf2eee2 });
  parent.add(box(0.34, 0.02, 1.7, hMat, x - 0.72, 0.155, z, false));
  parent.add(box(0.34, 0.02, 1.7, hMat, x + 0.72, 0.155, z, false));
  parent.add(box(1.15, 0.02, 0.34, hMat, x, 0.155, z, false));
}

function addRipples(parent, x, y, z, w, d, accent = 0xbfe8e5) {
  const rings = [];
  for (let i = 0; i < 4; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.18, 32), mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x + (Math.random() - 0.5) * w * 0.7, y, z + (Math.random() - 0.5) * d * 0.7);
    parent.add(ring);
    rings.push({ mesh: ring, phase: Math.random() * 4, max: 1.8 + Math.random() });
  }
  return rings;
}

function buildPool(parent, x, y, z, w, d, deckMat, waterColor = 0x2d8a91) {
  const g = new THREE.Group();
  // Deck frame rather than a solid slab under the water.
  g.add(box(w + 2.2, 0.16, 0.95, deckMat, 0, 0.08, -d / 2 - 0.55, false));
  g.add(box(w + 2.2, 0.16, 0.95, deckMat, 0, 0.08, d / 2 + 0.55, false));
  g.add(box(0.95, 0.16, d + 0.15, deckMat, -w / 2 - 0.62, 0.08, 0, false));
  g.add(box(0.95, 0.16, d + 0.15, deckMat, w / 2 + 0.62, 0.08, 0, false));
  // dark basin
  g.add(box(w, 0.32, d, std(0x24555a, 0.65, 0.1), 0, -0.12, 0, false));
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(w - 0.16, d - 0.16),
    new THREE.MeshPhysicalMaterial({
      color: waterColor,
      roughness: 0.08,
      metalness: 0.08,
      transparent: true,
      opacity: 0.95,
      clearcoat: 0.95,
      clearcoatRoughness: 0.08,
      side: THREE.DoubleSide,
    })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.205;
  water.receiveShadow = true;
  g.add(water);
  // pale coping
  g.add(box(w + 0.32, 0.16, 0.26, std(0xd8c8ae, 0.85), 0, 0.19, -d / 2 - 0.04, false));
  g.add(box(w + 0.32, 0.16, 0.26, std(0xd8c8ae, 0.85), 0, 0.19, d / 2 + 0.04, false));
  g.add(box(0.26, 0.16, d + 0.1, std(0xd8c8ae, 0.85), -w / 2 - 0.04, 0.19, 0, false));
  g.add(box(0.26, 0.16, d + 0.1, std(0xd8c8ae, 0.85), w / 2 + 0.04, 0.19, 0, false));
  // underwater light strip
  g.add(box(w - 0.7, 0.03, 0.08, new THREE.MeshBasicMaterial({ color: 0x8ff2e8, transparent: true, opacity: 0.55 }), 0, 0.05, d / 2 - 0.3, false));
  g.position.set(x, y, z);
  parent.add(g);
  const ripples = addRipples(parent, x, y + 0.23, z, w, d);
  const light = new THREE.PointLight(0x4fc8ce, 2.2, 11, 2);
  light.position.set(x, y + 0.75, z);
  parent.add(light);
  return { group: g, ripples, water };
}

function createEstateBase(family, env) {
  const root = new THREE.Group();
  root.name = `estate-${family.id}`;
  const isUltra = family.id === 'ultra';
  const isAverage = family.id === 'average';
  const palette = env.palette;
  const anim = {
    people: [],
    rings: [],
    rotors: [],
    ripples: [],
    sway: [],
    lights: [],
  };

  // ground island
  const island = new THREE.Group();
  const baseMat = std(isAverage ? 0x4c4a3e : 0x4e4b40, 0.96);
  const islandBody = cyl(isUltra ? 22 : 20, isUltra ? 19.2 : 17.5, 1.2, 64, baseMat, 0, -0.62, 0, false);
  islandBody.receiveShadow = true;
  island.add(islandBody);
  const lawn = new THREE.Mesh(
    new THREE.CircleGeometry(isUltra ? 21.8 : 19.8, 64),
    std(palette.lawn, 0.98)
  );
  lawn.rotation.x = -Math.PI / 2;
  lawn.position.y = 0.005;
  lawn.receiveShadow = true;
  island.add(lawn);

  // soft irregular lawn patches for painterly feel
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU + 0.3;
    const r = 12 + (i % 4) * 1.5;
    const patch = new THREE.Mesh(new THREE.CircleGeometry(1.8 + (i % 3) * 0.65, 7), std(palette.lawnAlt, 0.98));
    patch.rotation.x = -Math.PI / 2;
    patch.position.set(Math.cos(a) * r, 0.012, Math.sin(a) * r);
    patch.scale.set(1.5, 1, 0.75);
    patch.receiveShadow = true;
    island.add(patch);
  }

  // stone front terrace
  const terraceMat = std(palette.stone, 0.86);
  island.add(box(isUltra ? 27 : 22, 0.18, 10, terraceMat, 0, 0.1, 6.8, false));
  if (!isAverage) {
    for (let i = 0; i < 5; i++) {
      const line = box(isUltra ? 25 : 20, 0.02, 0.05, std(palette.stoneAlt, 0.9), 0, 0.2, 3.2 + i * 1.8, false);
      island.add(line);
    }
  }

  // stepping path and driveway
  const pathMat = std(isAverage ? 0xa99d86 : 0x8b7f6b, 0.9);
  for (let i = 0; i < 4; i++) {
    island.add(box(2.4 - i * 0.12, 0.1, 1.2, pathMat, 0, 0.07, 12.5 + i * 1.35, false));
  }
  const drive = box(isAverage ? 6.6 : 8.4, 0.09, 5.8, std(0x4a4a45, 0.94), isAverage ? -6.1 : -8.5, 0.055, 8.9, false);
  drive.rotation.y = isAverage ? 0.1 : -0.16;
  island.add(drive);

  // trim hedges / borders
  if (!isAverage) {
    hedge(island, -12.5, 0.1, 0.8, 4.2, 0.6, 0.7);
    hedge(island, 13.3, 0.1, -2.2, 0.55, 3.6, 0.55);
    hedge(island, 10.8, 0.1, 11.5, 4.6, 0.55, 0.6);
    hedge(island, -9.7, 0.1, 12.3, 3.0, 0.55, 0.55);
  } else {
    hedge(island, -8.8, 0.1, 7.3, 0.5, 4.0, 0.5);
    hedge(island, 8.8, 0.1, 7.3, 0.5, 4.0, 0.5);
  }

  // trees
  const treeSpots = isUltra
    ? [[-14.5, -3], [15.5, 11.5], [-15.4, 12.6], [12.9, -12.7], [-7.5, -13.4], [17.6, -7.0]]
    : isAverage
      ? [[-10.5, 1.2], [10.2, 4.4], [-8.4, 11.4], [7.5, 12.1]]
      : [[-10.8, -5.3], [12.1, -7.2], [-12.2, 11.9], [8.8, 13.4]];
  treeSpots.forEach(([x, z], i) => {
    if (i % 3 === 0 || isAverage) broadTree(island, x, 0, z, isAverage ? 0.85 : 1.0, anim.sway);
    else palm(island, x, 0, z, isUltra ? 1.0 : 0.86, anim.sway);
  });

  // flowers
  flowerBed(island, isUltra ? -14.1 : -10.8, 0.04, 10.8, 2.8, isAverage ? 0xd08a6b : 0xe2b35c);
  flowerBed(island, isUltra ? 14.5 : 10.3, 0.04, 8.4, 2.3, 0xdba5a4);

  root.add(island);

  if (isUltra) buildUltraHouse(root, family, palette, anim);
  else if (isAverage) buildAverageHouse(root, family, palette, anim);
  else buildRichHouse(root, family, palette, anim);

  // ambient floating motes
  const moteCount = 80;
  const positions = new Float32Array(moteCount * 3);
  for (let i = 0; i < moteCount; i++) {
    const a = Math.random() * TAU;
    const r = 8 + Math.random() * 18;
    positions[i * 3] = Math.cos(a) * r;
    positions[i * 3 + 1] = 0.6 + Math.random() * 8;
    positions[i * 3 + 2] = Math.sin(a) * r;
  }
  const moteGeo = new THREE.BufferGeometry();
  moteGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const motes = new THREE.Points(
    moteGeo,
    new THREE.PointsMaterial({ color: 0xffdfad, size: 0.055, transparent: true, opacity: 0.55, depthWrite: false })
  );
  root.add(motes);
  anim.motes = motes;

  // water sparkle
  const glintMat = new THREE.MeshBasicMaterial({ color: 0xffe5b0, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false });
  for (let i = 0; i < 5; i++) {
    const glint = new THREE.Mesh(new THREE.PlaneGeometry(1.4 + i * 0.25, 0.03), glintMat);
    glint.rotation.x = -Math.PI / 2;
    glint.position.set(3.5 + i * 0.7, 0.255, 8.2 + (i % 2) * 0.7);
    root.add(glint);
  }

  return { root, anim };
}

function buildUltraHouse(root, family, palette, anim) {
  const wall = std(palette.wall, 0.86);
  const wallAlt = std(palette.wallAlt, 0.82);
  const dark = std(0x262b2b, 0.72, 0.1);
  const bronze = std(0x6b5138, 0.4, 0.65);
  const wood = std(0x8e6545, 0.78);
  const floorMat = std(0xceb999, 0.7);
  const stoneDeck = std(palette.stone, 0.88);
  const glass = glassMat();

  const house = new THREE.Group();
  house.position.set(0, 0, -2.0);

  // pool and outdoor life
  const pool = buildPool(root, 5.4, 0.17, 7.1, 9.2, 4.3, stoneDeck);
  anim.ripples.push(...pool.ripples);
  addLounge(root, 1.4, 0.2, 10.1, 0.18);
  addLounge(root, 2.4, 0.2, 10.1, 0.18);
  addUmbrella(root, 3.0, 0.2, 10.4, 0xefe4d0);

  // main plinth
  house.add(box(18.8, 0.35, 10.8, stoneDeck, 0, 0.18, 0, false));
  house.add(box(17.5, 0.2, 9.6, floorMat, 0, 0.43, 0, false));

  // ground level shell
  const l0y = 0.43;
  house.add(box(17.4, 0.18, 9.5, floorMat, 0, l0y + 0.06, 0, false));
  house.add(box(17.4, 3.0, 0.28, wall, 0, l0y + 1.5, -4.62, false));
  house.add(box(0.28, 3.0, 9.4, wall, -8.56, l0y + 1.5, 0, false));
  house.add(box(0.28, 3.0, 9.4, wall, 8.56, l0y + 1.5, 0, false));
  house.add(box(17.7, 0.22, 9.8, wallAlt, 0, l0y + 3.0, 0, false));
  // front columns
  [-8.56, -4.4, 0, 4.4, 8.56].forEach((x) => house.add(box(0.18, 3.0, 0.18, dark, x, l0y + 1.5, 4.6, false)));
  // front glazing left side only, keep centre open to reveal life
  [-6.5, -3.2, 6.5].forEach((x) => addWindow(house, 2.3, 2.55, x, l0y + 1.48, 4.62, 0x9ac9cb, 0x3b352d));
  addWindow(house, 1.6, 2.55, 3.1, l0y + 1.48, 4.62, 0x9ac9cb, 0x3b352d);
  // interior warm ceiling
  const glow = new THREE.Mesh(new THREE.BoxGeometry(9.2, 0.035, 0.25), new THREE.MeshBasicMaterial({ color: 0xffd18d }));
  glow.position.set(2.4, l0y + 2.8, -1.8);
  house.add(glow);

  // living room
  house.add(box(5.3, 0.04, 4.0, floorMat, 2.0, l0y + 0.18, -1.25, false));
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 3.3), new THREE.MeshBasicMaterial({ map: rugTexture('#a39076', '#e5d9c5'), toneMapped: true }));
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(2.1, l0y + 0.21, -1.2);
  house.add(rug);
  sofa(house, 2.2, l0y + 0.2, -3.2, 0xded1bb, 2.8, 0);
  coffeeTable(house, 2.2, l0y + 0.2, -1.55, 0x5c4633);
  frameArt(house, abstractArt(['#13332e', '#c07c5b', '#e2b86f', '#e8dcc6'], 3), 2.15, 1.15, 2.2, l0y + 1.82, -4.44);
  lamp(house, 0.2, l0y + 0.2, -3.9);
  plant(house, 7.4, l0y + 0.2, -3.7, 1.3);
  // dining
  diningSet(house, -5.7, l0y + 0.2, -1.5, 0x5b4632, 6);
  // sideboard
  house.add(box(2.0, 0.65, 0.36, wood, -7.1, l0y + 0.52, -4.2));

  // upper level
  const l1y = 4.15;
  house.add(box(14.4, 0.24, 8.5, wallAlt, -1.2, l1y, -0.4, false));
  house.add(box(14.0, 0.18, 8.1, floorMat, -1.2, l1y + 0.15, -0.4, false));
  house.add(box(14.0, 2.8, 0.25, wall, -1.2, l1y + 1.55, -4.35, false));
  house.add(box(0.25, 2.8, 8.1, wall, -8.35, l1y + 1.55, -0.4, false));
  house.add(box(0.25, 2.8, 8.1, wallAlt, 5.9, l1y + 1.55, -0.4, false));
  house.add(box(14.5, 0.22, 8.7, wall, -1.2, l1y + 2.84, -0.4, false));
  addWindow(house, 5.2, 2.2, -4.0, l1y + 1.5, 3.64, 0x9ac9cb, 0x3f372d);
  addWindow(house, 2.9, 2.2, 2.7, l1y + 1.5, 3.64, 0x9ac9cb, 0x3f372d);
  // upper terrace and railing
  house.add(box(4.0, 0.18, 8.0, stoneDeck, 6.2, l1y + 0.16, -0.4, false));
  addRailing(house, 6.2, l1y + 0.25, 3.54, 3.7, 0, 0x494137);
  addRailing(house, 8.15, l1y + 0.25, -0.4, 7.6, Math.PI / 2, 0x494137);
  // bedroom
  bed(house, -4.4, l1y + 0.2, -2.3, 2.75, 0x5c4b3a, 0xf2e9da);
  rugUnderBed(house, -4.4, l1y + 0.19, -1.3, 3.8, 2.0, 0xb09d82);
  addWindow(house, 2.5, 1.8, -1.8, l1y + 1.7, -4.44, 0xaacfd0, 0x4b4033);
  frameArt(house, abstractArt(['#211f26', '#c98262', '#f1d4a3'], 9), 1.45, 1.0, -2.05, l1y + 1.9, -4.45);
  lamp(house, -7.1, l1y + 0.2, -3.5);
  // terrace furniture
  addLounge(house, 6.2, l1y + 0.3, 0.6, Math.PI / 2, 0xe8dac4);
  addUmbrella(house, 6.3, l1y + 0.3, -1.4, 0xe9dcc5);

  // top pavilion
  const l2y = 7.35;
  house.add(box(9.4, 0.22, 7.4, wall, 2.0, l2y, -0.7, false));
  house.add(box(9.0, 0.16, 7.0, floorMat, 2.0, l2y + 0.15, -0.7, false));
  house.add(box(9.0, 2.65, 0.24, wallAlt, 2.0, l2y + 1.5, -4.1, false));
  house.add(box(0.24, 2.65, 7.0, wall, -2.5, l2y + 1.5, -0.7, false));
  house.add(box(0.24, 2.65, 7.0, wallAlt, 6.5, l2y + 1.5, -0.7, false));
  house.add(box(10.2, 0.3, 8.0, wallAlt, 2.0, l2y + 2.9, -0.7, false));
  addWindow(house, 5.2, 2.1, 2.0, l2y + 1.45, 2.8, 0x9ac9cb, 0x3d362e);
  // office
  house.add(box(2.3, 0.11, 1.0, wood, 2.1, l2y + 0.82, -2.4));
  [-1.3, -0.75, -0.2, 0.35].forEach((x) => house.add(box(0.06, 0.72, 0.06, dark, 2.1 + x, l2y + 0.45, -2.4, false)));
  house.add(box(0.52, 0.38, 0.04, std(0x0f1618, 0.3, 0.2), 2.1, l2y + 1.02, -3.9, false));
  lamp(house, 0.5, l2y + 0.2, -2.6);
  // roof pergola
  for (let i = 0; i < 7; i++) house.add(box(0.08, 0.08, 3.4, bronze, -2.4 + i * 0.52, l2y + 3.4, 0.1, false));
  house.add(box(4.85, 0.08, 0.08, bronze, 0.16, l2y + 3.4, -1.55, false));
  house.add(box(4.85, 0.08, 0.08, bronze, 0.16, l2y + 3.4, 1.75, false));

  // roof deck greenery
  for (let i = 0; i < 4; i++) plant(house, -1.6 + i * 1.2, l2y + 0.2, 1.1, 0.8);

  // sculptural vertical screen
  for (let i = 0; i < 9; i++) house.add(box(0.08, 2.8, 0.4, bronze, -8.3, l1y + 1.55, -4.15 + i * 0.95, false));

  root.add(house);

  // helipad and helicopter
  helipad(root, 12.4, 3.0, 0xd8b274, 3.4);
  const heli = buildHelicopter(0.82, 0xd8b274);
  heli.position.set(12.4, 0.2, 3.0);
  heli.rotation.y = 1.28;
  root.add(heli);
  anim.rotors.push(heli.userData.rotor, heli.userData.tailRotor);

  // car
  const car = buildCar({ color: 0xe9e3d6, length: 4.25, width: 1.78, height: 0.62, cabinH: 0.62, kind: 'luxury' });
  car.position.set(-8.5, 0.11, 8.8);
  car.rotation.y = -0.28;
  root.add(car);

  // sculptural outdoor fireplace
  root.add(box(2.4, 0.3, 1.6, stoneDeck, -4.0, 0.26, 10.1, false));
  const fire = new THREE.PointLight(0xff8d43, 3.0, 7, 2);
  fire.position.set(-4.0, 0.9, 10.1);
  root.add(fire);
  anim.lights.push({ light: fire, phase: 0 });

  // people
  const spots = [
    [4.1, 0.2, 4.7, -0.35, 'Aurelia'],
    [1.0, 0.2, 3.4, -0.15, 'Julian'],
    [-2.0, 4.35, 2.0, -0.2, 'Celine'],
    [3.2, 0.2, 9.0, 0.65, 'Felix'],
  ];
  spots.forEach(([x, y, z, ry, name], i) => {
    const memberIndex = family.members.findIndex((m) => m.name === name);
    if (memberIndex < 0) return;
    const p = buildPerson(family.members[memberIndex], memberIndex, family.accent);
    p.position.set(x, y, z);
    p.rotation.y = ry;
    root.add(p);
    anim.people.push(p);
    anim.rings.push(p.userData.ring);
  });
}

function rugUnderBed(parent, x, y, z, w, d, color) {
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(w, d), std(color, 1));
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(x, y + 0.02, z);
  parent.add(rug);
}

function buildRichHouse(root, family, palette, anim) {
  const wall = std(palette.wall, 0.86);
  const wallAlt = std(palette.wallAlt, 0.8);
  const wood = std(0x8b5f3e, 0.8);
  const dark = std(0x302c28, 0.7, 0.1);
  const stoneDeck = std(palette.stone, 0.88);
  const floorMat = std(0xcbb18e, 0.76);

  const house = new THREE.Group();
  house.position.set(-0.5, 0, -1.4);

  const pool = buildPool(root, 6.4, 0.17, 7.6, 6.3, 3.6, stoneDeck, 0x2f8f8d);
  anim.ripples.push(...pool.ripples);
  addLounge(root, 8.9, 0.2, 9.6, Math.PI / 2 + 0.1);
  addUmbrella(root, 9.2, 0.2, 8.2, 0xe7d6bd);

  // base
  house.add(box(14.7, 0.3, 9.4, stoneDeck, 0, 0.15, 0, false));
  house.add(box(13.7, 0.18, 8.4, floorMat, 0, 0.37, 0, false));

  // ground floor
  const l0y = 0.37;
  house.add(box(13.6, 2.9, 0.25, wall, 0, l0y + 1.45, -4.1, false));
  house.add(box(0.25, 2.9, 8.3, wall, -6.68, l0y + 1.45, 0, false));
  house.add(box(0.25, 2.9, 8.3, wallAlt, 6.68, l0y + 1.45, 0, false));
  house.add(box(14.0, 0.2, 8.7, wall, 0, l0y + 2.9, 0, false));
  [-6.68, -2.0, 3.1, 6.68].forEach((x) => house.add(box(0.2, 2.8, 0.2, dark, x, l0y + 1.42, 4.15, false)));
  addWindow(house, 3.7, 2.3, -3.8, l0y + 1.42, 4.17, 0xa8cccb, 0x4b3b2f);
  addWindow(house, 2.0, 2.3, 4.8, l0y + 1.42, 4.17, 0xa8cccb, 0x4b3b2f);
  // cedar slat screen
  for (let i = 0; i < 15; i++) house.add(box(0.055, 2.7, 0.36, wood, 0.4 + i * 0.16, l0y + 1.45, 4.3, false));
  // interior
  sofa(house, 1.6, l0y + 0.16, -2.9, 0xc9b49a, 2.7, 0);
  coffeeTable(house, 1.6, l0y + 0.16, -1.4, 0x5d4632);
  frameArt(house, abstractArt(['#292d2b', '#c38a66', '#e6c185', '#ddcbb3'], 11), 2.1, 1.25, 1.6, l0y + 1.62, -3.94);
  rugUnderBed(house, 1.6, l0y + 0.2, -1.45, 4.2, 2.8, 0xa99478);
  diningSet(house, -4.5, l0y + 0.16, -1.2, 0x71543b, 5);
  plant(house, 5.8, l0y + 0.16, -3.4, 1.1);
  lamp(house, -6.0, l0y + 0.16, -3.4);

  // upper floor
  const l1y = 3.75;
  house.add(box(9.9, 0.2, 7.5, wallAlt, 3.0, l1y, -0.4, false));
  house.add(box(9.5, 0.16, 7.1, floorMat, 3.0, l1y + 0.14, -0.4, false));
  house.add(box(9.6, 2.55, 0.24, wall, 3.0, l1y + 1.4, -3.95, false));
  house.add(box(0.24, 2.55, 7.1, wall, -1.8, l1y + 1.4, -0.4, false));
  house.add(box(0.24, 2.55, 7.1, wallAlt, 7.8, l1y + 1.4, -0.4, false));
  house.add(box(10.1, 0.22, 7.7, wall, 3.0, l1y + 2.68, -0.4, false));
  addWindow(house, 4.4, 1.9, 2.0, l1y + 1.3, 3.34, 0xa8cccb, 0x4b3b2f);
  addWindow(house, 1.9, 1.9, 6.1, l1y + 1.3, 3.34, 0xa8cccb, 0x4b3b2f);
  // studio desk
  house.add(box(2.3, 0.09, 1.0, wood, 3.8, l1y + 0.79, -2.5));
  [-1.25, 0.75].forEach((x) => house.add(box(0.07, 0.7, 0.07, dark, 3.8 + x, l1y + 0.42, -2.5, false)));
  house.add(box(0.55, 0.38, 0.04, std(0x101618, 0.3, 0.2), 3.8, l1y + 1.0, -3.85, false));
  // bedroom
  bed(house, 5.8, l1y + 0.18, -1.7, 2.4, 0x715a44, 0xf4eadb);
  rugUnderBed(house, 5.8, l1y + 0.2, -0.65, 3.4, 1.7, 0xa58f76);
  // terrace off the upper floor
  house.add(box(4.2, 0.16, 6.9, stoneDeck, -4.0, l1y + 0.12, -0.4, false));
  addRailing(house, -6.1, l1y + 0.2, -0.4, 6.7, Math.PI / 2, 0x4d4237);
  addRailing(house, -4.0, l1y + 0.2, 3.0, 4.0, 0, 0x4d4237);
  addLounge(house, -4.1, l1y + 0.22, 0.8, Math.PI / 2, 0xd9c7ab);
  for (let i = 0; i < 5; i++) plant(house, -5.6 + i * 0.7, l1y + 0.2, 2.5, 0.55);

  // roof garden
  for (let i = 0; i < 4; i++) plant(house, 0.7 + i * 1.2, l1y + 2.8, -0.4, 0.75);

  root.add(house);

  // car
  const car = buildCar({ color: 0x27313b, length: 4.35, width: 1.82, height: 0.78, cabinH: 0.8, kind: 'suv' });
  car.position.set(-7.8, 0.11, 8.9);
  car.rotation.y = 0.32;
  root.add(car);

  // compact helicopter pad
  helipad(root, 11.0, 2.1, 0xcf8f74, 2.5);
  const heli = buildHelicopter(0.56, 0xcf8f74);
  heli.position.set(11.0, 0.15, 2.1);
  heli.rotation.y = -1.35;
  root.add(heli);
  anim.rotors.push(heli.userData.rotor, heli.userData.tailRotor);

  // hammock / garden chairs
  addLounge(root, -7.2, 0.2, 10.0, 0.4, 0xcab79a);

  // people
  const spots = [
    [4.8, 0.2, 5.15, -0.35, 'Naomi'],
    [7.0, 0.2, 5.7, -0.2, 'Marcus'],
    [9.1, 0.2, 8.55, 0.55, 'Ivy'],
    [-3.0, 0.2, 4.9, 0.1, 'Leo'],
  ];
  spots.forEach(([x, y, z, ry, name]) => {
    const memberIndex = family.members.findIndex((m) => m.name === name);
    if (memberIndex < 0) return;
    const p = buildPerson(family.members[memberIndex], memberIndex, family.accent);
    p.position.set(x, y, z);
    p.rotation.y = ry;
    root.add(p);
    anim.people.push(p);
    anim.rings.push(p.userData.ring);
  });
}

function buildAverageHouse(root, family, palette, anim) {
  const wall = std(0xd8cbb0, 0.94);
  const wallAlt = std(0xc8b795, 0.94);
  const trim = std(0xf0e8d8, 0.9);
  const roof = std(0x5b4a3e, 0.9);
  const wood = std(0x816345, 0.9);
  const floorMat = std(0xb99d77, 0.88);
  const house = new THREE.Group();
  house.position.set(0, 0, -1.4);

  // small foundation
  house.add(box(9.7, 0.3, 7.4, std(0xc2b298, 0.94), 0, 0.15, 0, false));
  house.add(box(9.3, 0.18, 7.0, floorMat, 0, 0.36, 0, false));

  const floorY = 0.36;
  // walls
  house.add(box(9.3, 2.8, 0.2, wall, 0, floorY + 1.4, -3.42, false));
  house.add(box(0.22, 2.8, 6.9, wallAlt, -4.55, floorY + 1.4, 0, false));
  house.add(box(0.22, 2.8, 6.9, wallAlt, 4.55, floorY + 1.4, 0, false));
  // gable roof
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-5.25, 0);
  roofShape.lineTo(5.25, 0);
  roofShape.lineTo(0, 2.35);
  roofShape.closePath();
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: 7.8, bevelEnabled: false });
  const roofMesh = new THREE.Mesh(roofGeo, roof);
  roofMesh.position.set(0, floorY + 2.72, -3.9);
  roofMesh.castShadow = true;
  roofMesh.receiveShadow = true;
  house.add(roofMesh);
  // roof trim
  const trimL = box(5.7, 0.12, 0.15, trim, -2.55, floorY + 3.86, 3.9, false);
  trimL.rotation.z = -0.418;
  house.add(trimL);
  const trimR = box(5.7, 0.12, 0.15, trim, 2.55, floorY + 3.86, 3.9, false);
  trimR.rotation.z = 0.418;
  house.add(trimR);
  // chimney
  house.add(box(0.6, 1.6, 0.6, std(0x9b8168, 0.9), 2.8, floorY + 3.85, -2.3));
  // windows and door
  addWindow(house, 1.5, 1.25, -2.8, floorY + 1.5, 3.44, 0x9dbfc1, 0xf0e8d8);
  addWindow(house, 1.5, 1.25, 2.8, floorY + 1.5, 3.44, 0x9dbfc1, 0xf0e8d8);
  house.add(box(1.05, 2.1, 0.12, std(0x496a72, 0.8), 0, floorY + 1.06, 3.5, false));
  house.add(box(1.22, 0.12, 0.18, trim, 0, floorY + 2.16, 3.51, false));
  house.add(sph(0.05, std(0xc9a153, 0.4, 0.7), 0.36, floorY + 1.0, 3.59, 8));
  // porch
  house.add(box(9.7, 0.17, 2.2, std(0xb49a75, 0.9), 0, 0.22, 4.55, false));
  [-4.4, 4.4].forEach((x) => {
    house.add(cyl(0.1, 0.12, 2.5, 8, trim, x, 1.45, 5.15, false));
    house.add(box(0.32, 0.12, 0.32, trim, x, 2.72, 5.15, false));
  });
  const porchRoof = box(10.0, 0.18, 2.5, roof, 0, 2.83, 4.63, false);
  porchRoof.rotation.x = 0.07;
  house.add(porchRoof);
  // steps
  for (let i = 0; i < 3; i++) house.add(box(2.2, 0.14, 0.6, std(0xb3a189, 0.9), 0, 0.12 + i * 0.12, 5.8 + i * 0.42, false));
  // porch swing
  house.add(box(1.4, 0.1, 0.5, wood, -2.6, 1.18, 5.45));
  [-0.55, 0.55].forEach((x) => house.add(cyl(0.018, 0.018, 1.2, 6, std(0x5a4d3e, 0.5, 0.4), -2.6 + x, 1.65, 5.4, false)));

  // interior living
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(4.1, 2.8), new THREE.MeshBasicMaterial({ map: rugTexture('#8e6d58', '#d9c3a4'), toneMapped: true }));
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(1.2, floorY + 0.2, -1.1);
  house.add(rug);
  sofa(house, 1.2, floorY + 0.17, -2.7, 0x6e7d70, 2.5, 0);
  coffeeTable(house, 1.2, floorY + 0.17, -1.2, 0x6f5039);
  // TV on back wall
  house.add(box(2.2, 1.2, 0.08, std(0x151b1d, 0.3, 0.3), 1.2, floorY + 1.7, -3.3, false));
  frameArt(house, abstractArt(['#4c5a50', '#d3a36d', '#947662', '#f0dfc1'], 4), 0.9, 0.7, -2.8, floorY + 1.85, -3.3);
  // kitchen right
  house.add(box(3.2, 0.95, 0.62, std(0xcfc6b4, 0.8), 3.0, floorY + 0.55, -3.04, false));
  house.add(box(3.2, 0.09, 0.75, std(0x655446, 0.6), 3.0, floorY + 1.06, -3.0, false));
  house.add(box(0.58, 2.0, 0.58, std(0xcfc6b4, 0.8), 4.0, floorY + 1.15, -3.04, false));
  // dining left
  diningSet(house, -3.0, floorY + 0.17, -1.45, 0x76553a, 4);
  // family photos on wall
  for (let i = 0; i < 4; i++) {
    house.add(box(0.45 + (i % 2) * 0.14, 0.38, 0.04, std(0xe6dcc9, 0.8), -3.9 + i * 0.5, floorY + 1.75 + (i % 2) * 0.12, -3.3, false));
  }
  lamp(house, -4.05, floorY + 0.17, -2.4);
  plant(house, 4.1, floorY + 0.17, 1.1, 0.85);

  // little hallway wall / bedrooms hints
  house.add(box(0.18, 2.2, 3.5, wallAlt, -0.6, floorY + 1.3, -1.8, false));
  house.add(box(1.0, 0.1, 3.3, wallAlt, -3.1, floorY + 2.5, -1.7, false));
  // bed visible at left rear
  bed(house, -3.2, floorY + 0.17, -2.2, 1.75, 0x7b5c44, 0xe9ddc4);

  root.add(house);

  // white picket fence
  const picketMat = std(0xe8e0cf, 0.9);
  for (let i = 0; i < 17; i++) {
    const x = -8.2 + i * 1.025;
    if (x > -1.1 && x < 1.1) continue;
    root.add(box(0.07, 0.78, 0.07, picketMat, x, 0.42, 9.9, false));
  }
  root.add(box(17.3, 0.06, 0.06, picketMat, 0, 0.6, 9.9, false));
  root.add(box(17.3, 0.06, 0.06, picketMat, 0, 0.28, 9.9, false));
  // mailbox
  root.add(cyl(0.035, 0.045, 1.15, 6, std(0x5a4a3a, 0.8), 2.2, 0.62, 11.0));
  root.add(rbox(0.55, 0.3, 0.32, 0.05, std(0x3f5b63, 0.8), 2.2, 1.22, 11.0));
  // bikes
  [[-6.2, 7.3], [-5.4, 7.15]].forEach(([x, z], i) => {
    const g = new THREE.Group();
    const wheelMat = std(0x222426, 0.6);
    [-0.42, 0.42].forEach((ox) => {
      const w = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.028, 6, 16), wheelMat);
      w.position.set(ox, 0.26, 0);
      w.rotation.y = Math.PI / 2;
      g.add(w);
    });
    g.add(box(0.05, 0.05, 0.85, std(i ? 0x8e4b4b : 0x486a75, 0.6, 0.2), 0, 0.48, 0));
    g.add(box(0.05, 0.35, 0.05, std(0x2c3032, 0.6), -0.4, 0.35, 0));
    g.position.set(x, 0, z);
    g.rotation.y = 0.2;
    root.add(g);
  });

  // garden beds
  flowerBed(root, 5.8, 0.04, 7.1, 3.2, 0xa85f58);
  flowerBed(root, -6.8, 0.04, 5.4, 2.2, 0xd2a04e);
  // vegetable patch
  root.add(rbox(3.1, 0.18, 1.7, 0.05, std(0x5d4936, 1), 6.4, 0.08, 10.4));
  for (let i = 0; i < 8; i++) root.add(sph(0.1, std(i % 2 ? 0x4b6b43 : 0x72905b, 0.9), 5.2 + (i % 4) * 0.8, 0.26, 9.9 + Math.floor(i / 4) * 0.8, 6));

  // car
  const car = buildCar({ color: 0xaeb5b2, length: 3.45, width: 1.54, height: 0.56, cabinH: 0.62, kind: 'compact' });
  car.position.set(-7.0, 0.11, 8.4);
  car.rotation.y = 0.18;
  car.scale.setScalar(0.92);
  root.add(car);

  // basketball hoop, tucked into the side yard
  root.add(cyl(0.055, 0.065, 2.6, 8, std(0x515a5c, 0.5, 0.3), 8.0, 1.3, 7.9));
  root.add(box(0.05, 0.7, 1.1, std(0xd9d3c7, 0.9), 7.85, 2.55, 7.9, false));
  const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.035, 6, 12), std(0xb46239, 0.6, 0.4));
  hoop.rotation.x = Math.PI / 2;
  hoop.position.set(7.7, 2.1, 7.9);
  root.add(hoop);

  // people
  const spots = [
    [-1.7, 0.4, 4.35, -0.2, 'Elena'],
    [1.1, 0.4, 4.5, 0.1, 'Theo'],
    [-2.6, 0.4, 5.2, 0.5, 'Maya'],
    [1.9, 0.4, 5.4, -0.3, 'Sam'],
  ];
  spots.forEach(([x, y, z, ry, name]) => {
    const memberIndex = family.members.findIndex((m) => m.name === name);
    if (memberIndex < 0) return;
    const p = buildPerson(family.members[memberIndex], memberIndex, family.accent);
    p.position.set(x, y, z);
    p.rotation.y = ry;
    root.add(p);
    anim.people.push(p);
    anim.rings.push(p.userData.ring);
  });
}

export function buildEstate(family, env) {
  return createEstateBase(family, env);
}

export function updateEstate(anim, time, dt) {
  if (!anim) return;
  anim.people?.forEach((p, i) => {
    const phase = p.userData.phase;
    p.userData.person.position.y = Math.sin(time * 1.25 + phase) * 0.012;
    p.userData.person.rotation.z = Math.sin(time * 0.8 + phase) * 0.008;
    p.userData.arms.forEach(({ pivot, side, base }, ai) => {
      pivot.rotation.z = base + Math.sin(time * 1.05 + phase + ai) * 0.035;
      pivot.rotation.x = Math.sin(time * 0.7 + phase + ai * 2) * 0.02;
    });
    p.userData.ring.material.opacity = 0.28 + Math.sin(time * 1.8 + phase) * 0.09;
    p.userData.ring.scale.setScalar(1 + Math.sin(time * 1.4 + i) * 0.05);
  });
  anim.rings?.forEach((r) => {
    if (!r?.material) return;
  });
  anim.rotors?.forEach((rotor, i) => {
    if (i % 2 === 0) rotor.rotation.y += dt * 8.5;
    else rotor.rotation.z += dt * 14;
  });
  anim.sway?.forEach(({ object, phase, amp }) => {
    object.rotation.z = Math.sin(time * 0.7 + phase) * amp;
    object.rotation.x = Math.cos(time * 0.52 + phase) * amp * 0.6;
  });
  anim.ripples?.forEach(({ mesh, phase, max }) => {
    const t = ((time * 0.21 + phase) % 1);
    mesh.scale.setScalar(1 + t * max * 4.5);
    mesh.material.opacity = 0.23 * (1 - t);
  });
  if (anim.motes) {
    anim.motes.rotation.y = time * 0.018;
    anim.motes.position.y = Math.sin(time * 0.34) * 0.16;
  }
  anim.lights?.forEach(({ light, phase }) => {
    light.intensity = 2.2 + Math.sin(time * 8 + phase) * 0.45 + Math.sin(time * 13.7) * 0.2;
  });
}

export function disposeObject(obj) {
  obj.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((m) => {
        if (m.map) m.map.dispose();
        m.dispose();
      });
    }
  });
}
