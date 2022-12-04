'use strict';
//00-Alterna-projects/03-internet/Api-Rest
//http://127.0.0.1:5000/
//Primer parametro
const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, nombre: 'Pedro' },
  { id: 2, nombre: 'Carlos' },
  { id: 3, nombre: 'Josefa' },
  { id: 4, nombre: 'Joselito' },
];

//Rutas para clientes
//Request solo lo puede ejecutar el navegador
// se utiliza status() para devolver una respuestas
//send se utiliza para enviar html
//res.status(200).send('<h1>Hola users get</h1>');

app.get('/users', function (req, res) {
  res.json(users);
});
app.get('/users/:id', function (req, res) {
  //Destructuring
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  console.log(user);
  res.json(user);
});
//Crear res.status(201).send('<h1>Hola users</h1>')
app.post('/users', function (req, res) {
  if (users.find(u => u.id === parseInt(id))) {
    const { id, nombre } = req.body;
    users.push({ id, nombre });
    res.json({ id, nombre });
  }
});
//Actualizar
app.put('/users', function (req, res) {
  res.send('<h1>Hola users put</h1>');
});
app.delete('/users', function (req, res) {
  res.send('<h1>Hola users delete</h1>');
});
app.listen(5000);
