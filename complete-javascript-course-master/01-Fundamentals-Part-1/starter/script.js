let js = "Amazing";
// if (js === "Amazing") alert("Marcos");
/* 
comentario multilinea
*/
console.log(49 + 50);
let first_name = "Bob";
let lastName = "Perez"
console.log(first_name);
let myCountry = "Dominican Republic";
let myContinent = "Continent Americano";
let myPopulation = "11 millon of people";
console.log(myContinent);
console.log(myCountry);
console.log(myPopulation);
let javaScript = true;
console.log(javaScript);
// Ver el tipo de dato
console.log(typeof true);
// Reasignar variable
first_name = "Pablo";
console.log(first_name);
// undefined variable
let year;
console.log(year);
year = 2022;
console.log(year);
// null is a undefined but in javascript have a error an define like a object
console.log(typeof null);
// const son variables constantes y let puede ser cambiada; solo se utiliza const; no uses var old 
let userAge = 30;
const birthYear = 1992;
var userName = "Marcos";

// Operators
const ageMarcos = year - birthYear;
console.log(first_name ,ageMarcos);
console.log(20 % 2);
console.log(first_name + " " + lastName); 
let x = 10 + 5;
x += 10;
x *= 10;
x++;// x + 1
x--;// x - 1
console.log(x);

// comparison operators
console.log(10 > 11);// >, <, >=, <=
console.log(12 >= 11);
console.log(10 - 5 > 20 - 18);

const markWeight1 = 78;
const markTall1 = 1.69;
const johnWeight1 = 92;
const johnTall1 = 1.95;
const calcMarkBMI1 = markWeight1/(markTall1**2);
const johnMarkBMI1 = johnWeight1/(johnTall1**2);
const comparisonBmi1 = calcMarkBMI1 > johnMarkBMI1;
console.log(calcMarkBMI1, johnMarkBMI1);
console.log(comparisonBmi1);


const markWeight2 = 95;
const markTall2 = 1.88;
const johnWeight2 = 85;
const johnTall2 = 1.76;
const calcMarkBMI2 = markWeight2/(markTall2**2);
const johnMarkBMI2 = johnWeight2/(johnTall2**2);
const comparisonBmi2 = calcMarkBMI2 > johnMarkBMI2;
console.log(calcMarkBMI2, johnMarkBMI2);
console.log(comparisonBmi2);

// String
const firstName = "Jonas";
const job = "teacher";
const userBirthYear = 1991;
const jonas = "I'm " + firstName + ', a ' + (year - userBirthYear) + " years old\n\ " + job + "!"; 
console.log(jonas);
// template literal
const jonasNew = `I'm ${firstName}, a ${year - userBirthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`can use like
 a regular
  coute`);

// If else statements  
const testAge = 12;

if(testAge >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearLeft = 18 - testAge;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`)
}
let century;
const birtYear1 = 2001;
if (birtYear1 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

if (calcMarkBMI2 > johnMarkBMI2) {
    console.log(`Mark's BMI is ${calcMarkBMI2} is higher that John's is ${johnMarkBMI2}`);
} else {
    console.log(`John's BMI is ${johnMarkBMI2} is higher that Mark's is ${calcMarkBMI2}`);
}
// conversion and coercion Number, String or Boolean
// Type conversion
const inputYear = '19cxcx';
console.log(Number(inputYear));
console.log(typeof Number(inputYear));
console.log(Number(inputYear) + 18);
// NaN not a number
if (Number(inputYear) === NaN){
    console.log("Please introduce a number");
}
console.log(typeof String(30));
// Type Coercion convierte el tipo de dato automaticamente
console.log("I'm " + 23 + " Years old");
console.log('23' - '10' - 3);
console.log('22' / '2');
// Truthy and Falsy Values valores q al convertir en boolean se vuelven verdaderos o falsos
// Falsy: '', undefined, null, NaN, 0; Valores falsos
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("Jonas"));
console.log(Boolean(""));
let heigth = 0
if (heigth) {
    console.log("Heigth is defined")
} else {console.log("Heigth is not DEFINED")}
// Equality operators == vs ===; === igualdad estricta, == vagamente igual o igualdad flexible; solo usar el estricto
const age = 18;
if ( age === 18) console.log(`Tiene 18`);
if (age == "18") console.log("true");
// prompt funtion
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 23) {
    console.log("Cool! is 23");
} else if (favourite === 22) {
    console.log("Cool! is 22");
} else {console.log(`Cool! ${favourite}`);
}
const numero1 = Number(prompt("Numero 1"));
const numero2 = Number(prompt("Numero 2"));
const operacion = prompt("Operacion a realizar");
if (operacion === "suma") {
    console.log(numero1 + numero2);
}
// !== no igual flexible !=== no igual estricto solo utilizar el estricto

// Boleean logic
// and = && , or = ||, not = !
const parentspermition = true;
if (age === 18 && age === 18 && true) console.log("O.k");
if (age >= 18 || parentspermition || true) (console.log("Puedes pasar"));

const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
if (dolphins > koalas) {
    console.log(`Los Dolphins ganaron con ${dolphins} y los Koalas perdieron con ${koalas}`);
} else if (koalas > dolphins) {
    console.log(`Los Koalas ganaron con ${koalas} y los Dolphins perdieron con ${dolphins}`);
} else if (dolphins === koalas) {
    console.log("Empate");
} 

const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 +123) / 3;
if (scoreDolphins1 >= 100 && scoreDolphins1 > scoreKoalas1) {
    console.log(`Ganaron los Dolphins con ${scoreDolphins1} y perdieron los Koalas con ${scoreKoalas1}`);
} else if (scoreKoalas1 >= 100 && scoreKoalas1 > scoreDolphins1) {
    console.log(`Garaon los Koalas con ${scoreKoalas1} y los Dolphins perdieron con ${scoreDolphins1}`);
}

const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 106 ) / 3;
console.log(scoreDolphins2, scoreKoalas2);
if (scoreDolphins2 === scoreKoalas2 && scoreDolphins2 >= 100) {
    console.log("Es un empate de los Dolphins y Koalas");
} else {
    console.log("No one win the trophy");
}

// The switch statement
const day = 'monday';
switch(day) {
    case 'monday': //day == 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thurday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekuend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
}   else if (day === 'wednesday' || day === 'thurday') {
    console.log('Write code examples');
} else {
    console.log('Not a valid day!');
}
// Statements producen oraciones and expresssions producen valores
// operador condicional Ternary operator se compone de tres partes condicion, if and else
const age1 = 23;
age1 >= 18 ? console.log("I like to drink wine") : console.log('I like to drink water');

const drink = age1 >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age1 >= 18 ? 'wine' : 'waters'}`);

let drink2;
if(age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink2);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(` The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip }`);
