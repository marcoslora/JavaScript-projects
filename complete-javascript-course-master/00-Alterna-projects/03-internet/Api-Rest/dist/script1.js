'use strict';
//00-Alterna-projects/03-internet/Api-Rest
//http://127.0.0.1:5000/users
//client-server escuchar peticion request y server devuelve respuesta response
//application programming interface
//Primer parametro
/*
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
*/

const path = require('path');
const express = require('express');
const serve = express();
const cors = require('cors');

// Middleware para que el post pueda recibir JSON en el body
serve.use(express.json());

// Middleware para validar el origen de los clientes
/* var corsOptions = {
  origin: 'http://www.miDominio.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} */

// Los Cors definen el acceso desde un dominio diferente

serve.use(cors());

serve.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  next();
});

/* 
{ id: 1, nombre: "Jose" },
{ id: 2, nombre: "Josefina" },
{ id: 3, nombre: "Joselito" },
{ id: 4, nombre: "Josefa" } 
*/

let users = [];
let ids = 0;

// npm init // inicia el proyecto de node
// npm i express // paquete para crear servicio rest
// npm i -g nodemon  // instalacion global // reinicia el server con cada cambio
// npm i -D nodemon  // instalacion como dependencia de desarrollo
// npm i cors // paquete para configurar el acceso desde clientes

// Ruta de acceso al servicio
// http://localhost:3000/

// funcion para buscar usuario por id
function findUserById(id) {
  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    if (user.id === parseInt(id)) {
      return user;
    }
  }
  return undefined;
}

// funcion para buscar usuario por nombre y id
function findUserByNameAndId(nombre, id) {
  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    if (user.nombre === nombre && user.id !== id) {
      return user;
    }
  }
  return undefined;
}

// funcion para buscar usuario por nombre
function findUserByName(nombre) {
  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    if (user.nombre === nombre) {
      return user;
    }
  }
  return undefined;
}

// Rutas para Usuarios

// Metodo get que sirve una pagina web
serve.get('/form', (request, response) => {
  // same-origin
  response.sendFile(path.resolve('index.html'));
});

// Metodo get
serve.get('/users', function (request, response) {
  response.json(users);
});

// Metodo Get que recibe parametro id
serve.get('/users/:id', (request, response) => {
  const id = request.params.id;
  const user = findUserById(id);

  if (user) {
    return response.json(user);
  }

  response.status(404).json({ message: `El id : ${id} no existe`, code: 404 });
});

// Metodo Post
serve.post('/users', function (request, response) {
  // Obtiene el valor nombre enviado por el Body
  const nombre = request.body.nombre;

  // Trim limpia los espacios en blanco
  if (nombre !== undefined && nombre.trim().length > 0) {
    const user = findUserByName(nombre);

    if (user) {
      return response
        .status(400)
        .json({ message: `El nombre ${nombre} ya esta en uso` });
    }

    ids += 1;
    //Agrega un elemento nuevo al array
    users.push({ id: ids, nombre });
    return response.json({ id: ids, nombre });
  }

  response.status(400).json({ message: `El nombre es requerido` });
});

// Metodo put
serve.put('/users/:id', function (request, response) {
  // Obtiene los parametros enviados por la url
  const id = request.params.id;

  // Obtiene los parametros enviados por el Body
  const nombre = request.body.nombre;

  const user = findUserById(id);
  if (!user) {
    return (
      response
        // Status -> Permite asignar un codigo de estatus a la respuesta
        .status(404)
        // json -> formatea la respusta como un json, en caso de html usar send
        .json({ message: `El id : ${id} no existe`, code: 404 })
    );
  }

  if (nombre !== undefined && nombre.trim().length > 0) {
    const userByName = findUserByNameAndId(nombre, id);
    if (userByName) {
      return response
        .status(400)
        .json({ message: `El nombre ${nombre} ya esta en uso` });
    }
  }

  // asigna el nombre al objeto que se obtuvo del arreglo (Paso por referencia)
  user.nombre = nombre;
  response.json(user);
});

// Metodo delete
serve.delete('/users/:id', function (request, response) {
  const id = request.params.id;
  const user = findUserById(id);

  if (user) {
    //Busca el indice de un elemento del array
    const userIndex = users.findIndex(u => u.id == user.id);
    // Elimina un elemento del array
    const deletedUser = users.splice(userIndex, 1);

    // Envia la respuesta con el elemento eliminado
    return response.json(deletedUser);
  }

  return response
    .status(404)
    .json({ message: `El id : ${id} no existe`, code: 404 });
});

// Asigna el puerto 3000 al servicio Rest
serve.listen(3000, function () {
  console.log(`Server Running at 3000`);
});
