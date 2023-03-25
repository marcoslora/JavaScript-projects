import { Request, Response } from 'express';
import { AppDataSource } from '../../datasource';
import { Hero } from '../models/hero.entity';

const heroRepository = AppDataSource.getRepository(Hero);
export const getAll = async (req: Request, res: Response) => {
  try {
    const heroes = await heroRepository.find();
    return res.json(heroes);
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
    const hero = await heroRepository.findOneBy({ id: Number.parseInt(id) });
    if (!hero) {
      return res.status(404).json({
        message: 'Super Hero Not Found',
      });
    }
    return res.json(hero);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error',
    });
  }
};
export const getByName = async (req: Request, res: Response) => {
  const { heroName } = req.params;
  try {
    const hero = await heroRepository.findOneBy({ heroName });
    if (!hero) {
      return res.status(404).json({
        message: 'Super Hero Not Found',
      });
    }
    return res.json(hero);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error',
    });
  }
};

export const create = async (req: Request, res: Response) => {
  const { heroName, firstName } = req.body;
  const oldHero = await heroRepository.findOneBy({ heroName });
  if (oldHero) {
    return res.status(400).json({
      message: 'Super Hero Already Exists',
    });
  }
  const newHero = heroRepository.create({ heroName, firstName });
  const hero = await heroRepository.save(newHero);
  res.json(hero);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const hero = await heroRepository.findOneBy({ id: Number.parseInt(id) });
    if (!hero) {
      return res.status(404).json({
        message: 'Super Hero Not Found',
      });
    }
    await heroRepository.delete(hero);
    return res.json({
      message: 'Super Hero Deleted',
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
  const { heroName, firstName } = req.body;

  const heroById = await heroRepository.findOneBy({ id: Number.parseInt(id) });

  if (!heroById) {
    return res.status(404).json({
      message: `Hero with id ${id} not found`,
    });
  }

  if (heroName) {
    const oldHero = await heroRepository.findOneBy({ heroName });

    if (oldHero && oldHero.id !== Number.parseInt(id)) {
      return res.status(400).json({
        message: `Hero ${heroName} already exists`,
      });
    }
  }

  const updatedHero = heroRepository.create({
    id: heroById.id,
    heroName: heroName ? heroName : heroById.heroName,
    firstName: firstName ? firstName : heroById.firstName,
  });

  await heroRepository.save(updatedHero);

  res.json(updatedHero);
};
