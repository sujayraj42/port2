/**
 * @module konami
 * Easter egg: ↑↑↓↓←→←→BA triggers confetti burst on canvas.
 */
import { $ } from './utils.js';

export function initKonami() {
  const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let index = 0;

  document.addEventListener('keydown', e => {
    if (e.key === sequence[index] || e.key.toLowerCase() === sequence[index]) {
      index++;
      if (index === sequence.length) {
        index = 0;
        fireConfetti();
      }
    } else {
      index = 0;
    }
  });

  function fireConfetti() {
    const canvas = $('#konami-canvas');
    if (!canvas) return;

    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.zIndex = '99998';
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    const colors = ['#6C63FF','#FF6584','#43E97B','#FFB830','#00D4FF','#9B94FF'];
    const particles = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 1) * 15,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        alpha: 1,
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.vy += 0.3; // gravity
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.alpha -= 0.008;

        if (p.alpha <= 0) continue;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }

      frame++;
      if (frame < 120 && particles.some(p => p.alpha > 0)) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
  }
}
