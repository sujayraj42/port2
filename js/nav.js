/**
 * @module nav
 * Navigation: scroll spy, scroll-based style, hamburger, back-to-top, mobile menu.
 */
import { $, $$, debounce } from './utils.js';

export function initNav() {
  const navbar = $('#navbar');
  const links = $$('.nav-links a');
  const sections = $$('section[id]');
  const hamburger = $('#hamburger');
  const backToTop = $('#back-to-top');
  const mobileMenu = $('.mobile-menu');

  if (!navbar) return;

  // ── Scroll spy ──
  function updateActiveLink() {
    let current = '';
    const scrollY = window.scrollY + window.innerHeight / 3;

    for (const section of sections) {
      if (section.offsetTop <= scrollY) {
        current = section.id;
      }
    }

    links.forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }

  // ── Nav background on scroll ──
  function updateNavBg() {
    navbar.classList.toggle('scrolled', window.scrollY > 100);
  }

  window.addEventListener('scroll', () => {
    updateActiveLink();
    updateNavBg();
  }, { passive: true });

  updateActiveLink();
  updateNavBg();

  // ── Smooth scroll for nav links ──
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = $(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Close mobile menu if open
      if (mobileMenu?.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  });

  // Also handle mobile menu links
  $$('.mobile-menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = $(link.getAttribute('href'));
      if (target) {
        closeMobileMenu();
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    });
  });

  // ── Hamburger toggle ──
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
  }

  function closeMobileMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  }

  // ── Escape key closes menu ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // ── Back to top ──
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
