/**
 * @module ambient-sound
 * Optional ambient space background hum using Web Audio API oscillators.
 * Off by default. Toggle with sound button in nav.
 */
import { $ } from './utils.js';

/**
 * @param {string} selector - Sound toggle button
 */
export function initAmbientSound(selector) {
  const btn = $(selector);
  if (!btn) return;

  let audioCtx = null;
  let isPlaying = false;
  let gainNode = null;
  let oscillators = [];

  btn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.03; // very subtle
      gainNode.connect(audioCtx.destination);

      // Deep ambient hum
      const freqs = [55, 82.5, 110];
      freqs.forEach(freq => {
        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const oscGain = audioCtx.createGain();
        oscGain.gain.value = 0.3;
        osc.connect(oscGain);
        oscGain.connect(gainNode);
        osc.start();
        oscillators.push({ osc, gain: oscGain });
      });
    }

    if (isPlaying) {
      // Fade out
      gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
      isPlaying = false;
      btn.textContent = '♪';
      btn.setAttribute('aria-label', 'Enable ambient sound');
    } else {
      gainNode.gain.linearRampToValueAtTime(0.03, audioCtx.currentTime + 0.5);
      isPlaying = true;
      btn.textContent = '♫';
      btn.setAttribute('aria-label', 'Disable ambient sound');
    }
  });
}
