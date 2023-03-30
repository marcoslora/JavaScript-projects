import { Router } from 'express';
import {
  create,
  remove,
  retrieve,
  retrieveById,
  update,
  retrieveByName,
} from '../controllers/personaje.controller';

export const personajeRoute = Router();

personajeRoute.get('/', retrieve);
personajeRoute.get('/:id', retrieveById);
personajeRoute.get('/name/:name', retrieveByName);
personajeRoute.post('/', create);
personajeRoute.put('/:id', update);
personajeRoute.delete('/:id', remove);
