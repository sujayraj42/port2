/**
 * @module progress-bars
 * Liquid progress bar animation using WAAPI.
 * HTML: <div class="progress-fill" data-progress="92"></div>
 */
import { $$, prefersReducedMotion } from './utils.js';

/**
 * @param {string} selector - Elements with data-progress attribute
 */
export function initProgressBars(selector) {
  const elements = $$(selector);
  if (elements.length === 0) return;

  if (prefersReducedMotion()) {
    elements.forEach(el => {
      el.style.width = (el.dataset.progress || 0) + '%';
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBar(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));

  function animateBar(el) {
    const target = parseInt(el.dataset.progress, 10) || 0;

    el.animate(
      [
        { width: '0%' },
        { width: target + '%' }
      ],
      {
        duration: 800,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
      }
    );

    // Also animate the percentage text
    const pctEl = el.closest('.progress-item')?.querySelector('.progress-pct');
    if (pctEl) {
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / 800, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        pctEl.textContent = Math.round(eased * target) + '%';
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  }

  return { destroy: () => observer.disconnect() };
}
