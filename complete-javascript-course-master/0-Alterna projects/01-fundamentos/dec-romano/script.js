'use strict';
//Cree un array como los decimales y sus recpectivos numeros romanos.
let decimalesRomanos = [
  { number: 1000, roman: 'M' },
  { number: 900, roman: 'CM' },
  { number: 500, roman: 'D' },
  { number: 400, roman: 'CD' },
  { number: 100, roman: 'MC' },
  { number: 90, roman: 'XC' },
  { number: 50, roman: 'L' },
  { number: 40, roman: 'XL' },
  { number: 10, roman: 'X' },
  { number: 9, roman: 'IX' },
  { number: 5, roman: 'V' },
  { number: 4, roman: 'IV' },
  { number: 1, roman: 'I' },
];

function convDecToRoman(decimales) {
  let letrasRomamas = '';
  let number = decimales;
  //Creo el for para iterar el array
  for (let i = 0; i < decimalesRomanos.length; i++) {
    //Verifico q se cumpla la condicion de q el numero sea igual al del array
    if (decimalesRomanos[i].number <= number) {
      //Resto el decimal ingresado menos el del array para q el for loop no lo repita
      number = number - decimalesRomanos[i].number;
      //Anado el numero pero en forma de romano
      letrasRomamas = letrasRomamas + decimalesRomanos[i].roman;
      //Despues q se cumpla quiero q el for se devuelva a verificar el numero restado
      i--;
    }
  }
  console.log(letrasRomamas);
}
convDecToRoman(1945);
