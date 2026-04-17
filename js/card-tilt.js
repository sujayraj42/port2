/**
 * @module card-tilt
 * 3D multi-layer card tilt effect on mouse.
 * v3: Uses GSAP for GPU-accelerated transforms. No direct style mutation.
 */
import { $$, isTouchDevice, prefersReducedMotion } from './utils.js';

/**
 * @param {string} selector - Elements with data-tilt attribute
 */
export function initCardTilt(selector) {
  if (isTouchDevice() || prefersReducedMotion()) return;

  const cards = $$(selector);
  if (cards.length === 0) return;

  const maxTilt = 8;
  const perspective = 1000;
  const hasGSAP = !!window.gsap;

  cards.forEach(card => {
    let raf = null;

    card.addEventListener('mousemove', e => {
      if (raf) return; // Throttle to one update per frame
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (0.5 - y) * maxTilt;
        const tiltY = (x - 0.5) * maxTilt;

        if (hasGSAP) {
          gsap.to(card, {
            rotateX: tiltX,
            rotateY: tiltY,
            transformPerspective: perspective,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
          const visual = card.querySelector('.card-visual');
          const body = card.querySelector('.card-body');
          if (visual) gsap.to(visual, { x: tiltY * 2, y: -tiltX * 2, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
          if (body) gsap.to(body, { x: tiltY, y: -tiltX, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
        } else {
          card.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
          const visual = card.querySelector('.card-visual');
          const body = card.querySelector('.card-body');
          if (visual) visual.style.transform = `translateX(${tiltY * 2}px) translateY(${-tiltX * 2}px)`;
          if (body) body.style.transform = `translateX(${tiltY}px) translateY(${-tiltX}px)`;
        }
        raf = null;
      });
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      if (hasGSAP) {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' });
        const visual = card.querySelector('.card-visual');
        const body = card.querySelector('.card-body');
        if (visual) gsap.to(visual, { x: 0, y: 0, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
        if (body) gsap.to(body, { x: 0, y: 0, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
      } else {
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        const visual = card.querySelector('.card-visual');
        const body = card.querySelector('.card-body');
        if (visual) { visual.style.transition = 'transform 0.5s ease'; visual.style.transform = ''; }
        if (body) { body.style.transition = 'transform 0.5s ease'; body.style.transform = ''; }
        setTimeout(() => { card.style.transition = ''; }, 500);
      }
    });

    card.addEventListener('mouseenter', () => {
      if (!hasGSAP) card.style.transition = '';
    });
  });
}
