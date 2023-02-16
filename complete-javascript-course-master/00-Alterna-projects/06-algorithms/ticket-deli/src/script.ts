//00-Alterna-projects/06-algorithms/ticket-deli
const people = document.getElementById('icons-wrapper');
const addQueue = document.querySelectorAll('.add-person')[0];
const removeQueue = document.querySelectorAll('.remove-person')[0];
const btnCheck = document.getElementById('btn-check');
const btnLine = document.getElementById('check-line');

// const addStack = document.querySelectorAll('.add-person')[1];
// const removeStack = document.querySelectorAll('.remove-person')[1];

interface IsItems {
  [key: number]: number;
}

class Queue {
  items: IsItems;
  front: number;
  end: number;

  constructor() {
    this.items = {};
    this.front = 0;
    this.end = 0;
  }
  enqueue(data: number) {
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
    } else {
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

function Add(): void {
  queue.enqueue(queue.getSize() + 1);
  const person = document.createElement('img');
  const title = document.createElement('h4');
  const wrapper = document.createElement('div');
  wrapper.className = 'person-detail';
  title.innerText = '' + queue.getSize();
  person.setAttribute('src', 'icons/person_standing_icon.png');
  wrapper?.appendChild(person);
  wrapper?.appendChild(title);
  people?.appendChild(wrapper);
}
function CheckTurn() {
  const inputWord = document.getElementById('text-input') as HTMLInputElement;
  const textNumber = document.createElement('h5');
  const divCount = document.querySelectorAll(
    '.person-detail h4'
  ) as NodeListOf<HTMLElement>;
  const firtsInLine = parseInt(divCount[0].innerText);
  const t = document.createTextNode(
    `Tienes ${parseInt(inputWord.value) - firtsInLine} personas delante`
  );
  textNumber.appendChild(t);
  document.body.appendChild(textNumber);
}

btnCheck?.addEventListener('click', CheckTurn);

function checkLine() {
  const text = document.createElement('h3');
  const divCount = document.querySelectorAll(
    '.person-detail'
  ) as NodeListOf<HTMLElement>;
  const firtsInLine = divCount.length;
  console.log(firtsInLine);
  const t = document.createTextNode(`La fila tiene ${firtsInLine} personas`);
  text.appendChild(t);
  document.body.appendChild(text);
}
btnLine?.addEventListener('click', checkLine);

addQueue?.addEventListener('click', Add);
// addStack?.addEventListener('click', Add);

function RemoveQueue(): void {
  people?.firstElementChild?.remove();
}
// function RemoveStack(): void {
//   queue.dequeue();
//   people?.lastElementChild?.remove();
// }
removeQueue?.addEventListener('click', RemoveQueue);
// removeStack?.addEventListener('click', RemoveStack);
const queue = new Queue();

//queue.dequeue();
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.print());
