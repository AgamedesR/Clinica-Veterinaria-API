import { Router } from 'express';
import { PacienteController } from '../controllers/pacienteController'; 

const pacienteRoutes = Router();
const pacienteController = new PacienteController();

pacienteRoutes.post('/', pacienteController.create);             
pacienteRoutes.get('/', pacienteController.findAll);             
pacienteRoutes.get('/:id', pacienteController.findById);         
pacienteRoutes.put('/:id', pacienteController.update);           
pacienteRoutes.delete('/:id', pacienteController.delete);        

export default pacienteRoutes;