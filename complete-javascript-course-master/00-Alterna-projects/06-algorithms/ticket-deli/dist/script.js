"use strict";
//00-Alterna-projects/06-algorithms/ticket-deli
const people = document.getElementById('icons-wrapper');
const addQueue = document.querySelectorAll('.add-person')[0];
const removeQueue = document.querySelectorAll('.remove-person')[0];
const btnCheck = document.getElementById('btn-check');
const btnLine = document.getElementById('check-line');
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.end = 0;
    }
    enqueue(data) {
        this.items[this.end] = data;
        this.end++;
    }
    dequeue() {
        if (this.front === this.end) {
            return null;
        }
        const data = this.items[this.front];
        this.front++;
        return data;
    }
    isEmpty() {
        if (this.getSize() === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    getSize() {
        return this.end - this.front;
    }
    peek() {
        if (this.getSize() === 0) {
            return null;
        }
        return this.items[this.front];
    }
    print() {
        if (this.getSize() === 0) {
            return null;
        }
        let result = '';
        for (let i = 0; i < this.end; i++) {
            result += this.items[i] + ' ';
        }
        return result;
    }
}
function Add() {
    queue.enqueue(queue.getSize() + 1);
    const person = document.createElement('img');
    const title = document.createElement('h4');
    const wrapper = document.createElement('div');
    wrapper.className = 'person-detail';
    title.innerText = '' + queue.getSize();
    person.setAttribute('src', 'icons/person_standing_icon.png');
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(person);
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(title);
    people === null || people === void 0 ? void 0 : people.appendChild(wrapper);
}
function CheckTurn() {
    const inputWord = document.getElementById('text-input');
    const textNumber = document.createElement('h5');
    const divCount = document.querySelectorAll('.person-detail h4');
    const firtsInLine = parseInt(divCount[0].innerText);
    const t = document.createTextNode(`Tienes ${parseInt(inputWord.value) - firtsInLine} personas delante`);
    textNumber.appendChild(t);
    document.body.appendChild(textNumber);
}
btnCheck === null || btnCheck === void 0 ? void 0 : btnCheck.addEventListener('click', CheckTurn);
function checkLine() {
    const text = document.createElement('h3');
    const divCount = document.querySelectorAll('.person-detail');
    const firtsInLine = divCount.length;
    console.log(firtsInLine);
    const t = document.createTextNode(`La fila tiene ${firtsInLine} personas`);
    text.appendChild(t);
    document.body.appendChild(text);
}
btnLine === null || btnLine === void 0 ? void 0 : btnLine.addEventListener('click', checkLine);
addQueue === null || addQueue === void 0 ? void 0 : addQueue.addEventListener('click', Add);
// addStack?.addEventListener('click', Add);
function RemoveQueue() {
    var _a;
    (_a = people === null || people === void 0 ? void 0 : people.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
}
// function RemoveStack(): void {
//   queue.dequeue();
//   people?.lastElementChild?.remove();
// }
removeQueue === null || removeQueue === void 0 ? void 0 : removeQueue.addEventListener('click', RemoveQueue);
// removeStack?.addEventListener('click', RemoveStack);
const queue = new Queue();
//queue.dequeue();
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.print());
