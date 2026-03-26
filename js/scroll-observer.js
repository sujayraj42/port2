/**
 * @module scroll-observer
 * IntersectionObserver orchestrator for elements without SDA support.
 * Falls back from Scroll-Driven Animations for browsers that need it.
 */
import { $$, prefersReducedMotion } from './utils.js';

export function initObserver() {
  if (prefersReducedMotion()) return;

  // Always use IntersectionObserver for smooth transitions instead of scroll-scrubbed animations
  const revealElements = $$('[data-reveal], [data-reveal-left], [data-reveal-right], .section-heading');  if (revealElements.length === 0) return;

  // Set initial hidden state
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.filter = 'blur(4px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0)';
        el.style.filter = 'blur(0)';
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '10% 0px 0px 0px',
  });

  revealElements.forEach(el => observer.observe(el));

  return { destroy: () => observer.disconnect() };
}
