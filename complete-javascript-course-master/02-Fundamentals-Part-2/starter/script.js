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
        console.log(`Los Dolphins ganaron con ${avgD}`);
    } else if (avgK >=   avgD * 2) {
        console.log(`Los Koalas ganaron con ${avgK}`);
    } else {
        console.log(`Nadie gano`);
    }
}
checkWinner(avgDolphins, avgKoalas)
checkWinner(avgDolphins1, avgKoalas1)

// Array's
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// Expresion, no una declaracion

const persons = new Array('Michael', 'Steven', 'Peter');
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends[0]);
console.log(friends[2]);
const jonasArray = ['Marcos', 20 + 20, friends]
console.log(jonasArray[2][1][1])
friends[2] = 'jay'
console.log(friends);

const yearss = [1991, 1992, 1993, 1994, 1995];

const age5 = calcAge2(yearss[yearss.length -1]);
const age6 = [calcAge2(yearss[0]), calcAge2(yearss[1]), calcAge2(yearss[2]), calcAge2(yearss[yearss.length -1])]
console.log(age5, age6);
// Agrega al final del array
friends.push('juan');
// agrega al principio del array
friends.unshift('Pedro');
// Elimina el ultimo elemento
friends.pop();
// Elimina 
friends.shift();
//array operator
console.log(friends);
// devuelve el lugar donde se encuentra el elemento
console.log(friends.indexOf('jay'));
// devuelve un boolean si el elemento en la lista strict
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Michael')) {
    console.log(`You have a friend call Michael`);
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);

// Objects
