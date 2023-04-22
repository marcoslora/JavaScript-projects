// Use the acumulator pattern
//Letther counts in a word
const palabra = "fabian";

const palabraContador = {};
for (let i = 0; i < palabra.length; i++) {
  const letra = palabra[i];
  if (!palabraContador[letra]) {
    palabraContador[letra] = 1;
  } else {
    palabraContador[letra]++;
  }
}
console.log(palabraContador);
