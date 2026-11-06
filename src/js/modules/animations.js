import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText }     from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// ── Hero entrance ─────────────────────────────────────────────────────────────
export function animateHero() {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  // 1. Horizontal line expands 0 → 100%
  tl.from('#heroLine', {
    scaleX: 0,
    duration: 1.2,
    transformOrigin: 'left center',
  });

  // 2. "CAFÉ" letter by letter (SplitText)
  const title = document.getElementById('heroTitle');
  if (title) {
    const split = new SplitText(title, { type: 'chars' });
    tl.from(split.chars, {
      yPercent: 120,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
    }, '-=0.7');
  }

  // 3. Subtitle — clip-path reveal from below
  tl.fromTo('.hero-sub',
    { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 16 },
    { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    '-=0.35');

  // 4. Description, actions, scroll cue
  tl.fromTo('.hero-desc, .hero-actions, .scroll-indicator',
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' },
    '-=0.4');

  return tl;
}

// ── Clip-path reveal driven by scroll (scrub) ─────────────────────────────────
function clipReveal(el) {
  gsap.fromTo(el,
    { clipPath: 'inset(100% 0 0 0)' },
    {
      clipPath: 'inset(0% 0 0 0)',
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 50%', scrub: true },
    });
}

// ── Gentle fade-up on enter (small supporting copy) ───────────────────────────
function fadeUp(el) {
  gsap.fromTo(el,
    { opacity: 0, y: 28 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
}

export function initScrollAnimations() {
  // Every titled element reveals via clip-path (no generic opacity fade)
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.closest('.hero')) return;       // hero handled by entrance timeline
    clipReveal(el);
  });

  // Supporting copy fades up on enter
  document.querySelectorAll('[data-fade]').forEach((el) => {
    if (el.closest('.hero')) return;
    fadeUp(el);
  });

  // Menu cards rise in a stagger
  gsap.fromTo('.menu-card',
    { opacity: 0, y: 80 },
    {
      opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: '.menu-grid', start: 'top 82%' },
    });

  // Clients
  gsap.fromTo('.client-item',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: '.clients-grid', start: 'top 85%' },
    });

  // Process steps
  gsap.fromTo('.process-step',
    { opacity: 0, y: 50 },
    {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: '.process-grid', start: 'top 82%' },
    });

  // Contact + form
  gsap.fromTo('.contact-items, .contact-map, .contact-socials',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-info', start: 'top 80%' },
    });

  gsap.fromTo('.contact-form',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-form', start: 'top 82%' },
    });

  // Footer
  gsap.fromTo('footer > *',
    { opacity: 0, y: 20 },
    {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: 'footer', start: 'top 92%' },
    });
}
