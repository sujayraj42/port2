/**
 * @module loader
 * Cinematic loading screen with SVG stroke animation + session gate.
 * v2: Faster transitions, more reliable fallback, reduced wait times.
 */
import { $ } from './utils.js';

export async function initLoader() {
  const loader = $('#loader');
  if (!loader) return;

  // Skip loader if already shown this session
  if (sessionStorage.getItem('loaded') === 'true') {
    loader.style.display = 'none';
    return;
  }

  return new Promise(resolve => {
    const fill = $('#loader-fill');
    if (!fill) {
      loader.style.display = 'none';
      sessionStorage.setItem('loaded', 'true');
      resolve();
      return;
    }

    const finish = () => {
      // Use View Transition if available
      if ('startViewTransition' in document) {
        document.startViewTransition(() => {
          loader.classList.add('loader-hidden');
        });
      } else {
        loader.classList.add('loader-hidden');
      }

      // Faster fade out — 400ms instead of 700ms
      setTimeout(() => {
        loader.style.display = 'none';
        sessionStorage.setItem('loaded', 'true');
        resolve();
      }, 400);
    };

    let finished = false;
    const onEnd = () => {
      if (finished) return;
      finished = true;
      fill.removeEventListener('animationend', onEnd);
      finish();
    };

    fill.addEventListener('animationend', onEnd);

    // Faster fallback — 2200ms instead of 3000ms
    setTimeout(() => {
      if (!finished) {
        finished = true;
        finish();
      }
    }, 2200);
  });
}
