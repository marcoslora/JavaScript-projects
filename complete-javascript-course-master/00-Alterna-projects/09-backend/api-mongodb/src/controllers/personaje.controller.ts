import { Request, Response } from 'express';
import { personajeModel } from '../models/personaje.entity';

export const retrieve = async (req: Request, res: Response) => {
  const personajes = await personajeModel.find();

  res.json(personajes);
};

export const retrieveById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const personaje = await personajeModel.findById(id);
  res.json(personaje);
};
export const retrieveByName = async (req: Request, res: Response) => {
  const name = req.params.name;

  if (!name) {
    return res.status(400).json({ message: 'Name parameter is required' });
  }

  try {
    const personaje = await personajeModel.findOne({ name: name });
    if (!personaje) {
      return res.status(404).json({ message: 'Personaje not found' });
    }
    res.json(personaje);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving personaje by name' });
  }
};
export const create = async (req: Request, res: Response) => {
  const { name, alte, role } = req.body;
  try {
    const personaje = await personajeModel.create({ name, alte, role });
    res.status(201).json(personaje);
  } catch (error) {
    res.status(500).json({ message: 'Error creating character' });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, alte, role } = req.body;

  const newDataPersonaje = { nombre, alte, role };

  const updatedPersonaje = await personajeModel.findByIdAndUpdate(
    id,
    newDataPersonaje
  );

  res.json(newDataPersonaje);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  const removedPersonaje = await personajeModel.findByIdAndRemove(id);
  // const removedPersonaje1 = await personajeModel.findByIdAndDelete(id);
  res.json(removedPersonaje);
};
