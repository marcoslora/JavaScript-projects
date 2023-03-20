"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/', function (req, res) {
    res.send('Hello Worlds');
});
app.listen(port, () => {
    console.log(`port ${port}`);
});