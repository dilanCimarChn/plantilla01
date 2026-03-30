import { db }        from '../firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function initForm() {
  const form   = document.getElementById('contactForm');
  const submit = form?.querySelector('.form-submit');
  if (!form || !submit) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const span = submit.querySelector('span');
    const svg  = submit.querySelector('svg');

    // Loading state
    submit.disabled = true;
    if (span) span.textContent = 'Enviando...';

    const data = {
      nombre:   form.nombre.value.trim(),
      email:    form.email.value.trim(),
      telefono: form.telefono.value.trim(),
      servicio: form.servicio.value,
      mensaje:  form.mensaje.value.trim(),
      fecha:    serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'contactos'), data);

      // Success state
      submit.classList.add('is-success');
      if (span) span.textContent = '✓ Mensaje enviado — Te contactaremos pronto';
      if (svg)  svg.style.display = 'none';

      setTimeout(() => {
        submit.classList.remove('is-success');
        submit.disabled = false;
        if (span) span.textContent = 'Enviar Mensaje';
        if (svg)  svg.style.display = '';
        form.reset();
      }, 4500);

    } catch (err) {
      console.error('Error al enviar:', err);
      submit.disabled = false;
      if (span) span.textContent = 'Error — Intenta de nuevo';
      setTimeout(() => {
        if (span) span.textContent = 'Enviar Mensaje';
      }, 3000);
    }
  });
}
