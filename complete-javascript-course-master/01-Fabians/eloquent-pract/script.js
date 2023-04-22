let element = '';
for (let index = 1; index < 10; index++) {
  element += '#';
  console.log(element);
}
for (let linea = '#'; linea.length <= 7; linea += '#') {
  console.log(linea);
}
for (let index = 0; index < 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log('FizzBuzz');
  } else if (index % 3 == 0) {
    console.log('Fizz');
  } else if (index % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(index);
  }
}
let size = 8;
let board = '';
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}
console.log(board);
