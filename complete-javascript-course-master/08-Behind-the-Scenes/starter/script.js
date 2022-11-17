'use strict';
//high-level languages setup the memory que vamos a utilizar automaticamente
//Garbage-collected siempre limpia la memoria de la pc
//Interpreted or just-in-time compiled
//Multi-paradigm; procedural programming, object-oriented programming(opp), functional programming(fp)
//Prototype-based object-oriented tiene una base de OPP en todo lo q se crea
//Firts-class functions las funciones se tratan como variables
//Dynamic data type the engine of JS changed  automatically.
//Single-threaded solo hace una cosa a la vez
//Non-blocking event loop
//Compilacion  y interpretacion, JS ituliza una combinacion JIT
//Abstract sintax three(AST) es lo q hay detras de una escritura de codigo, es lo que le envia al motor
//call back
//Call stack el orden en q se ejecuta el programa
//Diferencias entre expresion y declaracion
//Scoping es el espacio donde cierta variable esta declarada
//3 types of scope global scope, function scope and block scope
//Hoisting se declara la variable antes de utilizarla para darle un global scope
//TDZ Temporal death zone
// Mutual recursion
//Expresiones
const hola = e => {
  console.log(e);
};
hola('helle');
//Declarativa
function hola2(e) {
  console.log(e);
}
hola2('hello');

let number;
function prueba1() {
  number = 3;
  console.log(number);
}
prueba1();
console.log(number);

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    const outPut = `You are ${age}, born in ${birthYear}`;
    console.log(outPut);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firtName}`;
      console.log(str);
    }
  }
  printAge();
  console.log(firtName);
  return age;
}
//scope chain busca las variables donde esten
const firtName = 'Marcos';
calcAge(1992);

//Declaration function se puede llamar antes de ser creada
function addDecl(a, b) {
  return a + b;
}
//Expresion function es una constante no puede estar en TDZ
const addExpr = function (a, b) {
  return a + b;
};
//Arrow function
const addArrow = (a, b) => a + b;
// this keyword
const marcos1 = {
  name: 'marcos22',
  lastname: 'Lora',
  showName: function () {
    console.log(this.name);
  },
};
marcos1.showName();

console.log(this);

const calcAgs = function (cumple) {
  console.log(2022 - cumple);
  console.log(this);
};
calcAgs(1992);
//arrow function no se utilizan arrow function como metodos dentro de objetos
const calcAgeArrow = cumple => {
  console.log(2022 - cumple);
  console.log(this);
};
calcAgeArrow(1992);

const marcos = {
  firtsName: 'Marcos',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
    //Solucion 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self.year);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //Solucion 2
    // las arrow function se pueden utilizar porq utilizan el this del padre
    const isMillenial = () => {
      console.log(this.year);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    const greet = () => {
      console.log(`Hey ${this.firtsName}`);
    };
    isMillenial();
    greet();
  },
  // nos e usan arrow function en objetos no atrapa el this keyword
  greet: () => {
    console.log(`Hey ${this.firtsName}`);
  },
};
marcos.calcAge();

const matilda = {
  firtsName: 'Matilda',
  year: 2017,
};
matilda.calcAge = marcos.calcAge;
matilda.calcAge();
marcos.greet();

// arguments keyword
// parametros son las variables q nesecita la function
// Argumentos son los valores q se le introducen a la funcion
const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(addExpr1(2, 2));
const me = {
  name: 'Marcos',
  age: 30,
};
// Apuntan al mismo objecto en el heap memory
const friend = me;
friend.age = 27;
friend.name = 'Kath';
console.log(friend);
// Primitives data type: number, string, boolean, undefined, mull, symbol, bigInt. Almacenados en el call stack
// Everything else is objects arrays, object literal, functions. Almacenado en memory heap
console.log('Frin', friend);
console.log('Me', me);
