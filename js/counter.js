/**
 * @module counter
 * Odometer-style counter animation triggered by IntersectionObserver.
 * HTML: <span data-count-to="500" data-count-suffix="+">0</span>
 */
import { $$, prefersReducedMotion, easeOutCubic } from './utils.js';

/**
 * @param {string} selector - Elements with data-count-to attribute
 */
export function initCounter(selector) {
  const elements = $$(selector);
  if (elements.length === 0) return;

  if (prefersReducedMotion()) {
    elements.forEach(el => {
      const target = parseInt(el.dataset.countTo, 10) || 0;
      const suffix = el.dataset.countSuffix || '';
      el.textContent = target.toLocaleString() + suffix;
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.countTo, 10) || 0;
    const suffix = el.dataset.countSuffix || '';
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  return { destroy: () => observer.disconnect() };
}
