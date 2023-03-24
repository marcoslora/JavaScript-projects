import { Router } from 'express';
import {
  getAll,
  getByName,
  create,
  remove,
  update,
  getById,
} from './controller';

export const heroeRoute = Router();

heroeRoute.get('/', getAll);

heroeRoute.get('/name/:alte', getByName);

heroeRoute.get('/:id', getById);

heroeRoute.post('/', create);

heroeRoute.delete('/:id', remove);

heroeRoute.put('/:id', update);
