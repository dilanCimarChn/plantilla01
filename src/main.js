// ── Styles ───────────────────────────────────────────────────────────────────
import './css/main.css';

// ── Modules ──────────────────────────────────────────────────────────────────
import { initSmooth }       from './js/modules/smooth.js';
import { initLoader }       from './js/modules/loader.js';
import { initCursor }       from './js/modules/cursor.js';
import { initNavbar }       from './js/modules/navbar.js';
import { initTicker }       from './js/modules/ticker.js';
import { initMarquee }      from './js/modules/marquee.js';
import { initTestimonials } from './js/modules/testimonials.js';
import { initCounters }     from './js/modules/counter.js';
import { initMagnetic }     from './js/modules/magnetic.js';
import { initForm }         from './js/modules/form.js';
import { initStrips }       from './js/modules/strip.js';
import { initProduct }      from './js/modules/product.js';
import { animateHero, initScrollAnimations } from './js/modules/animations.js';

// Mark JS active so anti-FOUC initial states (data-reveal / data-fade) apply
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  // Fill dynamic content slots
  initTicker();
  initMarquee();
  initTestimonials();

  // Core interactions (safe before reveal)
  initCursor();
  initNavbar();
  initMagnetic();
  initForm();

  // Loader counts 0→100, then reveals the page from below
  initLoader(() => {
    // Smooth scroll first so ScrollTrigger reads correct positions
    initSmooth();

    // Entrance + scroll-driven reveals
    animateHero();
    initScrollAnimations();
    initProduct();    // pinned coffee cup that rotates through 3 scenes
    initStrips();     // ticker + marquee, direction follows scroll velocity
    initCounters();   // count-up once stats are visible
  });
});
