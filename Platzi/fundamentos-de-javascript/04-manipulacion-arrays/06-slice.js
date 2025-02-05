//=== SLICE ===
/**
 * Crea una copia superficial (Shallow Copy) de una porcion
 * del array, especificada por indices de inicio y fin (fin no incluido)
 */

const animals = [ 'ant', 'Bison', 'Camel', 'Duck', 'Elephant' ];

console.log( animals.slice(2) ); // [ 'Camel', 'Duck', 'Elephant' ]
console.log( animals.slice(2, 4) ); // [ 'Camel', 'Duck' ]
console.log( animals.slice(1, 6) ); // [ 'Bison', 'Camel', 'Duck', 'Elephant' ]
console.log( animals.slice(-2) ); // [ 'Duck', 'Elephant' ]
console.log( animals.slice(2, -1) ); // [ 'Camel', 'Duck' ]
console.log( animals.slice() ); // [ 'ant', 'Bison', 'Camel', 'Duck', 'Elephant' ]
