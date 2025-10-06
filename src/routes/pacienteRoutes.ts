// src/routes/pacienteRoutes.ts

import { Router } from 'express';
import { PacienteController } from '../controllers/pacienteController'; 
import { validate } from '../middlewares/validationMiddleware'; 

// ATENÇÃO: Corrigimos o caminho de 'validation' para 'validators'
import { pacienteCreateSchema } from '../validators/pacienteSchema'; 


// 1. Apenas UMA declaração para cada variável
const pacienteRoutes = Router();
const pacienteController = new PacienteController();


// 2. Aplicamos o validador Zod ANTES de chamar o Controller na rota POST
pacienteRoutes.post('/', validate(pacienteCreateSchema), pacienteController.create);

// O resto das suas rotas (não precisam de validação no corpo):
pacienteRoutes.get('/', pacienteController.findAll); 
pacienteRoutes.get('/:id', pacienteController.findById);
pacienteRoutes.put('/:id', pacienteController.update); 
pacienteRoutes.delete('/:id', pacienteController.delete); 

export default pacienteRoutes;