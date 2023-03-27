import { Router } from 'express';
import {
  getAll,
  getByName,
  create,
  remove,
  update,
  getById,
} from './controller';

export const heroRoute = Router();

heroRoute.get('/', getAll);

heroRoute.get('/name/:heroName', getByName);

heroRoute.get('/:id', getById);

heroRoute.post('/', create);

heroRoute.delete('/:id', remove);

heroRoute.put('/:id', update);
