'use strict';
//00-Fabians/Api-rest-pract
//http://127.0.0.1:3000/
//Se define el port y si algun servicio externo ofrece un puert se le da prioridad
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);
//Para arreglar en Json en el navedor
app.set('json spaces', 2);
//middleware procesa datos antes de q el servidor lo reciba
const morgan = require('morgan');
//Me deja ver lo q va llegando al servidor
//dev, combined
app.use(morgan('dev'));
//Permite entender datos de formularios
app.use(express.urlencoded({ extended: false }));
//Permite al server entender los formatos JSON
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.json({ Nombre: 'Marcos' });
});

// starting de server
app.listen(app.get('port'), () => {
  console.log(`Sever on port ${app.get('port')}`);
});
