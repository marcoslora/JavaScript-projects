//00-Alterna-projects/06-algorithms/data-structures

const priceList = [4000, 5000, 8000, 500];
console.log('Precios regulares: ', priceList);
//filter
const salePriceListFilter = priceList.filter(price => {
  return price >= 4000;
});
//map
const salePriceList = priceList.map(function (price) {
  return price.toString();
});
console.log('Precios regulares: ', salePriceList);
console.log(salePriceListFilter);

//reduce el cero es con cual se empieza
const sum = priceList.reduce((previus, current) => {
  return previus + current;
}, 0);
console.log(sum);
const min = priceList.reduce((previus, current) => {
  return Math.min(previus, current);
});
console.log(min);

//filtrar los mayores de mil
const purchases = ['13000', '475', '34500', '120000', '65', '8323'];

const purchaseList = purchases.map(function (purchases) {
  return parseInt(purchases);
});
const filterPurchases = purchaseList.filter(purchases => {
  return purchases >= 1000 && purchases % 2 === 0;
});

const sumPurchases = filterPurchases.reduce((previous, current) => {
  return previous + current;
}, 0);
console.log(sumPurchases);

const customer = [
  { name: 'Marcos', purchases: ['45', '60', '90'] },
  { name: 'Pedro', purchases: ['60', '80', '100'] },
];

const summary = customer.map(info => {
  const total = {
    name: info.name,
    totalPurchases: info.purchases
      .map(str => {
        return parseInt(str);
      })
      .reduce((previous, current) => {
        return previous + current;
      }),
  };
  return total;
});
console.log(summary);

const sortedSummary = summary.sort((element1, element2) => {
  return element2.totalPurchases - element1.totalPurchases;
});
console.log(sortedSummary);
//Buscar sort de mayor a menor y de menor a mayor
//Hacer 3 0 4 ejercicios de sort

//stack o pila push, pop, peek o top

//lifo last in firts out
//queues o colas
let arrayTest = [1, 2];
arrayTest.push(3);
arrayTest.pop();
console.log(arrayTest);

/*Escribir un programa en Typescript que, dada una lista de películas, permita ordenarlas de manera ascendente por nombre (en orden alfabético), y por rating. También debe permitir ordenarlas por año, pero de manera descendente (las películas más recientes primero). 

Ejemplo de una lista de películas:
*/

interface Movie {
  name: string;
  year: number;
  rating: number;
}

const movies: Movie[] = [
  {
    name: 'The Shawshank Redemption',
    year: 1994,
    rating: 9.2,
  },
  {
    name: 'The Godfather',
    year: 1972,
    rating: 9.2,
  },
  {
    name: 'The Dark Knight',
    year: 2008,
    rating: 9.0,
  },
  {
    name: 'The Godfather Part II',
    year: 1974,
    rating: 9.0,
  },
  {
    name: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    rating: 8.9,
  },
  {
    name: 'Pulp Fiction',
    year: 1994,
    rating: 8.8,
  },
  {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    rating: 8.8,
  },
  {
    name: 'Forrest Gump',
    year: 1994,
    rating: 8.8,
  },
  {
    name: 'Fight Club',
    year: 1999,
    rating: 8.7,
  },
  {
    name: 'Inception',
    year: 2010,
    rating: 8.7,
  },
];
//Si es positivo 1 se pone arriba del arreglo, si es negativo cam
function sortByName(movies: Movie[]): Movie[] {
  return movies.sort((a, b) => (a.name > b.name ? 1 : -1));
}

function sortByRating(movies: Movie[]): Movie[] {
  return movies.sort((a, b) => (a.rating > b.rating ? 1 : -1));
}

function sortByYear(movies: Movie[]): Movie[] {
  return movies.sort((a, b) => (a.year < b.year ? 1 : -1));
}

console.log(sortByName(movies));
//console.log(sortByRating(movies));
//console.log(sortByYear(movies))
console.log('f');

//logical not ! cambia a falso a verdadero
const words = 'palabra';
const wordCounter: { [key: string]: number } = {};
for (let i = 0; i < words.length; i++) {
  const letra = words[i];
  if (!wordCounter[letra]) {
    wordCounter[letra] = 1;
  } else {
    wordCounter[letra]++;
  }
}
console.log(wordCounter);
//reduce
const table: { [key: string]: number } = {};
words.split('').reduce((table, letter) => {
  if (table[letter]) {
    table[letter] += 1;
  } else {
    table[letter] = 1;
  }
  return table;
}, table);

console.log(table);
//stack; last in firts out
class Stack1 {
  data: number[];
  size: number;
  constructor() {
    this.data = [];
    this.size = 0;
  }
  push(n: number) {
    this.data[this.size] = n;
    this.size++;
  }
  pop() {
    this.size--;
    return this.data[this.size];
  }
  peek() {
    return this.data[this.size - 1];
  }
  print() {
    for (let i = this.size; i >= 0; i--) {
      console.log(this.data[i]);
    }
  }
}

const pila = new Stack1();
pila.push(9);
pila.push(10);
pila.push(11);

//pa
function isValid(s: string) {
  // Initialize stack to store the closing brackets expected...
  let stack = [];
  // Traverse each character in input string...
  for (let idx = 0; idx < s.length; idx++) {
    // If open parentheses are present, push it to stack...
    if (s[idx] === '{') {
      stack.push('}');
    } else if (s[idx] === '[') {
      stack.push(']');
    } else if (s[idx] === '(') {
      stack.push(')');
    } else if (stack.pop() !== s[idx]) {
      // If a close bracket is found (s[idx] is a close bracket)), check that it matches the last stored open bracket
      return false;
    }
  }
  // if there is anything in the stack (length != 0) we are missing a closing bracket, and the string (s) is not valid
  //Tenia !=
  return stack.length == 0;
}

console.log('() ' + isValid('()')); // true
console.log(') ' + isValid(')')); // false
console.log(' ' + isValid('')); // true
console.log('()[]{ ' + isValid('()[]{')); // false
console.log('()[} ' + isValid('()[}')); // false
// Se usa for each cuando se tenga q manejar el index, para los
//pipe \ string \
const movie = {
  name: 'Scary',
  year: '2004',
  rating: 6.5,
};
for (const i in movie) {
  console.log(i);
}

//queue firts in firts out

class Stack<T> {
  data: T[];
  size: number;

  constructor() {
    this.data = [];
    this.size = 0;
  }
  push(n: T) {
    this.data[this.size] = n;
    this.size++;
  }
  pop(): any {
    this.size--;
    return this.data[this.size];
  }
  peek() {
    return this.data[this.size - 1];
  }
  print() {
    for (let i = this.size; i >= 0; i--) {
      console.log(this.data[i]);
    }
  }
}

function validateExpression(expression: string): boolean {
  const signs = new Stack();
  let lastSign = '';
  let isValid = true;
  for (const character of expression.split('')) {
    //  console.log("current char:", character);
    //  console.log("current stack:",signs.print);
    switch (character) {
      case '{':
      case '[':
      case '(':
        signs.push(character);
        break;
      case '}': {
        lastSign = signs.pop();
        if (lastSign !== '{') {
          isValid = false;
        }
        break;
      }
      case ']': {
        lastSign = signs.pop();
        if (lastSign !== '[') {
          isValid = false;
        }
        break;
      }
      case ')': {
        lastSign = signs.pop();
        if (lastSign !== '(') {
          isValid = false;
        }
        break;
      }
    }
  }
  if (signs.size !== 0) isValid = false;

  return isValid;
}

console.log('() is valid? ', validateExpression('()'));
console.log('(){ is valid? ', validateExpression(']['));
console.log('(5+4-6[ab]) is valid? ', validateExpression('(5+4-6[ab])'));
console.log(
  '{[(a+b)]}[xy][{82{32}}] is valid? ',
  validateExpression('{[(a+b)]}[xy][{82{32}}]')
);
