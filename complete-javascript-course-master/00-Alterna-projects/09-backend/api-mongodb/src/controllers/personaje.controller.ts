import { Request, Response } from 'express';
import { personajeModel } from '../models/personaje.entity';

export const retrieve = async (req: Request, res: Response) => {
  const personajes = await personajeModel.find();

  res.json(personajes);
};

export const retrieveById = (req: Request, res: Response) => {
  res.json('GetById');
};

export const create = (req: Request, res: Response) => {
  res.json('Create');
};

export const update = (req: Request, res: Response) => {
  res.json('Update');
};

export const remove = (req: Request, res: Response) => {
  res.json('Remove');
};
