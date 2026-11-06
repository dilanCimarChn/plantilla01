import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven product hero: the coffee cup is pinned in the centre and
 * rotates 360° as you scroll, while three scenes (ingredientes → proceso →
 * resultado) enter and exit with clip-path. One message per scene.
 */
export function initProduct() {
  const section = document.querySelector('.product-section');
  const product = document.getElementById('product');
  if (!section || !product) return;

  const scenes = gsap.utils.toArray('.product-scene');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    section.classList.add('product-reduced-motion');
    gsap.set(scenes, { clipPath: 'inset(0 0 0 0)', opacity: 1 });
    return;
  }

  gsap.set(scenes, { clipPath: 'inset(100% 0 0 0)', opacity: 0 });

  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=300%',
      scrub: 1,
      pin: '.product-stage',
      anticipatePin: 1,
    },
  });

  // Cup spins through the whole section
  tl.to(product, { rotateY: 360, duration: 3 }, 0);

  // Each scene: clip-path in → hold → clip-path out
  const starts = [0, 1.05, 2.1];
  scenes.forEach((scene, i) => {
    const t = starts[i];
    tl.fromTo(scene,
      { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
      { clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 0.45, ease: 'power2.out' }, t);
    if (i < scenes.length - 1) {
      tl.to(scene,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0, duration: 0.45, ease: 'power2.in' }, t + 0.6);
    }
  });
}
