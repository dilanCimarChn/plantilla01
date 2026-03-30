// 3D perspective tilt effect for cards with CSS custom property mouse tracking

export function initTilt() {
  const cards = document.querySelectorAll('.tilt-card');
  if (!cards.length) return;

  const MAX_ROTATION = 10; // degrees

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;   // 0-1
      const y = (e.clientY - rect.top)  / rect.height;  // 0-1

      const rotateX = (0.5 - y) * MAX_ROTATION;
      const rotateY = (x - 0.5) * MAX_ROTATION;

      card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;

      // Pass mouse position to CSS for radial gradient highlight
      card.style.setProperty('--mouse-x', `${x * 100}%`);
      card.style.setProperty('--mouse-y', `${y * 100}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });

    // Touch: no tilt, just reset
    card.addEventListener('touchstart', () => {
      card.style.transform = '';
    }, { passive: true });
  });
}
