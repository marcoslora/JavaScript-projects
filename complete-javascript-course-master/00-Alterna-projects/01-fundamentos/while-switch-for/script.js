'use strict';
const numberAbsoluto = -0.000034;
let resultado;
if (numberAbsoluto < 0) {
  resultado = -numberAbsoluto;
  console.log(`El valor absoluto es: ${resultado}`);
} else {
  console.log(`El valor absoluto es: ${resultado}`);
}
//Ternary operator
//Condicion ? que hacer : else
const tenaryOpe = numberAbsoluto < 0 ? -numberAbsoluto : numberAbsoluto;
console.log(tenaryOpe);

//parseFloat y parseInt
//Truthy objectos, numeros != 0, strings
//Falsy 0, string vacio, NaN
// type Season = 'back friday' | 'christmas';

//Switch
const precio = 4000;
const temporada = 'christmas';
switch (temporada) {
  case 'black friday':
    console.log(precio * 0.8);
    break;
  case 'christmas':
    console.log(precio * 0.9);
    break;
  default:
    console.log(precio);
}

// while
let numero = -3901;
//Cambia a valor absoluto
numero = numero < 0 ? -numero : numero;
let digito;
let residuo;
let level = numero.toString().length - 1;
//Math.pow elevar a la potencia
//Math.floor devuelve un numero entero quitandole los decimales
//Math.trunc los redondea a un numero entero
while (level >= 0) {
  digito = Math.floor(numero / Math.pow(10, level));
  numero = numero % Math.pow(10, level);
  console.log(digito);
  level = level - 1;
}
//For
for (let i = 1; i <= 5; i += 1) {
  for (let j = 1; j <= i; j += 1) {
    console.log(i);
  }
}
const numeroTabla = 10;
for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`);
}
