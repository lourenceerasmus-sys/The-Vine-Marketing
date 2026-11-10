// General enquiry form: inline validation, and an honest message while the
// VanX form URL has not been connected yet.

import { contact } from '../config/site';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function fieldValid(input: HTMLInputElement | HTMLTextAreaElement) {
  if (input instanceof HTMLInputElement && input.type === 'checkbox') return input.checked;
  const value = input.value.trim();
  if (!value) return false;
  if (input.type === 'email') return emailPattern.test(value);
  if (input.type === 'tel') return value.replace(/\D/g, '').length >= 9;
  return true;
}

function showError(input: HTMLInputElement | HTMLTextAreaElement, show: boolean) {
  const error = document.getElementById(`${input.id}-error`);
  if (!error) return;
  error.hidden = !show;
  input.setAttribute('aria-invalid', String(show));
  if (show) input.setAttribute('aria-describedby', error.id);
  else input.removeAttribute('aria-describedby');
}

export function initEnquiryForm() {
  const form = document.querySelector<HTMLFormElement>('[data-enquiry]');
  const status = form?.querySelector<HTMLElement>('[data-form-status]');
  if (!form || !status) return;
  const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'));

  fields.forEach((input) => {
    input.addEventListener('blur', () => {
      if (input.getAttribute('aria-invalid') === 'true' || (input.type !== 'checkbox' && input.value)) {
        showError(input, !fieldValid(input));
      }
    });
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') showError(input, !fieldValid(input));
    });
  });

  form.addEventListener('submit', (event) => {
    const invalid = fields.filter((input) => !fieldValid(input));
    fields.forEach((input) => showError(input, invalid.includes(input)));
    if (invalid.length) {
      event.preventDefault();
      status.dataset.state = 'error';
      status.textContent = 'Please check the highlighted fields.';
      invalid[0].focus();
      return;
    }
    if (form.dataset.connected !== 'true') {
      event.preventDefault();
      status.dataset.state = 'error';
      status.textContent = `This form isn’t connected yet. Please WhatsApp us on ${contact.whatsappDisplay} or email ${contact.email}.`;
      return;
    }
    status.dataset.state = 'sending';
    status.textContent = 'Sending…';
    form.querySelector('button[type="submit"]')?.setAttribute('aria-disabled', 'true');
  });
}
