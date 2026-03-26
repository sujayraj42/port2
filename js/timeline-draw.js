/**
 * @module timeline-draw
 * Scroll-driven timeline line draw + node activation.
 * Falls back to IntersectionObserver if SDA is not supported.
 */
import { $, $$, prefersReducedMotion } from './utils.js';

/**
 * @param {string} selector - Timeline line element
 */
export function initTimeline(selector) {
  if (prefersReducedMotion()) return;

  const line = $(selector);
  if (!line) return;

  // If SDA is natively supported, CSS handles it
  if (CSS.supports('animation-timeline', 'scroll()')) return;

  // Fallback: JS-driven scaleY on scroll
  const wrapper = line.closest('.timeline-wrapper');
  if (!wrapper) return;

  function update() {
    const rect = wrapper.getBoundingClientRect();
    const windowH = window.innerHeight;
    const start = rect.top;
    const end = rect.bottom;
    const progress = Math.max(0, Math.min(1,
      (windowH - start) / (end - start + windowH * 0.5)
    ));
    line.style.transform = `scaleY(${progress})`;
    line.style.transformOrigin = 'top center';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();

  return {
    destroy: () => window.removeEventListener('scroll', update)
  };
}
