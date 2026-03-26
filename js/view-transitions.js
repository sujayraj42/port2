/**
 * @module view-transitions
 * View Transitions API wrapper and smooth navigation.
 */

/**
 * @param {object} features - Feature flags
 */
export function initTransitions(features = {}) {
  if (!features.viewTransitions) return;

  // Style the view transitions
  const style = document.createElement('style');
  style.textContent = `
    ::view-transition-old(root) {
      animation: 300ms ease-out both fade-out;
    }
    ::view-transition-new(root) {
      animation: 300ms ease-out both fade-in;
    }
    @keyframes fade-out {
      from { opacity: 1; filter: blur(0); }
      to { opacity: 0.5; filter: blur(4px); }
    }
    @keyframes fade-in {
      from { opacity: 0.5; filter: blur(4px); }
      to { opacity: 1; filter: blur(0); }
    }
  `;
  document.head.appendChild(style);
}
