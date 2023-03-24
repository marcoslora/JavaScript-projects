import express from 'express';
import { heroeRoute } from './src/heroe/routes';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/heroe', heroeRoute);

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
