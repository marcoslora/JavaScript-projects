import { DataSource } from 'typeorm';
import { User } from './entities/User';

interface DataSourceOptions {
  fallbackToDefaultDb?: boolean;
  trustServerCertificate?: boolean;
  encrypt?: boolean;
}
const options: DataSourceOptions = {
  encrypt: true,
  trustServerCertificate: true,
};

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'Sa123456',
  database: 'typeormdb',
  logging: true,
  synchronize: true,
  entities: [User],
  options: options,
});
