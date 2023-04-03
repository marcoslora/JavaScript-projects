function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Ejemplo de uso:

let numbers = [1, 2, 3, 4, 5];
let result = sumArray(numbers);
console.log(result); // 15
