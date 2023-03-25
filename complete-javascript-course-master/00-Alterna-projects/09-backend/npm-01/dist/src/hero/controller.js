"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.remove = exports.create = exports.getByName = exports.getById = exports.getAll = void 0;
const datasource_1 = require("../../datasource");
const hero_entity_1 = require("../models/hero.entity");
const heroRepository = datasource_1.AppDataSource.getRepository(hero_entity_1.Hero);
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const heroes = yield heroRepository.find();
        return res.json(heroes);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error',
        });
    }
});
exports.getAll = getAll;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const hero = yield heroRepository.findOneBy({ id: Number.parseInt(id) });
        if (!hero) {
            return res.status(404).json({
                message: 'Super Hero Not Found',
            });
        }
        return res.json(hero);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error',
        });
    }
});
exports.getById = getById;
const getByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { heroName } = req.params;
    try {
        const hero = yield heroRepository.findOneBy({ heroName });
        if (!hero) {
            return res.status(404).json({
                message: 'Super Hero Not Found',
            });
        }
        return res.json(hero);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error',
        });
    }
});
exports.getByName = getByName;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { heroName, firstName } = req.body;
    const oldHero = yield heroRepository.findOneBy({ heroName });
    if (oldHero) {
        return res.status(400).json({
            message: 'Super Hero Already Exists',
        });
    }
    const newHero = heroRepository.create({ heroName, firstName });
    const hero = yield heroRepository.save(newHero);
    res.json(hero);
});
exports.create = create;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const hero = yield heroRepository.findOneBy({ id: Number.parseInt(id) });
        if (!hero) {
            return res.status(404).json({
                message: 'Super Hero Not Found',
            });
        }
        yield heroRepository.delete(hero);
        return res.json({
            message: 'Super Hero Deleted',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error',
        });
    }
});
exports.remove = remove;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { heroName, firstName } = req.body;
    const heroById = yield heroRepository.findOneBy({ id: Number.parseInt(id) });
    if (!heroById) {
        return res.status(404).json({
            message: `Hero with id ${id} not found`,
        });
    }
    if (heroName) {
        const oldHero = yield heroRepository.findOneBy({ heroName });
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
    yield heroRepository.save(updatedHero);
    res.json(updatedHero);
});
exports.update = update;
