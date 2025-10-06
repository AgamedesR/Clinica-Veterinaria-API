// src/routes/pacienteRoutes.ts

import { Router } from 'express';
import { PacienteController } from '../controllers/pacienteController'; 


// 1. Apenas UMA declaração para cada variável
const pacienteRoutes = Router();
const pacienteController = new PacienteController();

pacienteRoutes.post('/', pacienteController.create);

// O resto das suas rotas (não precisam de validação no corpo):
pacienteRoutes.get('/', pacienteController.findAll); 
pacienteRoutes.get('/:id', pacienteController.findById);
pacienteRoutes.put('/:id', pacienteController.update); 
pacienteRoutes.delete('/:id', pacienteController.delete); 

export default pacienteRoutes;