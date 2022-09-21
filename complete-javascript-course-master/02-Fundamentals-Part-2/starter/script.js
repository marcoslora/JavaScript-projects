'use strict';
// strict mode un modo mas seguro de JavaScript

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive')
// don't use this name for varibles interface, private, if, 

function logger() {
    console.log(`My name is Marcos`);
}
// calling / running / invoking function 
logger();

function fruitProcessor(apples, orange) {
    console.log(apples , orange);
    const juice = `Juice with ${apples} apples and ${orange}.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

