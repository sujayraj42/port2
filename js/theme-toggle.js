/**
 * @module theme-toggle
 * Dark/light theme with View Transition API and localStorage persistence.
 */
import { $, prefersReducedMotion } from './utils.js';

/**
 * @param {string} selector - Theme toggle button
 */
export function initTheme(selector) {
  const btn = $(selector);
  if (!btn) return;

  // Load saved theme
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    btn.textContent = saved === 'light' ? '🌙' : '☀';
  }

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';

    const applyTheme = () => {
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.textContent = next === 'light' ? '🌙' : '☀';
    };

    // Use View Transition API if available
    if ('startViewTransition' in document && !prefersReducedMotion()) {
      document.startViewTransition(applyTheme);
    } else {
      applyTheme();
    }
  });
}
