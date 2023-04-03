"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroRoute = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const express_validator_1 = require("express-validator");
const validator_1 = __importDefault(require("../../validator/validator"));
exports.heroRoute = (0, express_1.Router)();
exports.heroRoute.get('/', controller_1.getAll);
exports.heroRoute.get('/name/:heroName', controller_1.getByName);
exports.heroRoute.get('/byId/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El id debe ser un numero entero'),
    validator_1.default,
], controller_1.getById);
exports.heroRoute.post('/', controller_1.create);
exports.heroRoute.delete('/:id', controller_1.remove);
exports.heroRoute.put('/:id', controller_1.update);
