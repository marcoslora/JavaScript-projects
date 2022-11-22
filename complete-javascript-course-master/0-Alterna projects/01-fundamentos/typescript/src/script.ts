//0-Alterna\ projects/01-fundamentos/typescript/

//Los array solo pueden ser de un solo tipo de dato y se definen como arrays
const preciosGasolinaT1: number[] = [
  270.1, 273.6, 278.6, 283.6, 293.6, 293.6, 293.6, 293.6, 283.6, 283.6, 287.6,
  287.6, 287.6,
];
// Las funciones en typescript se define el tipo de dato del parametro y el tipo de dato de la salida
//Funcion para medir el tamano del array
function totalDePrecios(listaDePrecios: number[]): number {
  if (listaDePrecios && listaDePrecios.length) {
    return listaDePrecios.length;
  }
  //Se retorna 0 por si el array esta vacio no diga undefined
  return 0;
}
//Verifica cual numero es mayor en el array
function precioMayor(listaDePrecios: number[]): number {
  let mayorActual = 0;
  //Verifica y remplaza el numero mayor
  for (let i = 0; i < listaDePrecios.length; i++) {
    if (mayorActual < listaDePrecios[i]) {
      mayorActual = listaDePrecios[i];
    }
  }
  return mayorActual;
}
//Verifica cual numero es menor en el array
function precioMenor(listaDePrecios: number[]): number {
  let menorActual = 9999; //infinity
  if (listaDePrecios.length > 0) {
    menorActual = listaDePrecios[0];
  }
  for (let i = 0; i < listaDePrecios.length; i++) {
    if (menorActual > listaDePrecios[i]) {
      menorActual = listaDePrecios[i];
    }
  }
  return menorActual;
}
//Sumas todos los elementos del array y los divide por su longitud
function precioPromedio(listaDePrecios: number[]): number {
  let sumaDePrecios = 0;
  for (let i = 0; i < listaDePrecios.length; i++) {
    sumaDePrecios += listaDePrecios[i];
  }
  //Si la lista esta vacia retorna 0, sino hace la divicion
  if (listaDePrecios.length === 0) return 0;
  else return sumaDePrecios / listaDePrecios.length;
}
//Variacion por semana de los precios
function cambioDePrecioPromedio(listaDePrecios: number[]): number {
  let cambiosDePrecio: number[] = [];
  //Verifica que el array tenga mas de un elemento
  if (listaDePrecios.length > 1) {
    //
    for (let i = 0; i < listaDePrecios.length - 1; i++) {
      //Resta el segundo valor - el primero
      const cambioActual = listaDePrecios[i + 1] - listaDePrecios[i];
      //Empuja el resultado al nuevo array
      cambiosDePrecio.push(cambioActual);
    }
    //Divide el total sumado entre su longitud
    return precioPromedio(cambiosDePrecio);
  }
  return 0;
}

console.log(
  `1. Cantidad total de precios: ${totalDePrecios(preciosGasolinaT1)}`
);
console.log(`2. Precio Mayor en el período: ${precioMayor(preciosGasolinaT1)}`);
console.log(`3. Precio Menor en el período: ${precioMenor(preciosGasolinaT1)}`);
console.log(
  `4. Cambios de Precio Promedio: ${cambioDePrecioPromedio(preciosGasolinaT1)}`
);
