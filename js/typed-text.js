/**
 * @module typed-text
 * Typewriter effect cycling through multiple strings.
 */
import { $, prefersReducedMotion } from './utils.js';

/**
 * @param {string} selector - Element to type into
 * @param {string[]} strings - Array of strings to cycle
 */
export function initTyped(selector, strings = []) {
  const el = $(selector);
  if (!el || strings.length === 0) return;

  if (prefersReducedMotion()) {
    el.textContent = strings[0];
    return;
  }

  let strIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let timer = null;

  function tick() {
    const current = strings[strIdx];
    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx >= current.length) {
        // Pause before deleting
        timer = setTimeout(() => { deleting = true; tick(); }, 2000);
        return;
      }
      timer = setTimeout(tick, 80);
    } else {
      el.textContent = current.slice(0, charIdx);
      charIdx--;
      if (charIdx < 0) {
        deleting = false;
        charIdx = 0;
        strIdx = (strIdx + 1) % strings.length;
        timer = setTimeout(tick, 500);
        return;
      }
      timer = setTimeout(tick, 40);
    }
  }

  tick();

  return {
    destroy: () => { clearTimeout(timer); }
  };
}
