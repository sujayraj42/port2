/**
 * @module credential-reveal
 * Terminal-style character decode animation for credential IDs.
 */
import { $$, prefersReducedMotion } from './utils.js';

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const SCRAMBLE_ITERATIONS = 5;
const CHARS_PER_SECOND = 10;

/**
 * @param {string} selector - Elements with data-credential attribute
 */
export function initCredential(selector) {
  const elements = $$(selector);
  if (elements.length === 0) return;

  elements.forEach(el => {
    const target = el.dataset.credential || '';
    const textEl = el.querySelector('.cert-id-text');
    const cursorEl = el.querySelector('.cert-id-cursor');
    if (!textEl) return;

    if (prefersReducedMotion()) {
      textEl.textContent = target;
      if (cursorEl) cursorEl.style.display = 'none';
      return;
    }

    // Keep hidden initially
    textEl.textContent = '';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        decodeReveal(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  elements.forEach(el => observer.observe(el));

  function decodeReveal(el) {
    const target = el.dataset.credential || '';
    const textEl = el.querySelector('.cert-id-text');
    const cursorEl = el.querySelector('.cert-id-cursor');
    if (!textEl) return;

    let revealed = 0;
    let scrambleCount = 0;
    const interval = 1000 / CHARS_PER_SECOND;

    function tick() {
      if (revealed >= target.length) {
        textEl.textContent = target;
        if (cursorEl) cursorEl.style.display = 'none';
        return;
      }

      if (scrambleCount < SCRAMBLE_ITERATIONS) {
        // Show revealed chars + random char at current position
        const done = target.slice(0, revealed);
        const randomChar = CHARSET[Math.floor(Math.random() * CHARSET.length)];
        textEl.textContent = done + randomChar;
        scrambleCount++;
        setTimeout(tick, interval / SCRAMBLE_ITERATIONS);
      } else {
        // Land on correct char
        revealed++;
        textEl.textContent = target.slice(0, revealed);
        scrambleCount = 0;
        setTimeout(tick, interval);
      }
    }

    tick();
  }

  return { destroy: () => observer.disconnect() };
}
