const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

/** Validate the contact payload before sending it to Firestore. */
export function validateContactForm(values) {
  const errors = {};
  const name = String(values.nombre ?? '').trim();
  const email = String(values.email ?? '').trim();
  const phone = String(values.telefono ?? '').trim();
  const message = String(values.mensaje ?? '').trim();

  if (!name) errors.nombre = 'Escribe tu nombre.';
  else if (name.length > 100) errors.nombre = 'El nombre no puede superar 100 caracteres.';

  if (!email) errors.email = 'Escribe tu correo.';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Escribe un correo válido.';

  const phoneDigits = phone.replace(/[^\d]/gu, '');
  if (phone && (phoneDigits.length < 7 || phoneDigits.length > 15)) {
    errors.telefono = 'El teléfono debe tener entre 7 y 15 dígitos.';
  }

  if (message.length > 2000) errors.mensaje = 'El mensaje no puede superar 2000 caracteres.';
  return errors;
}
