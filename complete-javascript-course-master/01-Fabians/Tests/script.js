let details = [
  {
    customerName: 'Chris',
    customerAge: 32,
  },
  {
    customerName: 'David',
    customerAge: 26,
  },
  {
    customerName: 'Bob',
    customerAge: 29,
  },
  {
    customerName: 'Carol',
    customerAge: 25,
  },
];

const list = ['h', 'e', 'l', 'l', 'o'];

list.map((currElement, index) => {
  console.log('The current iteration is: ' + index);
  console.log('The current element is: ' + currElement);
  console.log('\n');
  return currElement; //equivalent to list[index]
});
const user1 = { id: 1, nombbre: 'jose' };
const user2 = user1;
console.log(user2);
