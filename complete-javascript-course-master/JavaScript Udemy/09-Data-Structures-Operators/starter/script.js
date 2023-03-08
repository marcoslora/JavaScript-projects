'use strict';
const nested = [2, 4, [5, 8]];

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
    team1: 1.33,
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
// code challenge #2
//1.
const playersScored = game.scored;
for (const [i, players] of playersScored.entries()) {
  console.log(`Goal ${i + 1}: ${players} `);
}
//2.
const scoredValues = Object.values(game.odds);
let scoredAverage = 0;
for (const i of scoredValues) {
  scoredAverage += i;
}
scoredAverage /= scoredValues.length;
console.log(scoredAverage);
//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//Data Structures Sets colections of unique of values, borra los duplicados, no existe indices
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
//length
console.log(ordersSet.size);
//Boolean verifica si existe
console.log(ordersSet.has('Pizza'));
//add
ordersSet.add('Garlic Bread');
console.log(ordersSet);
//Delete
ordersSet.delete('Garlic Bread');
console.log(ordersSet);
//Borrar todo .clear()
for (const order of ordersSet) {
  console.log(order);
}

//Example for remove duplicate
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
//Set to array
const positions = [...new Set(staff)];
console.log(positions);

//MAP
//Map estructura de datos para asignar keys y values similares a los objetos
//pero los map pueden tener cualquier tipo de dato en keys hasta array
const restMap = new Map();
restMap.set('name', 'Classico Italiano');
restMap.set(1, 'Firenze, Italy');
restMap.set(2, 'Lisbon, Portugal');
restMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');

console.log(restMap.get('name'));
console.log(restMap.get(true));

//example
const time = 9;
console.log(
  restMap.get(time > restMap.get('open') && time < restMap.get('close'))
);
//Revisar si existe
console.log(restMap.has('opens'));
//Delete
restMap.delete(2);
console.log(restMap);
//other
console.log(restMap.size);
//restMap.clear();
//memory heap
const arr3 = [1, 2];
restMap.set(arr3, 'test');
// restMap.set(document.querySelector('h1'), 'Heading');
// console.log(restMap);
// console.log(restMap.get(arr3));

const question = new Map([
  ['question', 'What is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours1));
const hoursMap = new Map(Object.entries(openingHours1));
console.log(hoursMap);
//Map iterable
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = 3;
const correctAnswer =
  answer === question.get('correct') ? question.get(true) : question.get(false);
console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
// 4 data structure Array or set o objects or maps

//Investigar NON-built in: stacks, queues, linked lists, trees, hash tables.

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
//2.
gameEvents.delete(64);
//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//pop elimina y retorna el ultimo elemento del arreglo
const time1 = [...gameEvents.keys()].pop();
console.log(time1);
console.log(
  `An event happened, on average, every ${time1 / gameEvents.size} minutes`
);
//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRTS' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//String
const airline = 'TAP Air Portugal Porp';
const plane = 'A320';
console.log(plane[0]);
console.log('A320'.length);
//devuelve el index del primer elemento encontrado
console.log(airline.indexOf('r'));
//devuelve el index del ultimo elemento encontrado
console.log(airline.lastIndexOf('P'));
//Busca en donde empiezan las palabras
console.log(airline.indexOf('Porp'));
//slice(start, end)
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const chechMiddleSeat = function (seat) {
  const s =
    seat.slice(-1) == 'B' || seat.slice(-1) == 'E'
      ? 'Middle seats '
      : 'Others seats';
  console.log(s);
};

chechMiddleSeat('11B');
chechMiddleSeat('1 n E');
chechMiddleSeat('11C');
//te convierte un string en un array
console.log(typeof new String('Hola'));
//Cambia el objeto a primitivo
console.log(new String('Hola').slice(1));
//JavaScript boxing convierte un string primitivo en un objecto. Cuando llamamos un metodo a un string

//Fix capitalization
const passager = 'mArcOs'.toLowerCase();
const passengerCorrect = passager[0].toUpperCase() + passager.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   hello@Jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);
const emailValidator = function (g, b) {
  const normalized = b.toLowerCase().trim();
  console.log(normalized === g);
};
emailValidator(email, loginEmail);
// REPLACING
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const announcement =
  'All passaengers come to bording door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
//regular expressions
console.log(announcement.replace(/door/g, 'gate'));
//Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A'));
console.log(plane1.startsWith('A31'));
console.log(plane1.endsWith('eo'));
plane1.startsWith('A3') && plane1.endsWith('eo')
  ? console.log('Part of the new Airbus family')
  : console.log('No cumple');

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  baggage.includes('knife') || baggage.includes('gun')
    ? console.log('You not allow')
    : console.log('Welcome a board');
};
checkBaggage('I have a laptop and Knife');
checkBaggage('I have a laptop and GUN');
checkBaggage('I have a laptop');

//split and join
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Marcos lora'.split(' ');
//.join() unifica los array para convertirlo en un solo array pasando cualquier para metro en cada unificacion
console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));
//todas capilalice
const marcosName = 'MARcos LorA esTrelLa';
const nameCapi = marcosName.toLocaleLowerCase().split(' ');
let transforName = [];
nameCapi.forEach(e => {
  let a = e[0].toUpperCase() + e.slice(1);
  transforName.push(a);
});
console.log(transforName.join(' '));
//Jonas solucion

const capilalizeName = function (name) {
  const namesUpper = [];
  const names = name.split(' ');
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    //replace(n[0], n[0].toUpperCase())
  }
  console.log(namesUpper.join(' '));
};
capilalizeName(marcosName);
//Padding

const message = 'Go to gate 23';
//le agrega al string el simbolo pasado hasta el length sea del tamano del primer parametro al principio y padend al final
console.log(message.padStart(26, '+').padEnd(39, '+'));
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(343453463463463));
console.log(maskCreditCard('13456786'));

//Repeat
const planesInLine = function (n) {
  console.log(`There are ${n} planes in lines ${'🛫'.repeat(n)}`);
};
planesInLine(4);

//Coding challenge
/*
underscore_case
 first_name
Some_Variable
   calculate_AGE
delayed_departure

*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const outPut = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${outPut.padEnd(20)}${'*'.repeat(i + 1)}`);
//   }
// });
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const fligth of flights.split('+')) {
  const [type, from, to, time] = fligth.split(';');
  const outPut = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    40
  );
  console.log(outPut);
}
//closures
const miContador = (function () {
  let _contador = 0;
  function incrementar() {
    return _contador++;
  }
  function decrementar() {
    return _contador++;
  }
  function valor() {
    return _contador;
  }
  return { incrementa: incrementar, decrementar, valor };
})();
miContador.incrementa();
miContador.incrementa();
miContador.incrementa();
miContador.incrementa();
console.log(miContador.valor());

//

let bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 200 * numPassengers
) {
  //ES5
  //price = price || 199
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123', 3);
createBooking('LH123', 5, 900);
createBooking('LH123', undefined, 700);
//
const flight1 = 'LH123';
const jonas = {
  name: 'Marcos Lora',
  passport: 123214234,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 123214234) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport');
  }
};
checkIn(flight1, jonas);
console.log(flight1);
console.log(jonas);

const flightNum = flight1;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000);
};
newPassport(jonas);
checkIn(flight1, jonas);
