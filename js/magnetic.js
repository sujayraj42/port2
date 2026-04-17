/**
 * @module magnetic
 * Magnetic button effect — buttons follow cursor on desktop.
 * v3: Uses GSAP for GPU-accelerated magnetic pull.
 */
import { $$, isTouchDevice, prefersReducedMotion } from './utils.js';

/**
 * @param {string} selector - Elements with data-magnetic attribute
 */
export function initMagnetic(selector) {
  if (isTouchDevice() || prefersReducedMotion()) return;

  const elements = $$(selector);
  if (elements.length === 0) return;

  const strength = 0.3;
  const hasGSAP = !!window.gsap;

  elements.forEach(el => {
    let raf = null;

    el.addEventListener('mousemove', e => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;

        if (hasGSAP) {
          gsap.to(el, { x: dx, y: dy, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
        } else {
          el.style.transform = `translate(${dx}px, ${dy}px)`;
        }
        raf = null;
      });
    }, { passive: true });

    el.addEventListener('mouseleave', () => {
      if (hasGSAP) {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
      } else {
        el.animate(
          [
            { transform: el.style.transform },
            { transform: 'translate(0, 0)' }
          ],
          { duration: 500, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' }
        );
      }
    });
  });
}
