// ── Styles ───────────────────────────────────────────────────────────────────
import './css/main.css';

// ── Modules ──────────────────────────────────────────────────────────────────
import { initLenis }          from './js/modules/lenis.js';
import { initCursor }         from './js/modules/cursor.js';
import { initNavbar }         from './js/modules/navbar.js';
import { initTicker }         from './js/modules/ticker.js';
import { initMarquee }        from './js/modules/marquee.js';
import { initTestimonials }   from './js/modules/testimonials.js';
import { initCounters }       from './js/modules/counter.js';
import { initMagnetic }       from './js/modules/magnetic.js';
import { initForm }           from './js/modules/form.js';
import { initParticles }      from './js/modules/particles.js';
import { initTilt }           from './js/modules/tilt.js';
import {
  animateHero,
  initParallax,
  initScrollAnimations,
  initTrustedReveal,
} from './js/modules/animations.js';

// ── Loader ───────────────────────────────────────────────────────────────────
function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('is-hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }, 1300);
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Content that fills dynamic slots
  initTicker();
  initMarquee();
  initTestimonials();

  // Core interactions
  initCursor();
  initLenis();
  initNavbar();
  initMagnetic();
  initForm();
  initCounters();

  // Visual effects
  initParticles();
  initTilt();

  // Animations (GSAP)
  animateHero();
  initParallax();
  initScrollAnimations();
  initTrustedReveal();

  // Hide loader after all above is bootstrapped
  hideLoader();
});
