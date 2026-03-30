const DATA = [
  {
    text: 'El mejor cappuccino de La Paz, sin duda. El ambiente es acogedor y el personal siempre sonríe. Ya es mi lugar favorito para trabajar por las mañanas.',
    name: 'Valeria M.',
    role: 'Diseñadora, cliente frecuente',
  },
  {
    text: 'Pedimos catering para el cumpleaños de mi hija y fue impecable. Las tortas estaban deliciosas y la atención superó todas nuestras expectativas.',
    name: 'Roberto S.',
    role: 'Padre de familia',
  },
  {
    text: 'El desayuno aquí es un ritual que no cambio por nada. Los croissants recién horneados y el café de origen son simplemente perfectos.',
    name: 'Camila T.',
    role: 'Emprendedora',
  },
  {
    text: 'Organizamos una reunión de equipo y el servicio fue extraordinario. Puntuales, deliciosos y muy profesionales. Todos quedaron encantados.',
    name: 'Diego F.',
    role: 'Gerente de Proyectos',
  },
  {
    text: 'Nunca pensé que un brownie pudiera emocionarme tanto. Cada postre es una obra de arte. Vengo cada viernes y no me arrepiento.',
    name: 'Lucía A.',
    role: 'Profesora universitaria',
  },
  {
    text: 'El espacio es precioso y el WiFi excelente. Paso horas trabajando aquí sin que me pesen. El frappé de caramelo es adictivo.',
    name: 'Andrés P.',
    role: 'Freelancer',
  },
];

function cardHTML(t) {
  return `
    <div class="testimonial-card">
      <div class="testimonial-stars" aria-label="5 estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar" aria-hidden="true">${t.name[0]}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `;
}

export function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
  track.innerHTML = [...DATA, ...DATA].map(cardHTML).join('');
}
