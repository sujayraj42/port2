/**
 * @module cursor
 * Three-layer custom cursor system for desktop.
 * v3: Uses GSAP quickTo for GPU-accelerated, batched transforms.
 * Single rAF instead of continuous loop — huge perf improvement.
 */
import { $, $$, isTouchDevice, prefersReducedMotion } from './utils.js';

export function initCursor() {
  if (isTouchDevice() || prefersReducedMotion()) return;

  const dot  = $('#cursor-dot');
  const ring = $('#cursor-ring');
  const halo = $('#cursor-halo');
  if (!dot || !ring || !halo) return;

  // Check if GSAP is available for optimized cursor
  if (window.gsap) {
    // GSAP quickTo — GPU-accelerated, auto-batched, zero-lag
    const dotX = gsap.quickTo(dot,  '--cx', { duration: 0.05, ease: 'none' });
    const dotY = gsap.quickTo(dot,  '--cy', { duration: 0.05, ease: 'none' });
    const ringX = gsap.quickTo(ring, '--cx', { duration: 0.25, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, '--cy', { duration: 0.25, ease: 'power3.out' });
    const haloX = gsap.quickTo(halo, '--cx', { duration: 0.4, ease: 'power2.out' });
    const haloY = gsap.quickTo(halo, '--cy', { duration: 0.4, ease: 'power2.out' });

    function onMouseMove(e) {
      const px = e.clientX + 'px';
      const py = e.clientY + 'px';
      dotX(px);
      dotY(py);
      ringX(px);
      ringY(py);
      haloX(px);
      haloY(py);
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true });

    // Hover states
    const hoverElements = $$('[data-hover-cursor], a, button');
    const inputElements = $$('input, textarea, select');

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
    });

    inputElements.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('cursor-input'));
      el.addEventListener('mouseleave', () => ring.classList.remove('cursor-input'));
    });

    // Click pulse
    document.addEventListener('mousedown', () => dot.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => dot.classList.remove('cursor-click'));

    return {
      destroy: () => {
        document.removeEventListener('mousemove', onMouseMove);
      }
    };
  }

  // ── Fallback: lightweight manual approach (no continuous rAF loop) ──
  let targetX = -100, targetY = -100;
  let ringX = -100, ringY = -100;
  let haloX = -100, haloY = -100;
  let needsUpdate = false;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function update() {
    ringX = lerp(ringX, targetX, 0.12);
    ringY = lerp(ringY, targetY, 0.12);
    ring.style.setProperty('--cx', ringX + 'px');
    ring.style.setProperty('--cy', ringY + 'px');

    haloX = lerp(haloX, targetX, 0.07);
    haloY = lerp(haloY, targetY, 0.07);
    halo.style.setProperty('--cx', haloX + 'px');
    halo.style.setProperty('--cy', haloY + 'px');

    // Only continue if still tracking
    if (Math.abs(ringX - targetX) > 0.5 || Math.abs(ringY - targetY) > 0.5 ||
        Math.abs(haloX - targetX) > 0.5 || Math.abs(haloY - targetY) > 0.5) {
      requestAnimationFrame(update);
    } else {
      needsUpdate = false;
    }
  }

  function onMouseMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.setProperty('--cx', targetX + 'px');
    dot.style.setProperty('--cy', targetY + 'px');

    if (!needsUpdate) {
      needsUpdate = true;
      requestAnimationFrame(update);
    }
  }

  // Hover states
  const hoverElements = $$('[data-hover-cursor], a, button');
  const inputElements = $$('input, textarea, select');

  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
  });

  inputElements.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('cursor-input'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cursor-input'));
  });

  // Click pulse
  document.addEventListener('mousedown', () => dot.classList.add('cursor-click'));
  document.addEventListener('mouseup', () => dot.classList.remove('cursor-click'));

  document.addEventListener('mousemove', onMouseMove, { passive: true });

  return {
    destroy: () => {
      document.removeEventListener('mousemove', onMouseMove);
    }
  };
}
