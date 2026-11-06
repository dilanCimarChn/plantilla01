import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Infinite horizontal strip whose direction follows scroll direction
 * (down → left, up → right) and whose speed reacts to scroll velocity.
 * Each track holds 4 copies of its set, so xPercent:-50 loops seamlessly.
 */
function strip(el, duration) {
  if (!el) return;

  const tween = gsap.to(el, { xPercent: -50, duration, ease: 'none', repeat: -1 });
  tween.timeScale(1); // base drift: leftward

  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const dir   = self.direction;                 // 1 = down, -1 = up
      const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 200, 8);
      gsap.to(tween, { timeScale: dir * boost, duration: 0.4, overwrite: true });
    },
  });
}

export function initStrips() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  strip(document.getElementById('tickerInner'), 26);
  strip(document.getElementById('marquee1'), 34);
}
