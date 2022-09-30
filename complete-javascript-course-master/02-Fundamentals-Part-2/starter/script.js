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


const jonasArrays = [
    'Jonas',
    'Schmedtmann',
    20 - 22,
    'Teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];
// Objects
const jonas = {
   firstName: 'Jonas',
   lastName: 'Schmedtman',
   age: 2022 - 1992,
   job: 'Teacher',
   friends: ['Michael', 'Steven', 'Peter']
};
const names = 'Name'
console.log(jonas.lastName);
console.log(jonas['first' + names]);
// const interestedIn = prompt("Write something");
// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request')
// };
jonas.location = 'Domincican Republic';
jonas['twitter'] = '@JonasSchmedtman';
console.log(jonas)
console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his best friend is called ${jonas['friends'][0]}`)

const jonas1 = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2022 - 1992,
    birthYeah: 1993,
    job: 'Teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicenses: true,
    // this es para llamar objeto y luego introducir la key
    // calcAge11: function () {
    //     return 2022 - this.birthYeah;
    // }
    // more eficiente solucion
    calcAge11: function () {
        this.age22 = 2022 - this.birthYeah;
        return this.age22;
    },
    getSumary: function () {
        return `${this.firstName} is a ${this.calcAge11()}-year old ${this.job}, and he ${this.hasDriversLicenses ? "has" : "no have"} a driver license.`
    }
};
// console.log(jonas1.calcAge11());
console.log(jonas1.calcAge11());
console.log(jonas1.getSumary());

// console.log(jonas1.calcAge11(jonas1.birthYeah));
// console.log(jonas1['calcAge11'](jonas1['birthYeah']));

// console.log(jonas1.calcAge11(1992));
// console.log(jonas1['calcAge11'](jonas1['birthYeah']));
const bmiObj = {
    firstName1: "Mark",
    lastName1: "Miller",
    tall1: 1.69,
    weight1: 78,
    firstName2: "John",
    lastName2: "Smith",
    tall2: 1.95,
    weight2: 92,
    calcBmi: function () {
        return this.weight1 / (this.tall1**2)
    },
    calcBmi1: function () {
        return this.weight2 / (this.tall2**2)
    },
    higherBmi: function () {
        if (this.calcBmi() > this.calcBmi1()) {
            return `Mark weights is ${this.calcBmi().toFixed(2)} greater than john's is ${this.calcBmi1().toFixed(2)} `
        } else {
            return `John weights is ${this.calcBmi1().toFixed(2)} greater than Mark is ${this.calcBmi().toFixed(2)} `
        }
    }
}
console.log(bmiObj.higherBmi())
const types = []
// For loop keeps running while condition is TRUE
const loops = 'Lifting weights repetition'
// for(let rep = 1; rep <= 10; rep = rep + 1) {
//     console.log(`${loops} + ${rep}`)
// } 
for(let rep = 1; rep <= 10; rep++) {
    console.log(`${loops} + ${rep}`);
}

for (let i = 0; i < jonasArrays.length; i++) {
    // Reading array
    console.log(jonasArrays[i], typeof jonasArrays[i]);
    // Filling arrays
    // types[i] = typeof jonasArrays[1];
    types.push(typeof jonasArrays[i]);
}
const year1 = [1991, 2000, 2005, 2010, 2015, 2020]
const age1 = []
for (let i = 0; i < year1.length; i++){
    age1.push(2022 - year1[i]);
}
console.log(age1);
// Continue se salta la condicion q le estamos pasando and break

for (let i = 0; i < jonasArrays.length; i++) {
    if (typeof jonasArrays[i] !== 'string') continue;
    console.log(jonasArrays[i], typeof jonasArrays[i]);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
numeros.forEach(function(elemen){
    if (elemen === 5){
        console.log(elemen)
    }
});
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] === 5) break;
    console.log(numeros[i]);
}
// Recorre un array alreves
for(let i = numeros.length - 1; i >=0; i--) {
    console.log(i, numeros[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`)
    }
}

//While loop solo nesecita una condicion verdadera
let repe = 1
while (repe <= 10) {
    console.log(`Lifting weight repetition ${repe}`);
    repe++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Looop is about to end.....");
}

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips1 = []
const totals1 = []


for (let i = 0; i < bills1.length; i++) {
    tips1.push(calcTip(bills1[i]));
    totals1.push(calcTip(bills1[i]) + bills1[i]);
};

const calcAverag = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverag(bills1));