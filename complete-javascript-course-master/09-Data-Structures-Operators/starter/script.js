'use strict';
const nested = [2, 4, [5, 8]];
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starIndex, mainIndex) {
    return [this.starterMenu[starIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starIndex, mainIndex) {
    return [this.starterMenu[starIndex], this.mainMenu[mainIndex]];
  },
  //Destructuring in a function y los parametros de objetos
  orderDelivery: function ({ starIndex, mainIndex, address, time = '22:30' }) {
    console.log(
      `Order received ${this.starterMenu[starIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  address: 'C/29 # 45',
  mainIndex: 2,
  starIndex: 2,
});

const { name1, openingHours, categories } = restaurant;
console.log(name1, openingHours, categories);
console.log(restaurant.categories[1]);
//Destructuring assignment arrays se pueden almacenar
let [first, , second] = restaurant.categories;
console.log(first, second);
//Array mutated
[first, second] = [second, first];
console.log(first, second);
const [start, main] = restaurant.order(2, 0);
console.log(main);
const [nestedTest1, , nestedTest2] = nested;
console.log(nestedTest1, nestedTest2);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
//Crear el destructuring con nuevos nombre
const {
  name1: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: startes = [] } = restaurant;
console.log(menu, startes);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 1, b: 2 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Spread operator
const arr1 = [7, 8, 9];
const arrSpred = [1, 2, ...arr1];
console.log(arrSpred);
//individual element in array
console.log(...arrSpred);
//join 2 arrays
const menuF = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuF);

//Iterables: arrays, strings, maps, sets: Not objects
const arrTest2 = 'Marco';
const letter = [...arrTest2, ' ', 's.'];
console.log(...letter);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt("Let's make pasta! Ingredient 2? "),
//   prompt("Let's make pasta! Ingredient 3? "),
// ];
// restaurant.orderPasta(...ingredients);

//New objects modifications
//Si copio el objecto con el spread no se queda vinculado el address
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
newRestaurant.name1 = 'Ristotante Roma';
console.log(restaurant.name1, newRestaurant.name1);

//Rest pattern toma los elementos q quedan en el array
const arr2 = [1, 2, ...[3, 4]];
