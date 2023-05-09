let element = '';
for (let index = 1; index < 10; index++) {
  element += '#';
  console.log(element);
}
for (let linea = '#'; linea.length <= 7; linea += '#') {
  console.log(linea);
}
for (let index = 0; index < 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log('FizzBuzz');
  } else if (index % 3 == 0) {
    console.log('Fizz');
  } else if (index % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(index);
  }
}
let size = 8;
let board = '';
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}
console.log(board);
const humus = function (factor) {
  const ingrediente = function (cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += 's';
    }
    console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
  };
  ingrediente(1, 'lata', 'garbanzos');
  ingrediente(0.25, 'taza', 'tahini');
  ingrediente(0.25, 'taza', 'jugo de limón');
  ingrediente(1, 'clavo', 'ajo');
  ingrediente(2, 'cucharada', 'aceite de oliva');
  ingrediente(0.5, 'cucharadita', 'comino');
};
humus(2);
function envolverValor(n) {
  let local = n;
  return (x = 0) => x + local;
}
let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);
console.log(envolver1(10));
// → 1
console.log(envolver2());
// → 2

function encontrarSolucion(objetivo) {
  function encontrar(actual, historial) {
    console.log(actual > objetivo, actual, objetivo);
    if (actual == objetivo) {
      return historial;
    } else if (actual > objetivo) {
      return null;
    } else {
      return (
        encontrar(actual + 5, `(${historial} + 5 )`) ||
        encontrar(actual * 3, `(${historial} * 3)`)
      );
    }
  }
  return encontrar(1, '1');
}
console.log(encontrarSolucion(13));

function encontrarSolucion1(objetivo) {
  function encontrar(actual, historial) {
    if (actual == objetivo) {
      return [historial];
    } else if (actual > objetivo) {
      return [];
    } else {
      const soluciones = [
        ...encontrar(actual + 5, `(${historial} + 5)`),
        ...encontrar(actual * 3, `(${historial} * 3)`),
      ];
      return soluciones;
    }
  }

  const soluciones = encontrar(1, '1');
  let solucionMasCorta = null;

  for (const solucion of soluciones) {
    if (
      solucionMasCorta === null ||
      solucion.length < solucionMasCorta.length
    ) {
      solucionMasCorta = solucion;
    }
  }

  return solucionMasCorta;
}

console.log(encontrarSolucion1(101));

function imprimirInventarioGranja(vacas, pollos) {
  let stringVaca = String(vacas);
  while (stringVaca.length < 3) {
    stringVaca = '0' + stringVaca;
  }
  console.log(`${stringVaca} Vacas`);
  let stringPollos = String(pollos);
  while (stringPollos.length < 3) {
    stringPollos = '0' + stringPollos;
  }
  console.log(`${stringPollos} Pollos`);
}
imprimirInventarioGranja(7, 11);

function esPar(x) {
  if (x % 2 == 0) return true;
  else return false;
}
console.log(esPar(50));
