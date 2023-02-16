'use strict';
//00-Alterna-projects/06-algorithms/linked-list
/*
A. Reversar un Linked List
Realizar una función que reciba un Linked List y devuelva otro Linked List con los mismos valores que la lista original, pero en el orden inverso.

B. Remover Duplicados de un Linked List
Realizar una función que reciba un Linked List y elimine todos los elementos duplicados de la lista. */
class Nodo {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  add(value) {
    const node = new Nodo(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  remove(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        return;
      }
      current = current.next;
    }
  }
  reverse() {
    console.log('Gonzalez');
    if (!this.head) {
      return;
    }
    let current = this.head;
    let previous = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
  removeDuplicates() {
    if (!this.head) {
      return;
    }
    const seenValues = new Set();
    seenValues.add(this.head.value);
    let current = this.head;
    while (current.next) {
      const next = current.next;
      if (seenValues.has(next.value)) {
        current.next = next.next;
        this.length--;
      } else {
        seenValues.add(next.value);
        current = next;
      }
    }
  }
}
const linkedListTest = new LinkedList();
linkedListTest.add(12);
// linkedListTest.add(11);
linkedListTest.add(14);
linkedListTest.add(11);
linkedListTest.add(20);
//linkedListTest.add(19);
//linkedListTest.add(9);
// linkedListTest.remove(11);
console.log(linkedListTest.length);
console.log(linkedListTest);
linkedListTest.reverse();
console.log(linkedListTest);
// const deleteDuplicate = new Set();
// deleteDuplicate.add(linkedListTest);
// linkedListTest.removeDuplicates();
// console.log(linkedListTest);

class Prueba {
  constructor(number) {
    this.number = number;
  }
  sum() {
    return (this.number += this.number);
  }
}
const test = new Prueba(10);
console.log(test);
test.sum();
console.log(test);

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 35 },
  { name: 'Eve', age: 28 },
];

people.sort(function (a, b) {
  return a.age - b.age;
});

console.log(people);
