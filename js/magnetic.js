/**
 * @module magnetic
 * Magnetic button effect — buttons follow cursor on desktop.
 */
import { $$, isTouchDevice, prefersReducedMotion, lerp } from './utils.js';

/**
 * @param {string} selector - Elements with data-magnetic attribute
 */
export function initMagnetic(selector) {
  if (isTouchDevice() || prefersReducedMotion()) return;

  const elements = $$(selector);
  if (elements.length === 0) return;

  const strength = 0.3;
  const resetDuration = 500;

  elements.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    }, { passive: true });

    el.addEventListener('mouseleave', () => {
      el.animate(
        [
          { transform: el.style.transform },
          { transform: 'translate(0, 0)' }
        ],
        { duration: resetDuration, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' }
      );
    });
  });
}
