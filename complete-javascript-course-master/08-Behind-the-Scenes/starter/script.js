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
  }
  printAge();
  console.log(firtName);
  return age;
}
//scope chain busca las variables donde esten
const firtName = 'Marcos';
calcAge(1992);
