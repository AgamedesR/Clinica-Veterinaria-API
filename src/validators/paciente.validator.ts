import { z } from "zod";

export const pacienteCreateSchema = z.object({
  nome: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
  email: z.string().email("Email inválido."),
  cpf: z.string().length(11, "O CPF deve ter 11 dígitos."),
  telefone: z.string().optional().nullable(),
  dataNascimento: z
    .string()
    .refine((str) => !isNaN(Date.parse(str)), {
      message: "Data de nascimento inválida (use o formato YYYY-MM-DD).",
    })
    .transform((str) => new Date(str)),
});

export const pacienteUpdateSchema = pacienteCreateSchema.partial();