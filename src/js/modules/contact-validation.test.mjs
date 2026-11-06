import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm } from './contact-validation.mjs';

test('requires a trimmed name and valid email', () => {
  assert.deepEqual(validateContactForm({ nombre: '  ', email: 'not-an-email' }), {
    nombre: 'Escribe tu nombre.', email: 'Escribe un correo válido.',
  });
});

test('accepts a valid contact without optional fields', () => {
  assert.deepEqual(validateContactForm({ nombre: 'Dilan', email: 'dilan@example.com' }), {});
});

test('allows an optional phone but rejects too few digits', () => {
  assert.deepEqual(validateContactForm({ nombre: 'Ana', email: 'ana@example.com', telefono: '123' }), {
    telefono: 'El teléfono debe tener entre 7 y 15 dígitos.',
  });
  assert.deepEqual(validateContactForm({ nombre: 'Ana', email: 'ana@example.com', telefono: '+591 7777-7777' }), {});
});

test('rejects overlong user supplied fields', () => {
  assert.deepEqual(validateContactForm({ nombre: 'N'.repeat(101), email: 'a@b.com', mensaje: 'x'.repeat(2001) }), {
    nombre: 'El nombre no puede superar 100 caracteres.',
    mensaje: 'El mensaje no puede superar 2000 caracteres.',
  });
});
