const WORDS = [
  'CAFÉ ARTESANAL', 'SABOR', 'ORIGEN', 'CALIDEZ',
  'PASIÓN', 'TRADICIÓN', 'AROMA', 'HECHO A MANO',
];

export function initMarquee() {
  const track = document.getElementById('marquee1');
  if (!track) return;
  // 4 copies → xPercent:-50 loops seamlessly (see strip.js)
  const repeated = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  track.innerHTML = repeated
    .map((w) => `<span class="marquee-item">${w}<span class="marquee-star">✦</span></span>`)
    .join('');
}
