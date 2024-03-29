import express from 'express';
import { personajeRoute } from './routes/personaje.route';
import { dbConnection } from '../db-config';
import 'reflect-metadata';
import morgan from 'morgan';

const port = 3000;
const app = express();
app.use(morgan('dev'));
app.use(express.json());

dbConnection();

app.get('/', (req: any, res: any) => {
  res.json('ok');
});

app.use('/personaje', personajeRoute);

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
