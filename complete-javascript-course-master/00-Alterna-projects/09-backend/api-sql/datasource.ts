import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Hero } from './src/models/hero.entity';
import { Villain } from './src/models/villian.entity';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'Sa',
  password: 'Sa123456',
  database: 'backendalterna',
  synchronize: true,
  entities: [Hero, Villain],
  logging: false,
  options: { encrypt: false },
});
