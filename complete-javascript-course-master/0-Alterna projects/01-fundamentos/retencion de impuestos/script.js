'use strict';

const salarioMensual = 132000;
const salarioAnual = salarioMensual * 12;
let retencionAnual;
let excedente;

if (salarioAnual < 416220) {
  retencionAnual = 0;
  console.log('No pagas impuestos');
} else if (salarioAnual > 416200 && salarioAnual < 624329) {
  excedente = salarioAnual - 416220;
  retencionAnual = excedente * 0.15;
} else if (salarioAnual > 624329.01 && salarioAnual < 867123) {
  excedente = salarioAnual - 624329.01;
  retencionAnual = excedente * 0.2 + 31216;
} else if (salarioAnual > 867123.01) {
  excedente = salarioAnual - 867123.01;
  retencionAnual = excedente * 0.25 + 79776;
}

const retencionMensual = retencionAnual / 12;
console.log(`La retencion mesual es : ${retencionMensual.toFixed(2)}`);
