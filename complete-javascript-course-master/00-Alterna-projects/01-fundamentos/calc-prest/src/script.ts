//Calculadora laboral
//00-Alterna-projects/01-fundamentos/calc-prest/
const userName = prompt('Cual es tu nombre: ');
const userCalc = userName ? userName : 'Error';
console.log(userCalc);
const salaryInput = prompt('Cual es tu ingreso mensual?');
const salaryPerMonth: number = salaryInput ? parseInt(salaryInput) : 0;
const sueldoPerDay: number = salaryPerMonth / 23.83;
const preAviso: boolean = true;
const vacaciones: boolean = true;
const initDateInput = prompt(
  'Cuando ingreso al trabajo?\nformato de fecha mes/dias/ano'
);
const initDateTransf = initDateInput ? initDateInput : 'Error';
const endDateInput = prompt(
  'Cuando renuncio al trabajo:\nformato de fecha mes/dias/ano'
);
const endDateTransf = endDateInput ? endDateInput : 'Error';
const initDate: number = new Date(`${initDateTransf}`).getTime();
const endDate: number = new Date(`${endDateTransf}`).getTime();
//toma el mismo ano de renuncia
const currentYear: number = new Date(
  `01/01/${endDateTransf.slice(-4)}`
).getTime();

const labourDays: number = (endDate - initDate) / 1000 / 60 / 60 / 24;
console.log('Dias trabajados: ', labourDays);
function calcPreAviso(ingr: number, time: number): number {
  let preAvisoMonto: number = 0;
  if (preAviso && time >= 90 && time <= 180) {
    preAvisoMonto = ingr * 7;
  }
  if (preAviso && time > 180 && time <= 365) {
    preAvisoMonto = ingr * 14;
  }
  if (preAviso && time >= 365) {
    preAvisoMonto = ingr * 28;
  }
  return parseFloat(preAvisoMonto.toFixed(2));
}

function calcCesantia(ingr: number, time: number): number {
  let amountCesantia: number = 0;
  if (time >= 90 && time <= 180) {
    amountCesantia = ingr * 6;
  }
  if (time > 180 && time < 365) {
    amountCesantia = ingr * 13;
  }
  if (time >= 365 && time < 1825) {
    amountCesantia = ingr * (21 * Math.floor(time / 365));
  }
  if (time >= 1825) {
    amountCesantia = ingr * (23 * Math.floor(time / 365));
  }
  return parseFloat(amountCesantia.toFixed(2));
}
function calcVacaciones(
  ingr: number,
  vacations: boolean,
  time: number
): number {
  let amountVacaions: number = 0;
  if (vacations && time >= 365) {
    amountVacaions = ingr * 14;
  }
  if (vacations && time >= 1825) {
    amountVacaions = ingr * 18;
  }
  return parseFloat(amountVacaions.toFixed(2));
}

function calcNavidad(ingr: number): number {
  let fechaNavidad: number = 0;
  if (initDate > currentYear) {
    fechaNavidad = (endDate - initDate) / 1000 / 60 / 60 / 24;
  } else {
    fechaNavidad = (endDate - currentYear) / 1000 / 60 / 60 / 24;
  }
  fechaNavidad = (Math.floor(fechaNavidad / 30) * ingr) / 12;
  return parseFloat(fechaNavidad.toFixed(2));
}
console.log('PreAviso: ', calcPreAviso(sueldoPerDay, labourDays));
console.log('Cesantia: ', calcCesantia(sueldoPerDay, labourDays));
console.log(
  'Vacaciones: ',
  calcVacaciones(sueldoPerDay, vacaciones, labourDays)
);
console.log('Navidad: ', calcNavidad(salaryPerMonth));
console.log(
  'Total a recibir:',
  parseFloat(
    (
      calcPreAviso(sueldoPerDay, labourDays) +
      calcCesantia(sueldoPerDay, labourDays) +
      calcVacaciones(sueldoPerDay, vacaciones, labourDays) +
      calcNavidad(salaryPerMonth)
    ).toFixed(2)
  )
);
