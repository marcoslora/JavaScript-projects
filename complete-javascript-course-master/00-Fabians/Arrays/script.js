const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//Filter method
const filteredItems = items.filter((item) => {
  return item.name <= 100;
});
console.log(filteredItems);

//Map
const itemsMap = items.map((item) => {
  return item.name;
});
console.log(itemsMap);

//find
const foundItem = items.find((item) => {
  return item.name === "TV";
});
console.log(foundItem);

//ForEach
items.forEach((item) => {
  console.log(item.price);
});

//Some revisa si uno cumple la condicion return boolean
const inexpensiveItems = items.some((item) => {
  return item.price <= 0;
});
console.log(inexpensiveItems);

//Every revisa q todos cumplan la condicion
const inexpensivItems = items.every((item) => {
  return item.price <= 1000;
});
console.log(inexpensivItems);

//Reduce
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

//Includes
const itemsNumb = ["n", "m"];
const includesTwo = itemsNumb.includes("m");
console.log(includesTwo);
const array = { d: 2, s: 2, a: 3 };
console.log(Object.keys(array).length);

for (let i = 0; i < Object.keys(array).length; i++) {
  console.log(Object.values(array)[i]);
}
