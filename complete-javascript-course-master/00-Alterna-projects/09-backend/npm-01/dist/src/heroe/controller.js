"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.remove = exports.create = exports.getById = exports.getByName = exports.getAll = void 0;
const heroes = [];
let _id = 0;
const getAll = (req, res) => {
    return res.json(heroes);
};
exports.getAll = getAll;
const getByName = (req, res) => {
    const alte = req.params.alte;
    const heroe = heroes.find((hero) => hero.alte.toLowerCase() === alte.toLowerCase());
    if (!heroe) {
        return res.status(404).json({
            message: 'Super Hero Not Found',
        });
    }
    res.json(heroe);
};
exports.getByName = getByName;
const getById = (req, res) => {
    const { id } = req.params;
    const heroe = heroes.find(hero => hero.id === parseInt(id));
    if (!heroe) {
        return res.status(404).json({
            message: 'Super Hero Not Found',
        });
    }
    res.json(heroe);
};
exports.getById = getById;
const create = (req, res) => {
    const { alte, nombre } = req.body;
    const hero = heroes.find(hero => hero.alte === alte);
    if (hero) {
        return res.status(400).json({
            message: `The hero ${alte} already exist`,
        });
    }
    _id += 1;
    const newHero = {
        id: _id,
        nombre,
        alte,
    };
    heroes.push(newHero);
    res.status(201).json(newHero);
};
exports.create = create;
const remove = (req, res) => {
    const { id } = req.params;
    const index = heroes.findIndex(hero => hero.id === parseInt(id));
    if (index < 0) {
        return res.status(404).json(`The hero ID ${id} not found`);
    }
    const hero = heroes.splice(index, 1);
    res.json(hero);
};
exports.remove = remove;
const update = (req, res) => {
    const { alte, nombre } = req.body;
    const { id } = req.params;
    const hero = heroes.find(hero => hero.id === Number.parseInt(id));
    if (!hero) {
        return res.status(401).json({
            message: `The hero ${alte} not found`,
        });
    }
    hero.alte = alte !== undefined ? alte : hero.alte;
    hero.nombre = nombre !== undefined ? nombre : hero.alte;
    res.json(hero);
};
exports.update = update;
