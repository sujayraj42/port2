/**
 * @module cursor
 * Three-layer custom cursor system for desktop.
 * Dot (instant) → Ring (lerp 0.10) → Halo (lerp 0.06)
 */
import { $, $$, isTouchDevice, prefersReducedMotion, lerp } from './utils.js';

export function initCursor() {
  if (isTouchDevice() || prefersReducedMotion()) return;

  const dot  = $('#cursor-dot');
  const ring = $('#cursor-ring');
  const halo = $('#cursor-halo');
  if (!dot || !ring || !halo) return;

  let targetX = -100, targetY = -100;
  let ringX = -100, ringY = -100;
  let haloX = -100, haloY = -100;
  let raf = null;

  function onMouseMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    // Dot follows instantly
    dot.style.setProperty('--cx', targetX + 'px');
    dot.style.setProperty('--cy', targetY + 'px');
  }

  function loop() {
    // Ring lerp
    ringX = lerp(ringX, targetX, 0.10);
    ringY = lerp(ringY, targetY, 0.10);
    ring.style.setProperty('--cx', ringX + 'px');
    ring.style.setProperty('--cy', ringY + 'px');

    // Halo lerp
    haloX = lerp(haloX, targetX, 0.06);
    haloY = lerp(haloY, targetY, 0.06);
    halo.style.setProperty('--cx', haloX + 'px');
    halo.style.setProperty('--cy', haloY + 'px');

    raf = requestAnimationFrame(loop);
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
  loop();

  return {
    destroy: () => {
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };
}
