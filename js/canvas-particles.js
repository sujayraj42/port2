/**
 * @module canvas-particles
 * Initializes particle canvas — tries OffscreenCanvas+Worker first, falls back to main thread.
 * v2: Reduced particle count, spatial grid for O(n) connection checks, visibility-gated loop.
 */
import { $, debounce, rand, dist } from './utils.js';

const PARTICLE_COUNT = 60;
const CONNECT_DIST = 130;
const REPEL_RADIUS = 100;
const REPEL_STRENGTH = 0.8;
const BASE_SPEED = 0.35;
const COLORS = ['rgba(200,146,58,0.6)','rgba(184,115,51,0.5)','rgba(218,169,90,0.4)'];

/**
 * @param {string} selector - Canvas element selector
 * @param {object} features - Feature flags from main.js
 */
export async function initCanvas(selector, features) {
  const canvas = $(selector);
  if (!canvas) return;

  const rect = canvas.parentElement?.getBoundingClientRect() ?? { width: window.innerWidth, height: window.innerHeight };
  const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR at 2 for performance

  // Try OffscreenCanvas + Worker
  if (features?.offscreenCanvas) {
    try {
      const offscreen = canvas.transferControlToOffscreen();
      const worker = new Worker('./js/particle-worker.js');

      worker.postMessage({
        type: 'init',
        canvas: offscreen,
        width: rect.width,
        height: rect.height,
        dpr,
      }, [offscreen]);

      // Mouse tracking — throttled
      let mouseRaf = null;
      canvas.parentElement?.addEventListener('mousemove', e => {
        if (mouseRaf) return;
        mouseRaf = requestAnimationFrame(() => {
          const r = canvas.parentElement.getBoundingClientRect();
          worker.postMessage({ type: 'mouse', x: e.clientX - r.left, y: e.clientY - r.top });
          mouseRaf = null;
        });
      }, { passive: true });

      // Resize — debounced
      window.addEventListener('resize', debounce(() => {
        const r = canvas.parentElement?.getBoundingClientRect();
        if (r) worker.postMessage({ type: 'resize', width: r.width, height: r.height });
      }, 200));

      // Page visibility
      document.addEventListener('visibilitychange', () => {
        worker.postMessage({ type: document.hidden ? 'pause' : 'resume' });
      });

      return { destroy: () => worker.terminate() };
    } catch (e) {
      console.warn('OffscreenCanvas failed, falling back to main thread:', e);
    }
  }

  // ── Main Thread Fallback ──
  const ctx = canvas.getContext('2d');
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';

  let w = rect.width, h = rect.height;
  let mouseX = -1000, mouseY = -1000;
  let paused = false;
  let raf = null;

  const particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const vx = (Math.random() - 0.5) * BASE_SPEED;
    const vy = (Math.random() - 0.5) * BASE_SPEED;
    particles.push({
      x: Math.random() * w, y: Math.random() * h,
      vx, vy, originalVx: vx, originalVy: vy,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
  }

  // Spatial grid for efficient neighbor lookup
  const CELL_SIZE = CONNECT_DIST;

  function getCellKey(x, y) {
    return `${Math.floor(x / CELL_SIZE)},${Math.floor(y / CELL_SIZE)}`;
  }

  function loop() {
    if (paused) return;
    ctx.clearRect(0, 0, w * dpr, h * dpr);
    ctx.save();
    ctx.scale(dpr, dpr);

    // Build spatial grid
    const grid = new Map();
    for (const p of particles) {
      const key = getCellKey(p.x, p.y);
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key).push(p);
    }

    // Update positions
    for (const p of particles) {
      const dx = p.x - mouseX, dy = p.y - mouseY;
      const d = Math.hypot(dx, dy);
      if (d < REPEL_RADIUS && d > 0) {
        const force = (REPEL_RADIUS - d) / REPEL_RADIUS * REPEL_STRENGTH;
        p.vx += (dx / d) * force;
        p.vy += (dy / d) * force;
      }
      p.vx += (p.originalVx - p.vx) * 0.02;
      p.vy += (p.originalVy - p.vy) * 0.02;
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;
    }

    // Draw connections using spatial grid (O(n) average instead of O(n²))
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
            const pairKey = p.x < n.x ? `${p.x},${n.x}` : `${n.x},${p.x}`;
            if (drawn.has(pairKey)) continue;
            const d = Math.hypot(p.x - n.x, p.y - n.y);
            if (d < CONNECT_DIST) {
              drawn.add(pairKey);
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

    // Draw particles
    for (const p of particles) {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.restore();
    raf = requestAnimationFrame(loop);
  }

  // Throttle mouse events
  let mouseRaf = null;
  canvas.parentElement?.addEventListener('mousemove', e => {
    if (mouseRaf) return;
    mouseRaf = requestAnimationFrame(() => {
      const r = canvas.parentElement.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
      mouseRaf = null;
    });
  }, { passive: true });

  window.addEventListener('resize', debounce(() => {
    const r = canvas.parentElement?.getBoundingClientRect();
    if (r) { w = r.width; h = r.height; canvas.width = w * dpr; canvas.height = h * dpr; }
  }, 200));

  // Only run when hero is visible
  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && paused) {
        paused = false;
        loop();
      } else if (!entry.isIntersecting && !paused) {
        paused = true;
        if (raf) cancelAnimationFrame(raf);
      }
    });
  }, { threshold: 0 });

  const heroSection = canvas.closest('section') || canvas.parentElement;
  if (heroSection) heroObserver.observe(heroSection);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      paused = true;
      if (raf) cancelAnimationFrame(raf);
    } else {
      paused = false;
      loop();
    }
  });

  loop();
  return { destroy: () => { paused = true; if (raf) cancelAnimationFrame(raf); heroObserver.disconnect(); } };
}
