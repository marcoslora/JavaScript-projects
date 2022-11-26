'use strict';
//Cree un array como los decimales y sus recpectivos numeros romanos.
// let decimalesRomanos = [
//   { number: 1000, roman: 'M' },
//   { number: 900, roman: 'CM' },
//   { number: 500, roman: 'D' },
//   { number: 400, roman: 'CD' },
//   { number: 100, roman: 'MC' },
//   { number: 90, roman: 'XC' },
//   { number: 50, roman: 'L' },
//   { number: 40, roman: 'XL' },
//   { number: 10, roman: 'X' },
//   { number: 9, roman: 'IX' },
//   { number: 5, roman: 'V' },
//   { number: 4, roman: 'IV' },
//   { number: 1, roman: 'I' },
// ];

// function convDecToRoman(decimales) {
//   let letrasRomamas = '';
//   let number = decimales;
//   //Creo el for para iterar el array
//   for (let i = 0; i < decimalesRomanos.length; i++) {
//     //Verifico q se cumpla la condicion de q el numero sea igual al del array
//     if (decimalesRomanos[i].number <= number) {
//       //Resto el decimal ingresado menos el del array para q el for loop no lo repita
//       number = number - decimalesRomanos[i].number;
//       //Anado el numero pero en forma de romano
//       letrasRomamas = letrasRomamas + decimalesRomanos[i].roman;
//       //Despues q se cumpla quiero q el for se devuelva a verificar el numero restado
//       i--;
//     }
//   }
//   console.log(letrasRomamas);
// }
// convDecToRoman(1945);

const numeroInicial = 8999;
let numero = numeroInicial;
let salida = '';

while (numero >= 1) {
  if (numero >= 1000) {
    salida += 'M';
    numero = numero - 1000;
  } else if (numero >= 900) {
    salida += 'CM';
    numero = numero - 900;
  } else if (numero >= 500) {
    salida += 'D';
    numero = numero - 500;
  } else if (numero >= 400) {
    salida += 'CD';
    numero = numero - 400;
  } else if (numero >= 100) {
    salida += 'C';
    numero = numero - 100;
  } else if (numero >= 90) {
    salida += 'XC';
    numero = numero - 90;
  } else if (numero >= 50) {
    salida += 'L';
    numero = numero - 50;
  } else if (numero >= 40) {
    salida += 'XL';
    numero = numero - 40;
  } else if (numero >= 10) {
    salida += 'X';
    numero = numero - 10;
  } else if (numero >= 9) {
    salida += 'IX';
    numero = numero - 9;
  } else if (numero >= 5) {
    salida += 'V';
    numero = numero - 5;
  } else if (numero >= 4) {
    salida += 'IV';
    numero = numero - 4;
  } else if (numero >= 1) {
    salida += 'I';
    numero = numero - 1;
  }
}

console.log(`El número ${numeroInicial} en romano es: ${salida}`);
