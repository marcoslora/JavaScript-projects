//Calculadora laboral
//00-Alterna-projects/01-fundamentos/calc-prest/
const sueldo: number = Math.round(10000 / 23.83);
const tiempo: number = 2555;
const preAviso: boolean = true;
const vacaciones: boolean = true;
const initDate = new Date('12/23/2021').getTime();
const endDate = new Date('12/23/2022').getTime();
const labourDays = (endDate - initDate) / 1000 / 60 / 60 / 24;
console.log(typeof labourDays);

function calcPreAviso(ingr: number, time: number): number {
  let preAvisoMonto: number = 0;

  if (preAviso && time >= 90 && time <= 180) {
    preAvisoMonto = ingr * 7;
  }
  if (preAviso && time > 180 && time <= 365) {
    preAvisoMonto = ingr * 14;
  }
  if (preAviso && time >= 366) {
    preAvisoMonto = ingr * 28;
  }
  return parseFloat(preAvisoMonto.toFixed(2));
}

function calcCesantia(ingr: number, time: number): number {
  let amountCesantia: number = 0;
  if (time >= 90 && time <= 180) {
    amountCesantia = ingr * 6;
  }
  if (time > 180 && time <= 365) {
    amountCesantia = ingr * 13;
  }
  if (time > 365 && time < 1825) {
    amountCesantia = ingr * (21 * (time / 365));
  }
  if (time >= 1825) {
    amountCesantia = ingr * (23 * (time / 365));
  }
  return parseFloat(amountCesantia.toFixed(2));
}
function calcVacaciones(ingr: number, vacations: boolean, time: number) {
  let amountVacaions: number = 0;
  if (vacations && time >= 365) {
    amountVacaions = ingr * 14;
  }
  return parseFloat(amountVacaions.toFixed(2));
}

function calcNavidad(ingr: number, time: number) {}
console.log(calcPreAviso(sueldo, tiempo));
console.log(calcCesantia(sueldo, tiempo));
