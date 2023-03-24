import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Heroe } from './src/models/heroe.entity';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: '<M@rcos0625.>',
  database: 'backendalterna',
  entities: [Heroe],
  logging: false,
  options: { encrypt: false },
});

AppDataSource.initialize()
  .then(() => {
    console.log('Conecticion establecida');
  })
  .catch(error => console.log(error));
