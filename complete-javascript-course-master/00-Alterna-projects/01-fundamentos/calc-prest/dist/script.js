'use strict';
const person1 = {
  fullName: 'Juan Perez',
  salaryPerMonth: 0,
};
person1.salaryPerMonth = 10000;
const sueldoPerDay = person1.salaryPerMonth / 23.83;
const tiempo = 2555;
const preAviso = true;
const vacaciones = true;
const initDate = new Date('06/01/2020').getTime();
const endDate = new Date('12/31/2020').getTime();
//toma el mismo ano de renuncia
const currentYear = new Date('01/01/2020').getTime();
const labourDays = (endDate - initDate) / 1000 / 60 / 60 / 24;
console.log('Dias trabajados: ', labourDays);
function calcPreAviso(ingr, time) {
  let preAvisoMonto = 0;
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
function calcCesantia(ingr, time) {
  let amountCesantia = 0;
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
function calcVacaciones(ingr, vacations, time) {
  let amountVacaions = 0;
  if (vacations && time >= 365) {
    amountVacaions = ingr * 14;
  }
  if (vacations && time >= 1825) {
    amountVacaions = ingr * 18;
  }
  return parseFloat(amountVacaions.toFixed(2));
}
function calcNavidad(salaryPerMonth) {
  let fechaNavidad = 0;
  let christmasDate = 0;
  if (initDate > currentYear) {
    christmasDate = (endDate - initDate) / 1000 / 60 / 60 / 24;
  } else {
    christmasDate = (endDate - currentYear) / 1000 / 60 / 60 / 24;
  }
  fechaNavidad = (Math.floor(christmasDate / 30) * salaryPerMonth) / 12;
  return parseFloat(fechaNavidad.toFixed(2));
}

console.log('PreAviso: ', calcPreAviso(sueldoPerDay, labourDays));
console.log('Cesantia: ', calcCesantia(sueldoPerDay, labourDays));
console.log(
  'Vacaciones: ',
  calcVacaciones(sueldoPerDay, vacaciones, labourDays)
);
console.log('Navidad: ', calcNavidad(person1.salaryPerMonth));
console.log(
  'Total a recibir:',
  parseFloat(
    (
      calcPreAviso(sueldoPerDay, labourDays) +
      calcCesantia(sueldoPerDay, labourDays) +
      calcVacaciones(sueldoPerDay, vacaciones, labourDays) +
      calcNavidad(sueldoPerDay)
    ).toFixed(2)
  )
);
