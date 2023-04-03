"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const hero_entity_1 = require("./src/models/hero.entity");
const villian_entity_1 = require("./src/models/villian.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'Sa',
    password: 'Sa123456',
    database: 'backendalterna',
    synchronize: true,
    entities: [hero_entity_1.Hero, villian_entity_1.Villain],
    logging: false,
    options: { encrypt: false },
});
