'use strict';

//Questions
//What is the time complexity of matrix multiplication?

/*What is the difference between an array and a linked list?
The most important difference is: the arrays have an index and linkedlists do not and linkedlist are easier to move the position.
 */

/*What is the difference between a stack and a queue?

stack data structure uses the order of last in first out and queue uses the order for in and out the data first in first out*/

//Problems
// Write a program to find the median of an unsorted integer array
function bubbleSort(arr) {
  let len = arr.length; // Get the length of the array
  for (let i = 0; i < len; i++) {
    // Outer loop to iterate through the array from first to last element
    for (let j = 0; j < len - 1; j++) {
      // Inner loop to compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Check if the current element is greater than the next element
        let tmp = arr[j]; // Swap the elements using a temporary variable
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr; // Return the sorted array
}

const arrayNumber = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
function median(numbers) {
  const numberInOrders = bubbleSort(numbers);
  const mid = Math.floor(numberInOrders.length / 2);

  if (numberInOrders.length % 2 === 0) {
    return (numberInOrders[mid - 1] + numberInOrders[mid]) / 2;
  } else {
    return numberInOrders[mid];
  }
}

console.log(median(arrayNumber));

// Write a program to perform matrix multiplication
//What is the time complexity of matrix multiplication?
//The time complexity of the matrixMultiplication function is O(n^3), where n is the size of the matrices. This is because we have three nested loops that each iterate over n elements, resulting in a total of n^3 iterations.

function matrixMultiplication(a, b) {
  const aRows = a.length;
  const aCols = a[0].length;
  const bCols = b[0].length;
  const result = new Array(aRows);

  for (let i = 0; i < aRows; i++) {
    result[i] = new Array(bCols).fill(0);
    for (let j = 0; j < bCols; j++) {
      for (let k = 0; k < aCols; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}

const a = [
  [1, 2, 3],
  [4, 5, 6],
];
const b = [
  [7, 8],
  [9, 10],
  [11, 12],
];

const c = matrixMultiplication(a, b);
console.log(c);
// Output: [[58, 64], [139, 154]]
// Write a program to perform matrix multiplication
// Write a program stack implement two queue
//The difference would be that an static array handles simples information on it's
//static
//linked list
//O(n^3)
