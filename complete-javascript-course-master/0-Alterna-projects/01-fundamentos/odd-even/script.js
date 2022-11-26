'use strict';
const parImpar = function (a) {
  if (a % 2 === 0) {
    console.log(`${a} es par`);
  } else {
    console.log(`${a} es impar`);
  }
};
parImpar(101);

let number = -1;
if (number === -number) {
  number = number * -1;
  console.log(number);
} else {
  console.log(number);
}
