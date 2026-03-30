function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateCount(el, target, duration = 2000) {
  let start;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const value    = Math.floor(easeOut(progress) * target);
    el.textContent = value >= 1000 ? value.toLocaleString() : String(value);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target >= 1000 ? target.toLocaleString() + '+' : target + '+';
    }
  }
  requestAnimationFrame(step);
}

export function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count, 10);
        animateCount(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  els.forEach((el) => observer.observe(el));
}
