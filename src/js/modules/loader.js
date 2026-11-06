import { gsap } from 'gsap';

/**
 * Counter loader: 0 → 100 in Bebas Neue, then the number scales up + blurs
 * away while the page rises from below. Runs BEFORE ScrollSmoother is created
 * (via onDone) so the page-reveal tween doesn't fight the smoother transform.
 */
export function initLoader(onDone) {
  const loader  = document.getElementById('loader');
  const countEl = document.getElementById('loaderCount');
  const content = document.getElementById('smooth-content');

  if (!loader || !countEl) { onDone?.(); return; }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    loader.remove();
    onDone?.();
    return;
  }

  const counter = { v: 0 };
  const tl = gsap.timeline();

  // Count up
  tl.to(counter, {
    v: 100,
    duration: 2.0,
    ease: 'power2.inOut',
    onUpdate: () => { countEl.textContent = Math.round(counter.v); },
  });

  // Number blows up and blurs out
  tl.to(countEl, {
    scale: 20,
    filter: 'blur(24px)',
    autoAlpha: 0,
    duration: 0.9,
    ease: 'power3.in',
  }, '+=0.15');

  // Loader panel fades, label out
  tl.to('.loader-label', { autoAlpha: 0, duration: 0.3 }, '<');
  tl.to(loader, { autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4');

  // Page rises from below (before smoother exists → free to transform)
  tl.from(content, {
    y: 60,
    autoAlpha: 0,
    duration: 0.9,
    ease: 'power3.out',
    onStart: () => { loader.style.pointerEvents = 'none'; },
  }, '-=0.4');

  tl.add(() => {
    loader.remove();
    gsap.set(content, { clearProps: 'all' });
    onDone?.();
  });
}
