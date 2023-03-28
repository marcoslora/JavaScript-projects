import { Router } from 'express';
import {
  create,
  remove,
  retrieve,
  retrieveById,
  update,
} from '../controllers/personaje.controller';

export const personajeRoute = Router();

personajeRoute.get('/', retrieve);
personajeRoute.get('/:id', retrieveById);
personajeRoute.post('/', create);
personajeRoute.put('/:id', update);
personajeRoute.delete('/:id', remove);
