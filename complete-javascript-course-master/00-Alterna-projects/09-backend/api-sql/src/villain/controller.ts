import { Request, Response } from 'express';
import { AppDataSource } from '../../datasource';
import { Villain } from '../models/villian.entity';

const villainRepository = AppDataSource.getRepository(Villain);
export const getAll = async (req: Request, res: Response) => {
  try {
    const villains = await villainRepository.find();
    return res.json(villains);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error',
    });
  }
};
export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const villain = await villainRepository.findOneBy({
      id: Number.parseInt(id),
    });
    if (!villain) {
      return res.status(404).json({
        message: 'Super villain Not Found',
      });
    }
    return res.json(villain);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error',
    });
  }
};
export const getByName = async (req: Request, res: Response) => {
  const { villainName } = req.params;
  try {
    const villain = await villainRepository.findOneBy({ villainName });
    if (!villain) {
      return res.status(404).json({
        message: 'Super villain Not Found',
      });
    }
    return res.json(villain);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error',
    });
  }
};

export const create = async (req: Request, res: Response) => {
  const { villainName, firstName } = req.body;
  const oldHero = await villainRepository.findOneBy({ villainName });
  if (oldHero) {
    return res.status(400).json({
      message: 'Super villain Already Exists',
    });
  }
  const newHero = villainRepository.create({ villainName, firstName });
  const villain = await villainRepository.save(newHero);
  res.json(villain);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const villain = await villainRepository.findOneBy({
      id: Number.parseInt(id),
    });
    if (!villain) {
      return res.status(404).json({
        message: 'Super villain Not Found',
      });
    }
    await villainRepository.delete(villain);
    return res.json({
      message: 'Super villain Deleted',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error',
    });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { villainName, firstName } = req.body;

  const heroById = await villainRepository.findOneBy({
    id: Number.parseInt(id),
  });

  if (!heroById) {
    return res.status(404).json({
      message: `villain with id ${id} not found`,
    });
  }

  if (villainName) {
    const oldHero = await villainRepository.findOneBy({ villainName });

    if (oldHero && oldHero.id !== Number.parseInt(id)) {
      return res.status(400).json({
        message: `villain ${villainName} already exists`,
      });
    }
  }

  const updatedHero = villainRepository.create({
    id: heroById.id,
    villainName: villainName ? villainName : heroById.villainName,
    firstName: firstName ? firstName : heroById.firstName,
  });

  await villainRepository.save(updatedHero);

  res.json(updatedHero);
};
