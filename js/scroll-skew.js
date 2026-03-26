/**
 * @module scroll-skew
 * Velocity-driven content skew: content skews 1-2deg based on scroll speed.
 * v2: Uses passive scroll listener + rAF instead of continuous rAF loop.
 */
import { $, prefersReducedMotion, clamp } from './utils.js';

/**
 * @param {string} selector - Main content element
 */
export function initScrollSkew(selector) {
  if (prefersReducedMotion()) return;

  const main = $(selector);
  if (!main) return;

  let lastScroll = window.scrollY;
  let currentSkew = 0;
  let raf = null;
  let ticking = false;

  function update() {
    const scroll = window.scrollY;
    const delta = scroll - lastScroll;
    lastScroll = scroll;

    const targetSkew = clamp(delta * 0.05, -2, 2);
    currentSkew += (targetSkew - currentSkew) * 0.1;

    if (Math.abs(currentSkew) > 0.01) {
      main.style.transform = `skewY(${currentSkew}deg)`;
      // Continue decaying until skew returns to 0
      raf = requestAnimationFrame(update);
    } else {
      main.style.transform = '';
      ticking = false;
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      raf = requestAnimationFrame(update);
    }
  }, { passive: true });

  return {
    destroy: () => {
      if (raf) cancelAnimationFrame(raf);
      main.style.transform = '';
    }
  };
}
