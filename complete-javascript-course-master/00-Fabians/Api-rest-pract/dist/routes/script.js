//Poner las rutas en otras carpeta
const { Router } = require('express');
const router = Router();
//http://127.0.0.1:3000/test
router.get('/', (req, res) => {
  res.json({ Nombre: 'Marcos' });
});

router.get('/test1', (req, res) => {
  const data = { Nombre: 'Marcos', website: 'google' };
  res.json(data);
});

module.exports = router;
