/**
 * main.js — Portfolio initialization orchestrator.
 * v3: GSAP-powered animations for zero-lag performance.
 * Replaced: CSS clip-path animations, IntersectionObserver reveals, scroll-skew.
 * Added: GSAP timeline for hero, ScrollTrigger for reveals.
 */

import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject as injectAnalytics } from '@vercel/analytics';

import { initLoader }          from './loader.js';
import { initCanvas }          from './canvas-particles.js';
import { initNav }             from './nav.js';
import { initCursor }          from './cursor.js';
import { initTyped }           from './typed-text.js';
import { initMagnetic }        from './magnetic.js';
import { initCounter }         from './counter.js';
import { initProgressBars }    from './progress-bars.js';
import { initTimeline }        from './timeline-draw.js';
import { initCardTilt }        from './card-tilt.js';
import { initCredential }      from './credential-reveal.js';
import { initTheme }           from './theme-toggle.js';
import { initTransitions }     from './view-transitions.js';
import { initKonami }          from './konami.js';
import { initHeroAnimation, initScrollReveals } from './hero-animation.js';
import {
  isTouchDevice,
  prefersReducedMotion,
  supportsOffscreenCanvas,
  supportsScheduler,
  $, $$, showToast
} from './utils.js';

// ── Feature Detection ──
const features = {
  touch:            isTouchDevice(),
  reducedMotion:    prefersReducedMotion(),
  offscreenCanvas:  supportsOffscreenCanvas(),
  scheduler:        supportsScheduler(),
  scrollDriven:     CSS.supports?.('animation-timeline', 'scroll()') ?? false,
  viewTransitions:  'startViewTransition' in document,
  houdini:          typeof CSS !== 'undefined' && 'paintWorklet' in CSS,
  popover:          typeof HTMLElement !== 'undefined' && 'popover' in HTMLElement.prototype,
};

// ── Hero Name Character Split ──
function splitHeroName() {
  const words = document.querySelectorAll('.hero-name-word');
  let totalIndex = 0;

  words.forEach(word => {
    const text = word.dataset.word || word.textContent;
    word.textContent = '';
    word.setAttribute('aria-label', text);

    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      span.style.setProperty('--char-index', totalIndex);
      span.setAttribute('aria-hidden', 'true');
      word.appendChild(span);
      totalIndex++;
    });
  });
}

// ── Contact Form Handler ──
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]')?.value?.trim();
    const email = form.querySelector('[name="email"]')?.value?.trim();
    const message = form.querySelector('[name="message"]')?.value?.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all fields');
      return;
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address');
      return;
    }

    // Try Web Share API
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Message from ${name}`,
          text: `${message}\n\nFrom: ${name} (${email})`,
          url: window.location.href,
        });
        showToast('Message shared!');
        form.reset();
        return;
      } catch (err) {
        // User cancelled or error — fall through to mailto
      }
    }

    // Fallback: mailto
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:sujay@example.com?subject=${subject}&body=${body}`;
    showToast('Opening email client...');
  });
}

// ── Copy Email ──
function initCopyEmail() {
  const copyBtn = document.querySelector('[data-copy-email]');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('sujay@example.com');
      showToast('Email copied to clipboard!');
    } catch {
      showToast('Could not copy email');
    }
  });
}

// ── Scroll Progress Bar ──
function initScrollProgress() {
  const bar = $('#scroll-progress');
  if (!bar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
        ticking = false;
      });
    }
  }, { passive: true });
}

// ── Back to Top Visibility ──
function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  // Use IntersectionObserver on hero section for efficiency
  const hero = $('#hero');
  if (hero) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        btn.classList.toggle('visible', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    observer.observe(hero);
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Section Active Indicator Dots ──
function initSectionDots() {
  const sections = $$('section[id]');
  if (sections.length === 0) return;

  // Create dots container
  const dotsContainer = document.createElement('nav');
  dotsContainer.className = 'section-dots';
  dotsContainer.setAttribute('aria-label', 'Section navigation');

  sections.forEach(section => {
    const dot = document.createElement('a');
    dot.href = `#${section.id}`;
    dot.className = 'section-dot';
    dot.setAttribute('aria-label', section.getAttribute('aria-label') || section.id);
    dot.dataset.section = section.id;
    
    dot.addEventListener('click', e => {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    dotsContainer.appendChild(dot);
  });

  document.body.appendChild(dotsContainer);

  // Active section tracking
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        $$('.section-dot').forEach(d => {
          d.classList.toggle('active', d.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

// ── Bootstrap ──
async function bootstrap() {
  // Initialize Vercel Insights & Analytics
  injectSpeedInsights();
  injectAnalytics();

  // Split hero name into individual characters
  splitHeroName();

  // Loader runs first
  await initLoader();

  // ── GSAP Hero Animation (replaces CSS clip-path animations) ──
  const heroAnimPromise = !features.reducedMotion
    ? initHeroAnimation()
    : Promise.resolve();

  // ── GSAP ScrollTrigger Reveals (replaces IntersectionObserver) ──
  const scrollRevealPromise = !features.reducedMotion
    ? initScrollReveals()
    : Promise.resolve();

  // Parallel core initialization after loader
  const coreInit = [
    heroAnimPromise,
    scrollRevealPromise,
    initCanvas('#hero-canvas', features),
    initNav(),
    initTyped('#hero-typed', ['Full Stack Developer', 'BCA Student @ LPU', 'Building the Web']),
    initCounter('[data-count-to]'),
    initProgressBars('[data-progress]'),
    initTimeline('#timeline-line'),
    initCredential('[data-credential]'),
    initTheme('#theme-toggle'),
    initTransitions(features),
    initKonami(),
  ];

  // Desktop-only features (removed scroll-skew — it was causing layout thrashing)
  if (!features.touch && !features.reducedMotion) {
    coreInit.push(
      initCursor(),
      initMagnetic('[data-magnetic]'),
      initCardTilt('[data-tilt]'),
    );
  }

  await Promise.allSettled(coreInit);

  // Contact features
  initContactForm();
  initCopyEmail();

  // New features
  initBackToTop();
  initSectionDots();
  initScrollProgress();

  // Background tasks
  const schedule = features.scheduler
    ? (fn, opts) => scheduler.postTask(fn, opts)
    : (fn) => setTimeout(fn, 100);

  schedule(() => {
    if (features.houdini) {
      CSS.paintWorklet.addModule('./js/worklets/noise-paint.js');
    }
  }, { priority: 'background' });

  schedule(() => {
    import('./ambient-sound.js').then(m => m.initAmbientSound('#sound-toggle'));
  }, { priority: 'background' });
}

bootstrap();
