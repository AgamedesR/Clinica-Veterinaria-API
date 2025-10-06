// src/routes/pacienteRoutes.ts

import { Router } from 'express';
// NOVO: Importa o objeto estático 'pacienteController'
import { pacienteController } from '../controllers/pacienteController'; 
// Importe seu middleware de validação se estiver usando-o globalmente. Ex:
// import { validate } from '../middlewares/validationMiddleware'; 
// import { pacienteCreateSchema } from '../validators/paciente.validator'; 

// PADRÃO: Usa 'router' em vez de 'pacienteRoutes'
const router = Router();

router.get("/", pacienteController.getAll);
router.get("/:id", pacienteController.getById);

// 2. Rota POST (Criação)
router.post("/", pacienteController.create);

// 3. Rota PUT (Atualização)
// Usamos o método 'update' definido no objeto pacienteController
router.put("/:id", pacienteController.update); 

// 4. Rota DELETE (Remoção)
// Usamos o método 'remove' definido no objeto pacienteController (que substitui 'delete')
router.delete("/:id", pacienteController.remove); 
export default router;