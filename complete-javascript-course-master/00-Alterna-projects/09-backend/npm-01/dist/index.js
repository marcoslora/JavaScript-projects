"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const heroes = [
    {
        id: 1,
        nombre: 'Bruce Wayne',
        alte: 'Batman',
    },
    {
        id: 2,
        nombre: 'Damian Wayne',
        alte: 'Robin',
    },
    {
        id: 3,
        nombre: 'Clark Kent',
        alte: 'SuperMan',
    },
];
app.get('/heroe', (req, res) => {
    res.json(heroes);
});
app.get('/heroe/:alte', (req, res) => {
    const alte = req.params.alte;
    const heroe = heroes.find((hero) => hero.alte.toLowerCase() === alte.toLowerCase());
    if (!heroe) {
        return res.status(404).json({
            message: 'Super Hero Not Found',
        });
    }
    res.json(heroe);
});
app.get('/heroesearch/:alte', (req, res) => {
    const inputF = req.params.alte;
    const heroe = heroes.filter((t) => t.alte.startsWith(inputF));
    if (!heroe) {
        return res.status(404).json({
            message: 'Super Hero Not Found',
        });
    }
    res.json(heroe);
});
app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
