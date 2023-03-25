"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./src/hero/routes");
const routes_2 = require("./src/villain/routes");
const datasource_1 = require("./datasource");
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/hero', routes_1.heroRoute);
app.use('/villains', routes_2.villainRoute);
function main() {
    datasource_1.AppDataSource.initialize() // This connects to the database
        .then(() => {
        console.log('Database is connected');
        app.listen(port); // This starts the server on port 3000
        console.log('Server is listening on port', port);
    })
        .catch(error => {
        console.log(error); // This catches any errors
    });
}
main();
