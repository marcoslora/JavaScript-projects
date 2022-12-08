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
};
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
({ a, b } = obj); //no funciona
console.log(a, b);
