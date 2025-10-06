import { Router } from 'express';
import secretarioController from '../controllers/secretarioController';

const secretarioRoutes = Router();

secretarioRoutes.post('/', secretarioController.create);
secretarioRoutes.get('/', secretarioController.getAll);
secretarioRoutes.get('/:id', secretarioController.getById);
secretarioRoutes.put('/:id', secretarioController.update);
secretarioRoutes.delete('/:id', secretarioController.delete);

export default secretarioRoutes;