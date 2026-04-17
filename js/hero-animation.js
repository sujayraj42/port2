/**
 * @module hero-animation
 * GSAP-powered cinematic landing entrance animation.
 * Uses GPU-accelerated transforms for zero-lag performance.
 * Replaces all CSS clip-path animations with GSAP timeline.
 */

/** Wait for GSAP to be available (loaded via CDN) */
function waitForGSAP() {
  return new Promise(resolve => {
    if (window.gsap) return resolve(window.gsap);
    const check = setInterval(() => {
      if (window.gsap) { clearInterval(check); resolve(window.gsap); }
    }, 20);
    // Safety fallback after 3s
    setTimeout(() => { clearInterval(check); resolve(null); }, 3000);
  });
}

export async function initHeroAnimation() {
  const gsap = await waitForGSAP();
  
  if (!gsap) {
    // Fallback: just show everything immediately
    document.querySelectorAll('.hero-name .char').forEach(c => {
      c.style.opacity = '1';
      c.style.transform = 'none';
    });
    document.querySelectorAll('.hero-rule, .hero-typed-wrapper, .hero-sub, .hero-badge, .hero-cta .btn, .hero-scroll-indicator').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // ── Master Timeline ──
  const tl = gsap.timeline({
    defaults: {
      ease: 'power4.out',
      duration: 0.8,
    }
  });

  // Characters: staggered slide-up with 3D rotation
  const chars = document.querySelectorAll('.hero-name .char');
  if (chars.length > 0) {
    tl.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.7,
      stagger: {
        each: 0.04,
        from: 'start',
      },
      ease: 'back.out(1.4)',
    }, '+=0.1');
  }

  // Golden rule — width expansion
  tl.to('.hero-rule', {
    width: 100,
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.3');

  // Typed text wrapper — fade up
  tl.to('.hero-typed-wrapper', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.2');

  // Subtitle — fade up
  tl.to('.hero-sub', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.3');

  // Badge — scale + fade
  tl.to('.hero-badge', {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    ease: 'back.out(1.2)',
  }, '-=0.3');

  // CTA buttons — staggered slide up
  const ctaBtns = document.querySelectorAll('.hero-cta .btn');
  if (ctaBtns.length > 0) {
    tl.to(ctaBtns, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
    }, '-=0.3');
  }

  // Scroll indicator — gentle fade
  tl.to('.hero-scroll-indicator', {
    opacity: 1,
    duration: 0.8,
    ease: 'power1.out',
  }, '-=0.3');

  return tl;
}

/**
 * Initialize GSAP ScrollTrigger for reveal animations.
 * Uses ScrollTrigger.batch() — ONE observer for ALL elements
 * instead of 30+ separate ScrollTriggers. Massive perf win.
 */
export async function initScrollReveals() {
  const gsap = await waitForGSAP();
  if (!gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(window.ScrollTrigger);

  // ── Batch all [data-reveal] elements into a single observer ──
  const revealEls = document.querySelectorAll('[data-reveal], .section-heading');
  if (revealEls.length > 0) {
    // Set initial hidden state instantly (no tween)
    gsap.set(revealEls, { opacity: 0, y: 28, force3D: true });

    ScrollTrigger.batch(revealEls, {
      start: 'top 88%',
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
        stagger: 0.06,
        overwrite: true,
      }),
      once: true,
    });
  }

  // Directional reveals (left/right) — typically few elements
  const leftEls = document.querySelectorAll('[data-reveal-left]');
  if (leftEls.length > 0) {
    gsap.set(leftEls, { opacity: 0, x: -36, force3D: true });
    ScrollTrigger.batch(leftEls, {
      start: 'top 88%',
      onEnter: batch => gsap.to(batch, { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out', stagger: 0.07, overwrite: true }),
      once: true,
    });
  }

  const rightEls = document.querySelectorAll('[data-reveal-right]');
  if (rightEls.length > 0) {
    gsap.set(rightEls, { opacity: 0, x: 36, force3D: true });
    ScrollTrigger.batch(rightEls, {
      start: 'top 88%',
      onEnter: batch => gsap.to(batch, { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out', stagger: 0.07, overwrite: true }),
      once: true,
    });
  }

  // Refresh after fonts/images load
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

  return { destroy: () => ScrollTrigger.killAll() };
}

