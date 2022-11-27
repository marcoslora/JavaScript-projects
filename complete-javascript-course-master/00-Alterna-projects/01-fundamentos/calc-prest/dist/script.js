"use strict";
//Calculadora laboral
//00-Alterna-projects/01-fundamentos/calc-prest/
const sueldo = 10000;
const sueldoPerDay = 10000 / 23.83;
const tiempo = 2555;
const preAviso = true;
const vacaciones = true;
const initDate = new Date('12/28/2021').getTime();
const endDate = new Date('12/31/2022').getTime();
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
function calcNavidad(ingr) {
    let fechaNavidad = (endDate - new Date('01/01/2022').getTime()) / 1000 / 60 / 60 / 24;
    fechaNavidad = (Math.floor(fechaNavidad / 30) * ingr) / 12;
    return parseFloat(fechaNavidad.toFixed(2));
}
console.log('PreAviso: ', calcPreAviso(sueldoPerDay, labourDays));
console.log('Cesantia: ', calcCesantia(sueldoPerDay, labourDays));
console.log('Vacaciones: ', calcVacaciones(sueldoPerDay, vacaciones, labourDays));
console.log('Navidad: ', calcNavidad(sueldo));
console.log('Total a recibir:', parseFloat((calcPreAviso(sueldoPerDay, labourDays) +
    calcCesantia(sueldoPerDay, labourDays) +
    calcVacaciones(sueldoPerDay, vacaciones, labourDays) +
    calcNavidad(sueldo)).toFixed(2)));
