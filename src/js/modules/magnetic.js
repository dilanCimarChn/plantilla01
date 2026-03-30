/**
 * Magnetic button effect — buttons slightly follow the cursor.
 * Applied to all elements with class `magnetic`.
 */
export function initMagnetic() {
  if (window.matchMedia('(hover: none)').matches) return;

  const magnetics = document.querySelectorAll('.magnetic');

  magnetics.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect    = el.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const deltaX  = (e.clientX - centerX) * 0.28;
      const deltaY  = (e.clientY - centerY) * 0.28;
      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}
