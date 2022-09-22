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

function cutFruitPices(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, orange) {
    const applePieces =  cutFruitPices(apples)
    const orangePieces = cutFruitPices(orange)
    const juice = `Juice with ${applePieces} apples and ${orangePieces}.`;
    return juice;
}
const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// Parametros son las variables que utilizara una funcion
// Argumentos son los valores ya introducidos a la variable

// Function declaration se pueden llamar antes de la funcion
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
console.log(calcAge1(1992), calcAge2(1992));

// Arrow function
const calcAge3 = birthYeah => 2022 - birthYeah;
const age3 = calcAge3(1992)
console.log(age3)

const yearsUntilRet = (birthYeah, firstName) => {
    const age = 2022 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}
const age4 = yearsUntilRet(1992, 'Jonas');
console.log(age4);

const yearsUntilRetitement = function (birthYeah, firstName) {
    const age = calcAge2(birthYeah);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    } else {
        console.log(`${firstName} has already retired`)
        return -1
    }
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetitement(1992, 'Marcos'));

const calcAverage = (n, n1, n2) => (n + n1 + n2) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins1 = calcAverage(85, 54, 41);
const avgKoalas1 = calcAverage(23, 34, 27);

const checkWinner = function (avgD, avgK) {
    if (avgD >= avgK * 2) {
        console.log(`Los Dolphins ganaron`);
    } else if (avgK >=   avgD * 2) {
        console.log(`Los Koalas Ganaron`);
    } else {
        console.log(`Nadie gano`);
    }
}
checkWinner(avgDolphins, avgKoalas)
checkWinner(avgDolphins1, avgKoalas1)