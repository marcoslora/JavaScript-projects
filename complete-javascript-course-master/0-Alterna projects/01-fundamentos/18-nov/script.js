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
//Switch
