//Calculadora laboral
//00-Alterna-projects/01-fundamentos/calc-prest/
const sueldo: number = 10000;
const tiempo: number = 190;
const preAviso: boolean = true;
const vacaciones: boolean = true;

function calcPrestaciones(ingr: number, time: number): number {
  let preAvisoMonto: number = 0;

  if (preAviso && time >= 90 && time <= 180) {
    preAvisoMonto = (ingr / 30) * 7;
  }
  if (preAviso && time > 180 && time <= 365) {
    preAvisoMonto = (ingr / 30) * 14;
  }
  if (preAviso && time >= 366) {
    preAvisoMonto = (ingr / 30) * 28;
  }
  return parseFloat(preAvisoMonto.toFixed(2));
}

function calcCesantia(ingr: number, time: number) {
  if (time) {
  }
}
function calcVacaciones(ingr: number, vacations: boolean, time: number) {
  let amountVacaions: number = 0;
  if (vacations && time >= 365) {
    amountVacaions = (ingr / 30) * 14;
  }
  return parseFloat(amountVacaions.toFixed(2));
}

function calcNavidad(ingr: number, time: number) {}
console.log(calcPrestaciones(sueldo, tiempo));
