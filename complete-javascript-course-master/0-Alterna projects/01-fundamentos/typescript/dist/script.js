'use strict';
//0-Alterna\ projects/01-fundamentos/typescript/
//Los array solo pueden ser de un solo tipo de dato y se definen como arrays
const preciosGasolinaT1 = [
  270.1, 273.6, 278.6, 283.6, 293.6, 293.6, 293.6, 293.6, 283.6, 283.6, 287.6,
  287.6, 287.6,
];
// Las funciones en typescript se define el tipo de dato del parametro y el tipo de dato de la salida
function totalDePrecios(listaDePrecios) {
  if (listaDePrecios && listaDePrecios.length) {
    return listaDePrecios.length;
  }
  //Se retorna 0 por si el array esta vacio no diga undefined
  return 0;
}
function precioMayor(listaDePrecios) {
  let mayorActual = 0;
  for (let i = 0; i < listaDePrecios.length; i = i + 1) {
    if (mayorActual < listaDePrecios[i]) {
      mayorActual = listaDePrecios[i];
    }
  }
  return mayorActual;
}
function precioMenor(listaDePrecios) {
  let menorActual = 9999;
  if (listaDePrecios.length > 0) {
    menorActual = listaDePrecios[0];
  }
  for (let i = 0; i < listaDePrecios.length; i = i + 1) {
    if (menorActual > listaDePrecios[i]) {
      menorActual = listaDePrecios[i];
    }
  }
  return menorActual;
}
function precioPromedio(listaDePrecios) {
  let sumaDePrecios = 0;
  for (let i = 0; i < listaDePrecios.length; i = i + 1) {
    sumaDePrecios += listaDePrecios[i];
  }
  if (listaDePrecios.length === 0) return 0;
  else return sumaDePrecios / listaDePrecios.length;
}
function cambioDePrecioPromedio(listaDePrecios) {
  let cambiosDePrecio = [];
  if (listaDePrecios.length > 1) {
    for (let i = 0; i < listaDePrecios.length - 1; i = i + 1) {
      const cambioActual = listaDePrecios[i + 1] - listaDePrecios[i];
      cambiosDePrecio.push(cambioActual);
    }
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
