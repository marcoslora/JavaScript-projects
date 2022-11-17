'use strict';
const celsius = 40;
const celsiusToFahrenheit = celsius * (9 / 5) + 32;
console.log(`La temperatura en Fahrenheit es ${celsiusToFahrenheit}`);

const fahrenheitToCelsius = ((104 - 32) * 5) / 9;
console.log(`La temperatura en celsius es ${fahrenheitToCelsius}`);
const km = 20;
const kmToMillas = km / 1.6;
console.log(kmToMillas);
// &&
const leapYear = 2020;
if ((leapYear % 4 === 0 && leapYear % 100 != 0) || leapYear % 400 === 0) {
  console.log(`${leapYear} es bisiesto`);
} else {
  console.log(`${leapYear} no es bisiesto`);
}
console.log(leapYear % 100);
