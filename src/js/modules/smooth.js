import { gsap } from 'gsap';
import { ScrollTrigger }  from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother;

/**
 * GSAP ScrollSmoother — replaces Lenis.
 * `effects: true` enables native data-speed / data-lag parallax
 * (used by the "Nosotros" paragraphs and the about badge).
 */
export function initSmooth() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: reduced ? 0 : 1.2,
    smoothTouch: 0,        // native scroll on touch devices
    effects: true,
    normalizeScroll: true,
  });

  return smoother;
}

export function getSmoother() {
  return smoother;
}
