const WORDS = [
  'CAFÉ ARTESANAL', 'SABOR', 'ORIGEN', 'CALIDEZ',
  'PASIÓN', 'TRADICIÓN', 'AROMA', 'HECHO CON AMOR',
];

export function initMarquee() {
  const m1 = document.getElementById('marquee1');
  const m2 = document.getElementById('marquee2');
  if (!m1 || !m2) return;
  const repeated = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  const html = repeated.map((w) => `<span class="marquee-item">${w}</span>`).join('');
  m1.innerHTML = html;
  m2.innerHTML = html;
}
