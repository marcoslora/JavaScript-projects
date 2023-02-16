'use strict';
////00-Alterna-projects/04-debugging-troubleshooting/pruebas
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
}
console.log(factorial(0));
function factorial1(num) {
  let result = 0;
  for (let i = num - 1; i > 0; i--) {
    result = num *= i;
  }
  return result;
}
console.log(factorial1(5));

//Fionacci
function Fibonacci(n) {
  let previous = 0;
  let current = 1;
  let sum;

  for (let i = 1; i < n; i++) {
    sum = previous + current;
    previous = previous;
    current = sum;
  }

  return current;
}

// n0, n1, n2, n3
// 0, 1, 1, 2, 3, 5, 8, 13, 21...
// 0 (0), 1 (1), 1 (2), 2 (3), 3 (4), 5 (5), 8 (6), 13 (7), 21 (8)...
/*
Fibonacci(0) = 0
Fibonacci(1) = 1
Fibonacci(2) = 1 (0 + 1)
Fibonacci(3) = 2 (1 + 1)
Fibonacci(4) = 3 (1 + 2)
Fibonacci(5) = 5 (2 + 3)
*/
//console.log(Fibonacci(5));
