const ITEMS = [
  'Espresso',
  'Cappuccino',
  'Pastelería Artesanal',
  'Desayunos',
  'Café de Origen',
  'Postres',
  'Frappé',
  'Catering & Eventos',
];

export function initTicker() {
  const container = document.getElementById('tickerInner');
  if (!container) return;
  const items = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  container.innerHTML = items
    .map((t) => `<span class="ticker-item"><span class="ticker-dot">&#183;</span>${t}</span>`)
    .join('');
}
