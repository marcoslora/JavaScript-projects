import { Router } from 'express';
import {
  getAll,
  getByName,
  create,
  remove,
  update,
  getById,
} from './controller';
import { check } from 'express-validator';
import validator from '../../validator/validator';

export const heroRoute = Router();

heroRoute.get('/', getAll);

heroRoute.get('/name/:heroName', getByName);

heroRoute.get(
  '/byId/:id',
  [
    check('id').isInt().withMessage('El id debe ser un numero entero'),
    validator,
  ],
  getById
);

heroRoute.post('/', create);

heroRoute.delete('/:id', remove);

heroRoute.put('/:id', update);
