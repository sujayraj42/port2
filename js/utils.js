/**
 * @module utils
 * Pure utility functions — no DOM side effects, no global state.
 */

/** Linear interpolation */
export const lerp = (a, b, t) => a + (b - a) * t;

/** Clamp value between min and max */
export const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

/** Map value from one range to another */
export const mapRange = (v, inMin, inMax, outMin, outMax) =>
  outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);

/** Debounce: call fn at most once per wait ms */
export const debounce = (fn, wait = 16) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};

/** Throttle to requestAnimationFrame */
export const rafThrottle = fn => {
  let pending = false;
  return (...args) => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => { fn(...args); pending = false; });
  };
};

/** Query single element (null-safe) */
export const $ = (sel, root = document) => root.querySelector(sel) ?? null;

/** Query all elements → Array */
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Touch device detection */
export const isTouchDevice = () =>
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

/** Reduced motion preference */
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** OffscreenCanvas support */
export const supportsOffscreenCanvas = () =>
  'OffscreenCanvas' in window && 'transferControlToOffscreen' in HTMLCanvasElement.prototype;

/** scheduler.postTask support */
export const supportsScheduler = () => 'scheduler' in window && 'postTask' in scheduler;

/** Generate random number in range */
export const rand = (min, max) => Math.random() * (max - min) + min;

/** Generate random integer in range */
export const randInt = (min, max) => Math.floor(rand(min, max));

/** Distance between two points */
export const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

/** Ease out cubic */
export const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

/** Format number with + suffix */
export const formatStat = (n, suffix = '') => n.toLocaleString() + suffix;

/** Show toast notification */
export const showToast = (msg, duration = 2500) => {
  const container = $('#toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toast.setAttribute('role', 'status');
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-16px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
};
