import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: '<M@rcos0625.>',
  database: 'typeormdb',
  synchronize: true,
  logging: true,
  entities: [],
});
