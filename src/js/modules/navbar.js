import { getSmoother } from './smooth.js';

export function initNavbar() {
  const navbar      = document.getElementById('navbar');
  const menuToggle  = document.getElementById('menuToggle');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Scroll state → lime border-bottom appears
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

  // Smooth scroll to a section (ScrollSmoother, with native fallback)
  function goTo(target) {
    if (!target) return;
    const navH = navbar.offsetHeight + 16;
    const smoother = getSmoother();
    if (smoother) {
      const y = smoother.offset(target, `top ${navH}px`);
      smoother.scrollTo(y, true);
    } else {
      const y = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // Mobile menu
  let isOpen = false;
  function openMenu() {
    isOpen = true;
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    isOpen = false;
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle?.addEventListener('click', () => (isOpen ? closeMenu() : openMenu()));

  mobileLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      goTo(document.querySelector(link.getAttribute('href')));
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  // Desktop anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    if (a.classList.contains('mobile-nav-link')) return;
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      goTo(target);
    });
  });
}
