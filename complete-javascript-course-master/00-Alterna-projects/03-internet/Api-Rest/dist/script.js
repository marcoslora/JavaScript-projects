"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//00-Alterna-projects/03-internet/Api-Rest
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serve = (0, express_1.default)();
console.log('hola');
//http://127.0.0.1:3000
// npm start
// npm run dev para prender el tsc
// npm i @types/cors --save-dev
// Middleware para que el post pueda recibir JSON en el body
serve.use(express_1.default.json());
// Middleware para validar el origen de los clientes
/* var corsOptions = {
  origin: 'http://www.miDominio.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} */
// Los Cors definen el acceso desde un dominio diferente
serve.use((0, cors_1.default)());
serve.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
});
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
        if (user.nombre === nombre && user.id !== parseInt(id)) {
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
    response.sendFile(path_1.default.resolve('front/index.html'));
});
// Metodo get
serve.get('/users', function (request, response) {
    console.log('hola');
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
        return (response
            // Status -> Permite asignar un codigo de estatus a la respuesta
            .status(404)
            // json -> formatea la respusta como un json, en caso de html usar send
            .json({ message: `El id : ${id} no existe`, code: 404 }));
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
