/**
 * @module particle-worker
 * Runs particle system on Web Worker via OffscreenCanvas.
 * v2: Reduced particles, spatial grid, optimized draw calls.
 */

const PARTICLE_COUNT = 35;
const CONNECT_DIST = 100;
const REPEL_RADIUS = 80;
const REPEL_STRENGTH = 0.5;
const BASE_SPEED = 0.3;
const CELL_SIZE = CONNECT_DIST;

const COLORS = [
  'rgba(200,146,58,0.5)',
  'rgba(184,115,51,0.4)',
  'rgba(218,169,90,0.35)',
];

let ctx = null;
let width = 0;
let height = 0;
let dpr = 1;
let mouseX = -1000;
let mouseY = -1000;
let paused = false;
let particles = [];
let raf = null;

function createParticle() {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const radius = Math.random() * 2 + 1;
  const vx = (Math.random() - 0.5) * BASE_SPEED;
  const vy = (Math.random() - 0.5) * BASE_SPEED;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx, vy,
    originalVx: vx,
    originalVy: vy,
    radius,
    alpha: Math.random() * 0.5 + 0.3,
    color,
  };
}

function initParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(createParticle());
  }
}

function update() {
  for (const p of particles) {
    const dx = p.x - mouseX;
    const dy = p.y - mouseY;
    const dist = Math.hypot(dx, dy);
    if (dist < REPEL_RADIUS && dist > 0) {
      const force = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_STRENGTH;
      p.vx += (dx / dist) * force;
      p.vy += (dy / dist) * force;
    }

    p.vx += (p.originalVx - p.vx) * 0.02;
    p.vy += (p.originalVy - p.vy) * 0.02;
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -10) p.x = width + 10;
    if (p.x > width + 10) p.x = -10;
    if (p.y < -10) p.y = height + 10;
    if (p.y > height + 10) p.y = -10;
  }
}

function draw() {
  ctx.clearRect(0, 0, width * dpr, height * dpr);
  ctx.save();
  ctx.scale(dpr, dpr);

  // Build spatial grid
  const grid = new Map();
  for (const p of particles) {
    const key = `${Math.floor(p.x / CELL_SIZE)},${Math.floor(p.y / CELL_SIZE)}`;
    if (!grid.has(key)) grid.set(key, []);
    grid.get(key).push(p);
  }

  // Connection lines using spatial grid
  ctx.lineWidth = 0.5;
  const drawn = new Set();
  for (const p of particles) {
    const cx = Math.floor(p.x / CELL_SIZE);
    const cy = Math.floor(p.y / CELL_SIZE);
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const key = `${cx + dx},${cy + dy}`;
        const neighbors = grid.get(key);
        if (!neighbors) continue;
        for (const n of neighbors) {
          if (n === p) continue;
          const id = p.x < n.x ? `${p.x},${n.x}` : `${n.x},${p.x}`;
          if (drawn.has(id)) continue;
          const d = Math.hypot(p.x - n.x, p.y - n.y);
          if (d < CONNECT_DIST) {
            drawn.add(id);
            ctx.strokeStyle = `rgba(200,146,58,${(1 - d / CONNECT_DIST) * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
      }
    }
  }

  // Particles
  for (const p of particles) {
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  ctx.restore();
}

function loop() {
  if (paused) return;
  update();
  draw();
  raf = requestAnimationFrame(loop);
}

self.onmessage = ({ data }) => {
  switch (data.type) {
    case 'init':
      ctx = data.canvas.getContext('2d');
      width = data.width;
      height = data.height;
      dpr = Math.min(data.dpr || 1, 2);
      data.canvas.width = width * dpr;
      data.canvas.height = height * dpr;
      initParticles();
      loop();
      break;

    case 'mouse':
      mouseX = data.x;
      mouseY = data.y;
      break;

    case 'resize':
      width = data.width;
      height = data.height;
      if (ctx && ctx.canvas) {
        ctx.canvas.width = width * dpr;
        ctx.canvas.height = height * dpr;
      }
      break;

    case 'pause':
      paused = true;
      if (raf) cancelAnimationFrame(raf);
      break;

    case 'resume':
      paused = false;
      loop();
      break;
  }
};
