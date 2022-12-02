'use strict';
//00-Alterna-projects/03-internet/Api-Rest
//http://127.0.0.1:5000/
//Primer parametro
const express = require('express');
const app = express();

//Rutas para clientes
//Request solo lo puede ejecutar el navegador
// se utiliza status() para devolver una respuestas
app.get('/users', function (req, res) {
  res.status(200).send('<h1>Hola users get</h1>');
});
//Crear res.status(201).send('<h1>Hola users</h1>')
app.post('/users', function (req, res) {
  res.send('<h1>Hola users post</h1>');
});
//Actualizar
app.put('/users', function (req, res) {
  res.send('<h1>Hola users put</h1>');
});
app.delete('/users', function (req, res) {
  res.send('<h1>Hola users delete</h1>');
});
app.listen(5000);
