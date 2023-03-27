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
const villian_entity_1 = require("../models/villian.entity");
const villainRepository = datasource_1.AppDataSource.getRepository(villian_entity_1.Villain);
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const villains = yield villainRepository.find();
        return res.json(villains);
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
        const villain = yield villainRepository.findOneBy({
            id: Number.parseInt(id),
        });
        if (!villain) {
            return res.status(404).json({
                message: 'Super villain Not Found',
            });
        }
        return res.json(villain);
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
    const { villainName } = req.params;
    try {
        const villain = yield villainRepository.findOneBy({ villainName });
        if (!villain) {
            return res.status(404).json({
                message: 'Super villain Not Found',
            });
        }
        return res.json(villain);
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
    const { villainName, firstName } = req.body;
    const oldHero = yield villainRepository.findOneBy({ villainName });
    if (oldHero) {
        return res.status(400).json({
            message: 'Super villain Already Exists',
        });
    }
    const newHero = villainRepository.create({ villainName, firstName });
    const villain = yield villainRepository.save(newHero);
    res.json(villain);
});
exports.create = create;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const villain = yield villainRepository.findOneBy({
            id: Number.parseInt(id),
        });
        if (!villain) {
            return res.status(404).json({
                message: 'Super villain Not Found',
            });
        }
        yield villainRepository.delete(villain);
        return res.json({
            message: 'Super villain Deleted',
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
    const { villainName, firstName } = req.body;
    const heroById = yield villainRepository.findOneBy({
        id: Number.parseInt(id),
    });
    if (!heroById) {
        return res.status(404).json({
            message: `villain with id ${id} not found`,
        });
    }
    if (villainName) {
        const oldHero = yield villainRepository.findOneBy({ villainName });
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
    yield villainRepository.save(updatedHero);
    res.json(updatedHero);
});
exports.update = update;
