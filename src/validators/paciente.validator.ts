// Exemplo: src/validation/pacienteSchema.ts

import { z } from "zod";

// --- Esquema de Criação de Paciente ---
export const pacienteCreateSchema = z.object({
    // Validação do Nome: obrigatório e mínimo de 3 caracteres
    nome: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
    
    // Validação do Email: obrigatório e formato de email válido
    email: z.string().email("Email inválido."),
    
    // Validação do CPF: obrigatório e exatamente 11 caracteres
    cpf: z.string().length(11, "O CPF deve ter 11 dígitos."),
    
    // Validação do Telefone: opcional (String ou null)
    telefone: z.string().optional().nullable(),
    
    // Validação da Data de Nascimento: string de data válida (YYYY-MM-DD)
    dataNascimento: z.string().refine((str) => !isNaN(Date.parse(str)), {
        message: "Data de nascimento inválida (use o formato YYYY-MM-DD).",
    }).transform((str) => new Date(str)), // Transforma a string em objeto Date

    // Outros campos de Paciente...
});


// --- Esquema de Atualização de Paciente ---
// Torna todos os campos opcionais (partial)
export const pacienteUpdateSchema = pacienteCreateSchema.partial();