import { z } from "zod";

export const dentistaCreateSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  cro: z.string().min(5, "CRO deve ter pelo menos 5 caracteres").max(10, "CRO deve ter no máximo 10 caracteres"),
  especialidade: z.string().min(3, "Especialidade deve ter pelo menos 3 caracteres"),
  email: z.string().email("Formato de e-mail inválido"),
  telefone: z.string().optional(),
});

export const dentistaUpdateSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").optional(),
  cro: z.string().min(5, "CRO deve ter pelo menos 5 caracteres").max(10, "CRO deve ter no máximo 10 caracteres").optional(),
  especialidade: z.string().min(3, "Especialidade deve ter pelo menos 3 caracteres").optional(),
  email: z.string().email("Formato de e-mail inválido").optional(),
  telefone: z.string().optional(),
});
