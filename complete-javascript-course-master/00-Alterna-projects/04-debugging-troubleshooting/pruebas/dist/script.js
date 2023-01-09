function factorial(num) {
  // Si num = 0 OR num = 1, el factorial regresa 1
  if (num === 0 || num === 1) return 1;

  // Empezamos el bucle FOR con i = 4
  //Decremento i después de cada iteración
  for (let i = num - 1; i > 0; i--) {
    //Guardamos el valor de num en cada iteración
    num = num * i; // o num *= i;
  }
  return num; //120
}
console.log(factorial(5));

for (let i = 5; i <= 10; i++) {
  console.log(i);
}
