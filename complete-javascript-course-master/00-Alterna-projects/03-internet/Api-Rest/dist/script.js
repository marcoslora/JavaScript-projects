'use strict';
//00-Alterna-projects/03-internet/Api-Rest
//http://127.0.0.1:5000/users
//client-server escuchar peticion request y server devuelve respuesta response
//application programming interface
//Primer parametro
const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, nombre: 'Pedro' },
  { id: 2, nombre: 'Carlos' },
  { id: 3, nombre: 'Josefa' },
  { id: 4, nombre: 'Jose' },
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
  const id = req.params.id;
  const user = users.find(u => u.id === parseInt(id));
  console.log(user);
  res.json(user);
});
//Crear res.status(201).send('<h1>Hola users</h1>')
app.post('/users', function (req, res) {
  const { id, nombre } = req.body;
  const userTest = users.find(u => {
    return u.id === id || u.nombre === nombre;
  });
  if ((id && nombre) || nombre.trim() !== '') {
    if (userTest) {
      res.status(406).send('Este usuario o Id ya esta en uso, utilice otro');
    } else {
      users.push({ id, nombre });
      res.json({ id, nombre });
    }
  } else {
    res.status(406).json({ Error: 'Faltan datos' });
  }
});
//Actualizar
app.put('/users/:id', function (req, res) {
  const id = req.params.id;
  const { nombre } = req.body;
  users[id].nombre = nombre;
  res.json(users);
});
app.delete('/users/:id', function (req, res) {
  const { id } = req.params;
  delete users[id];
  res.json(users);
});
app.listen(5000);
