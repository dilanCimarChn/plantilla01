export function initCursor() {
  const dot   = document.getElementById('cursor');
  const ring  = document.getElementById('cursorRing');

  if (!dot || !ring) return;
  if (window.matchMedia('(hover: none)').matches) {
    dot.style.display = ring.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(-50%, -50%) translate(${mx}px, ${my}px)`;
  });

  // Ring follows with a slow lerp (0.08)
  (function follow() {
    rx += (mx - rx) * 0.08;
    ry += (my - ry) * 0.08;
    ring.style.transform = `translate(-50%, -50%) translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();

  // Hover targets
  const LINKS = 'a, button, input, select, textarea, .client-item, .social-btn';
  const VIEW  = '.menu-card';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(VIEW))      ring.classList.add('is-view');
    else if (e.target.closest(LINKS)) ring.classList.add('is-hover');
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(VIEW))      ring.classList.remove('is-view');
    else if (e.target.closest(LINKS)) ring.classList.remove('is-hover');
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = ring.style.opacity = '1';
  });
}
