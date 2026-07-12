export const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || '';
export const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || '';
export const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || '';

export const EMAILJS_CONFIGURED =
  SERVICE_ID !== '' && TEMPLATE_ID !== '' && PUBLIC_KEY !== '';
