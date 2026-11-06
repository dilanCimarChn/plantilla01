import { db }        from '../firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { validateContactForm } from './contact-validation.mjs';

export function initForm() {
  const form   = document.getElementById('contactForm');
  const submit = form?.querySelector('.form-submit');
  if (!form || !submit) return;
  const status = form.querySelector('[data-form-status]');

  form.addEventListener('input', (event) => {
    if (event.target.name) event.target.removeAttribute('aria-invalid');
    if (status) status.textContent = '';
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(form).entries());
    const errors = validateContactForm(values);
    for (const field of form.querySelectorAll('[name]')) {
      if (errors[field.name]) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
    }
    if (Object.keys(errors).length) {
      if (status) status.textContent = 'Revisa los campos marcados antes de enviar.';
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const span = submit.querySelector('span');
    const svg  = submit.querySelector('svg');

    // Loading state
    submit.disabled = true;
    if (span) span.textContent = 'Enviando...';

    const data = {
      nombre:   String(values.nombre ?? '').trim(),
      email:    String(values.email ?? '').trim(),
      telefono: String(values.telefono ?? '').trim(),
      servicio: String(values.servicio ?? ''),
      mensaje:  String(values.mensaje ?? '').trim(),
      fecha:    serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'contactos'), data);

      // Success state
      submit.classList.add('is-success');
      if (span) span.textContent = '✓ Mensaje enviado — Te contactaremos pronto';
      if (svg)  svg.style.display = 'none';
      if (status) status.textContent = 'Mensaje enviado. Te contactaremos pronto.';

      setTimeout(() => {
        submit.classList.remove('is-success');
        submit.disabled = false;
        if (span) span.textContent = 'Enviar Mensaje';
        if (svg)  svg.style.display = '';
        if (status) status.textContent = '';
        form.reset();
      }, 4500);

    } catch (err) {
      console.error('No se pudo enviar la consulta.', err);
      submit.disabled = false;
      if (span) span.textContent = 'Error — Intenta de nuevo';
      if (status) status.textContent = 'No se pudo enviar. Verifica tu conexión e inténtalo de nuevo.';
      setTimeout(() => {
        if (span) span.textContent = 'Enviar Mensaje';
      }, 3000);
    }
  });
}
