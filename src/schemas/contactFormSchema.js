import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Digite pelo menos 3 caracteres no nome')
    .max(80, 'O nome deve ter no máximo 80 caracteres'),
  email: z
    .string()
    .trim()
    .email('Digite um e-mail válido')
    .max(120, 'O e-mail deve ter no máximo 120 caracteres'),
  message: z
    .string()
    .trim()
    .min(10, 'A mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'A mensagem deve ter no máximo 2000 caracteres'),
});
