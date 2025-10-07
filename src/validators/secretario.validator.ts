import { z } from "zod";

export const secretarioCreateSchema = z.object({
  nome: z
    .string({ required_error: "O nome é obrigatório." })
    .min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z
    .string({ required_error: "O email é obrigatório." })
    .email("Email inválido."),
  telefone: z
    .string({ required_error: "O telefone é obrigatório." })
    .min(8, "Telefone inválido."),
});

 * ✅ Schema de atualização de Secretário
 * Permite atualização parcial (todos os campos opcionais).
 */
export const secretarioUpdateSchema = secretarioCreateSchema.partial();
