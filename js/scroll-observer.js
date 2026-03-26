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
    el.style.transform = 'translateY(24px)'; // Less vertical offset
    el.style.transition = 'opacity 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0)';
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0, // Trigger immediately when entering bounds
    rootMargin: '0px 0px 15% 0px', // Trigger 15% before scrolling into view!
  });

  revealElements.forEach(el => observer.observe(el));

  return { destroy: () => observer.disconnect() };
}
