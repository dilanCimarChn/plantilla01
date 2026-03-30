import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Hero entrance animation ──────────────────────────────────────────────────
export function animateHero() {
  const tl = gsap.timeline({ delay: 0.1 });

  // Eyebrow line grows in
  tl.from('.hero-eyebrow-line', {
    scaleX: 0,
    duration: 0.7,
    ease: 'power3.out',
    transformOrigin: 'left center',
  });

  // Eyebrow text
  tl.from('.hero-eyebrow span', {
    opacity: 0,
    x: -20,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.4');

  // Title lines — slide up from mask
  tl.from('.hero-title-line', {
    opacity: 0,
    y: 80,
    stagger: 0.1,
    duration: 1.0,
    ease: 'power4.out',
  }, '-=0.3');

  // Description
  tl.from('.hero-desc', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.55');

  // Buttons
  tl.from('.hero-actions > *', {
    opacity: 0,
    y: 20,
    stagger: 0.12,
    duration: 0.7,
    ease: 'power2.out',
  }, '-=0.5');

  // Stats
  tl.from('.hero-stat', {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.55');

  // Scroll indicator
  tl.from('.scroll-indicator', {
    opacity: 0,
    y: 10,
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.3');

  // Animate orb in
  tl.from('#heroOrb', {
    opacity: 0,
    scale: 0.6,
    duration: 1.4,
    ease: 'power3.out',
  }, 0.2);
}

// ── Parallax ─────────────────────────────────────────────────────────────────
export function initParallax() {
  // Hero orb
  gsap.to('#heroOrb', {
    y: 140,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });

  // Hero grid moves slower
  gsap.to('.hero-grid-overlay', {
    y: 60,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    },
  });
}

// ── Scroll-triggered section reveals ────────────────────────────────────────
function revealEl(el, extras = {}) {
  const delay = parseFloat(el.dataset.delay || 0);
  gsap.from(el, {
    opacity: 0,
    y: 50,
    duration: 0.9,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
      toggleActions: 'play none none none',
    },
    ...extras,
  });
}

export function initScrollAnimations() {
  // ── About section
  gsap.from('.about-image-wrap', {
    opacity: 0,
    x: -70,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.about', start: 'top 75%' },
  });

  gsap.from('.about-content > *', {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.about-content', start: 'top 78%' },
  });

  gsap.from('.about-value', {
    opacity: 0,
    x: -20,
    stagger: 0.07,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.about-values', start: 'top 85%' },
  });

  // ── Section titles / eyebrows
  document.querySelectorAll('.section-eyebrow, .section-title').forEach((el) => {
    if (el.closest('.hero') || el.closest('.about-content')) return;
    revealEl(el);
  });

  // ── Service cards — stagger with scale
  gsap.from('.service-card', {
    opacity: 0,
    y: 70,
    scale: 0.96,
    stagger: 0.08,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
  });

  // ── Clients grid
  gsap.from('.client-item', {
    opacity: 0,
    y: 30,
    stagger: 0.06,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.clients-grid', start: 'top 82%' },
  });

  // ── Process steps — cascade from left
  gsap.from('.process-step', {
    opacity: 0,
    x: -40,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.process-grid', start: 'top 80%' },
  });

  // ── CTA section
  gsap.from('.cta-content > *', {
    opacity: 0,
    y: 50,
    stagger: 0.12,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
  });

  // CTA circles reveal
  gsap.from('.cta-circle', {
    scale: 0,
    stagger: 0.1,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.cta-section', start: 'top 85%' },
  });

  // ── Contact section
  gsap.from('.contact-info > *', {
    opacity: 0,
    x: -50,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.contact', start: 'top 78%' },
  });

  gsap.from('.contact-form-wrap', {
    opacity: 0,
    x: 50,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.contact', start: 'top 78%' },
  });

  // ── Footer
  gsap.from('.footer-top > *', {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: { trigger: 'footer', start: 'top 90%' },
  });

  // ── Marquee section
  gsap.from('.marquee-section', {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.marquee-section', start: 'top 90%' },
  });
}

// ── Trusted subtitle ─────────────────────────────────────────────────────────
export function initTrustedReveal() {
  gsap.from('.trusted-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.trusted-subtitle', start: 'top 88%' },
  });
}
