const mysql = require('mysql');

// 1. Copiar un array.

const originalArray = [ 1, 2, 3, 4, 5 ];
const copiaDelArreglo = [...originalArray];


console.log( originalArray );
console.log( copiaDelArreglo );



// 2. Combinar arreglos.

const arreglo1 = [1,2,3];
const arreglo2 = [4,5,6];
const arreglosCombinados = [...arreglo1,...arreglo2 ];
console.log( arreglo1, arreglo2 );


// 3. Crear arreglos con elementos adicionales.

const arregloBase = [10,20,30];
const arregloConElementosAdicionales = [...arregloBase, 40, 50, 60];



// 4. Pasar elementos a funciones
function sum( a, b, c ){
  return a + b + c;
};

const numbers = [1,2,3];
const result = sum(...numbers);

console.log( result );