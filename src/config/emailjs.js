// Only publishable EmailJS identifiers belong in this frontend configuration.
// Keep the recipient fixed in the provider template; see docs/contact-setup.md.
export const EMAILJS_CONFIG = {
  serviceId: (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim(),
  templateId: (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim(),
  publicKey: (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim(),
};

export const PUBLIC_CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || '').trim();

export function isEmailJSConfigured() {
  return Boolean(EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey);
}
