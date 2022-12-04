const { Router } = require('express');
const router = Router();

const movies = require('./dataApi.json');
router.get('/', (req, res) => {
  res.json(movies);
});

router.post('/', (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    //...req.body toma todos los datos q estan en request body
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.send('Faltan datos');
  }
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const userDelete = movies.find(u => u.id === parseInt(id));
  console.log(userDelete);
  res.send(movies);
  //const {} = req.params;
});

module.exports = router;
