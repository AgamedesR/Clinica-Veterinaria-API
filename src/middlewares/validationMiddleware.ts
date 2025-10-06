// src/middlewares/validationMiddleware.ts

import { ZodObject } from "zod"; 
import { Request, Response, NextFunction } from "express";

// Função genérica que recebe o esquema (schema) e valida
export const validate = (schema: ZodObject<any>) => 
    (req: Request, res: Response, next: NextFunction) => {
        try {
            // Tenta analisar o corpo da requisição com o esquema Zod
            schema.parse(req.body); 
            next(); // Se a validação for bem-sucedida, segue para o Controller
        } catch (error: any) {
            // Se falhar, retorna 400 Bad Request com os detalhes do Zod
            return res.status(400).json({
                error: "Erro de validação de dados.",
                details: error.errors,
            });
        }
    };