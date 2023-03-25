import express from 'express';
import { heroRoute } from './src/hero/routes';
import { villainRoute } from './src/villain/routes';
import { AppDataSource } from './datasource';
const port = 3000;
const app = express();

app.use(express.json());

app.use('/hero', heroRoute);
app.use('/villains', villainRoute);

function main() {
  AppDataSource.initialize() // This connects to the database
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
