console.log('hola');

let age: number = 20;
if (age < 50) {
  age += 10;
  console.log(age);
}
console.log(age);
const parImpar = function (a: number) {
  if (a % 2 === 0) {
    console.log(`${a} es par`);
  } else {
    console.log(`${a} es impar`);
  }
};
parImpar(9);
