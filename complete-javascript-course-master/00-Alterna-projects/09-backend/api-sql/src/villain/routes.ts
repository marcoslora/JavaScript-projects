import { Router } from 'express';
import {
  getAll,
  getByName,
  create,
  remove,
  update,
  getById,
} from './controller';

export const villainRoute = Router();

villainRoute.get('/', getAll);

villainRoute.get('/name/:villainName', getByName);

villainRoute.get('/:id', getById);

villainRoute.post('/', create);

villainRoute.delete('/:id', remove);

villainRoute.put('/:id', update);
