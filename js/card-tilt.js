/**
 * @module card-tilt
 * 3D multi-layer card tilt effect on mouse.
 * Uses perspective(1000px) with 3 internal parallax layers.
 */
import { $$, isTouchDevice, prefersReducedMotion } from './utils.js';

/**
 * @param {string} selector - Elements with data-tilt attribute
 */
export function initCardTilt(selector) {
  if (isTouchDevice() || prefersReducedMotion()) return;

  const cards = $$(selector);
  if (cards.length === 0) return;

  const maxTilt = 8; // degrees
  const perspective = 1000;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;  // 0..1
      const y = (e.clientY - rect.top) / rect.height;   // 0..1

      const tiltX = (0.5 - y) * maxTilt;  // Up/down
      const tiltY = (x - 0.5) * maxTilt;  // Left/right

      card.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      // Internal parallax layers
      const visual = card.querySelector('.card-visual');
      const body = card.querySelector('.card-body');
      if (visual) visual.style.transform = `translateX(${tiltY * 2}px) translateY(${-tiltX * 2}px)`;
      if (body) body.style.transform = `translateX(${tiltY * 1}px) translateY(${-tiltX * 1}px)`;
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';

      const visual = card.querySelector('.card-visual');
      const body = card.querySelector('.card-body');
      if (visual) { visual.style.transition = 'transform 0.5s ease'; visual.style.transform = ''; }
      if (body) { body.style.transition = 'transform 0.5s ease'; body.style.transform = ''; }

      setTimeout(() => { card.style.transition = ''; }, 500);
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = '';
    });
  });
}
