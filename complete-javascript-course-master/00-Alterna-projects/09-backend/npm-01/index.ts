import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

interface Heroe {
  id: number;
  nombre: string;
  alias: string;
}

const heroes = [
  { id: 1, nombre: 'Clark Kent', alias: 'SuperMan' },
  { id: 2, nombre: 'Bruno Diaz', alias: 'Batman' },
];
app.get('/', function (req: Request, res: Response) {
  res.send('Hello World');
});

app.get('/heroe', function (req: Request, res: Response) {
  res.json(heroes);
});
app.get('/heroe:nombre', function (req: Request, res: Response) {
  const nombre = req.params.nombre;
  const heroe = heroes.find(
    (hero: Heroe) => hero.nombre.toLowerCase() === nombre.toLowerCase()
  );
  res.json(heroe);
});
app.listen(port, () => {
  console.log(`port ${port}`);
});
