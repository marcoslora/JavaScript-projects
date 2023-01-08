'use strict';
const nested = [2, 4, [5, 8]];
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
//compute
const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours1 = {
  [weekdays1[3]]: {
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
  [`day-${2 + 2}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

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
  //ES6 enhanced object literals
  openingHours1,
  //enhanced functions
  order(starIndex, mainIndex) {
    return [this.starterMenu[starIndex], this.mainMenu[mainIndex]];
  },
  //Destructuring in a function y los parametros de objetos
  orderDelivery: function ({ starIndex, mainIndex, address, time = '22:30' }) {
    console.log(
      `Order received ${this.starterMenu[starIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
const [a1, b1, ...others1] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(others1);
const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);
//Rest pattern Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3, 4, 5, 6, 7);
const x1 = [6, 7, 8, 9];
add(...x1);

//short circuiting (&& and ||)
//If is truthy value and falsy value
//truthy:
//falsy: undefined, '', 0, NaN, null
console.log(null || 'Marcos');
console.log(0 || 'h');

//Validacion con un operador ternario

const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
//Validacion con short circuiting or devuelve el primer valor q sea verdadero o el ultimo si todos son falsy
const guest2 = restaurant.numGuest || 11;
console.log(guest2);
//Validacion con short circuiting and devuelve el primer valor que sea falso o el ultimo valor si todos son truthy
console.log('---AND---');
console.log('hello' && 28);

if (restaurant.orderPizza) {
  restaurant.orderPizza('res', 'Spinach', 'peperoni');
}

restaurant.orderPizza && restaurant.orderPizza('res', 'Spinach', 'peperoni');
//nullish coalescing operator ?? valores nulos en vez de valores falsos
//Nullish: null and undefined
restaurant.numGuest = 0;
const guest3 = restaurant.numGuest ?? 11;
console.log(guest3);

//logical assignment operator
const rest1 = { name: 'capri', numGuests: 20 };
const rest2 = { name: 'LA Piazza', owner: 'Marcos' };
rest2.numGuests = rest1.numGuests || 10;
//OR assignment operator
rest1.numGuests ||= 10;
//Nullish assignment operator
rest2.numGuests ??= 10;
//AND assignment operator
rest2.owner &&= 'Hidden';
console.log(rest2.owner);

//Code challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 0.33,
    x: 3.25,
    team2: 6.5,
  },
};
//challenge
//1.
const [players1, players2] = game.players;
//2.
const [gk, ...fieldPlayers] = players1;
//3.
const allPlayers = [...players1, ...players2];
//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team2);
//6.
const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
//7.
//ternary
const winTheGame = team1 > team2 ? 'Team1 Gano' : 'Team2 gano';
console.log(winTheGame);
//operator
team1 < team2 && console.log('Team 1 is more likely top win');
team1 > team2 && console.log('Team 2 is more likely top win');

//Looping arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);
//for of
for (const item of menu2) console.log(item);

for (const [i, elem] of menu2.entries()) {
  console.log(`${i + 1}: ${elem}`);
}
//enhanced object literal, functions and compute
//ruta de la clase
console.log(restaurant.openingHours1);

//optional chaining return undefined si no existe lo q estamos llamando
console.log(restaurant.openingHours?.mon?.open);

//example
for (const day of weekdays1) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open ${open}`);
}

//chaining methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//chaining array
const users2 = [{ name: 'jonas', emai: 'marcoslora95' }];
console.log(users2[0]?.name ?? 'User array empty');

//traditional validation
if (users2.length > 0) console.log(users2[0].name);
else console.log('user array empty');

//Looping keys, values and entries
for (const day of Object.keys(openingHours1)) {
  console.log(day);
}
//Key properties names
const properties = Object.keys(openingHours1);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
//values properties values
const values = Object.values(openingHours1);
console.log(values);

//Entire object index
const entries = Object.entries(openingHours1);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
