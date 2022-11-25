const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'TV', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

//Filter retorna los objectos completos que cumplan la condicion
const filteredItems = items.filter(item => {
  return item.price <= 100;
});
console.log(filteredItems);

//Map retorna lo que le pides similar a un for
//map llama una funcion array
const itemsMap = items.map(item => {
  return item.price;
});

console.log(itemsMap);

//find encuentra el primer objecto que cumpla la condicion
const foundItem = items.find(item => {
  return item.name === 'TV';
});
console.log(foundItem);

//ForEach recorre cada elemento del array estilo for
items.forEach(item => {
  console.log(item.price);
});

//Some revisa si uno cumple la condicion retornar un boolean
const inexpensiveItems = items.some(item => {
  return item.price <= 0;
});
console.log(inexpensiveItems);

//Every revisa q todos cumplan la condicion para retornar un bolean
const inexpensivItems = items.every(item => {
  return item.price <= 1000;
});
console.log(inexpensivItems);

//Reduce recorre todo el array sumando y puedes concatenar el ultimo parametro de la funcion
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

//Includes revisa si existe y retorna un boolean
const itemsNumb = ['n', 'm'];
const includesTwo = itemsNumb.includes('m');
console.log(includesTwo);
//Object.key, Object.values los elementos de un objecto en un array
const array = { d: 2, s: 2, a: 3 };
console.log(Object.keys(array).length);
//Recorriendo cada elemento del nuevo array
for (let i = 0; i < Object.keys(array).length; i++) {
  console.log(Object.values(array)[i]);
}
