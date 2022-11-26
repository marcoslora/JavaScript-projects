'use strict';
//Calculadora laboral
//00-Alterna-projects/01-fundamentos/calc-prest/
const sueldo = 10000;
const tiempo = 366;
const preAviso = true;
function calcPreAviso(ingr, time) {
  let preAvisoMonto = 0;
  if (preAviso && time >= 90 && time <= 180) {
    preAvisoMonto = (ingr / 30) * 7;
  }
  if (preAviso && time > 180 && time <= 365) {
    preAvisoMonto = (ingr / 30) * 14;
  }
  if (preAviso && time >= 366) {
    preAvisoMonto = (ingr / 30) * 28;
  }
  preAvisoMonto = parseFloat(preAvisoMonto.toFixed(2));
  return preAvisoMonto;
}
console.log(calcPreAviso(sueldo, tiempo));
function calcCesantia(ingr, time) {}
