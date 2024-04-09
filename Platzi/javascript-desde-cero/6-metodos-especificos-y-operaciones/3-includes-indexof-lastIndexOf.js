// INCLUDES
/**
 * Determina si un array incluye un determinado elemento,
 * devuelve true o false segun corresponda.
 */

const numbers = [ 1, 2, 3, 4, 5 ];

const result = numbers.includes(3);
console.log( result );

const result2 = numbers.includes(8);
console.log( result2 );


// INDEXOF
/**
 * Retorna el primer indice en el que
 * se puede encontrar un elemento
 * dado en el array, ó retorna -1 si el
 * elemento no esta presente en el arreglo.
 */

const posicionNumero3 = numbers.indexOf( 3 );
console.log( posicionNumero3 ); // Retorna la posicion dentro del array en que se encuntra el numero 3.

// LASTINDEXOF
/**
 * Retorna el ultimo indice en el que
 * se puede encontrar un elemento
 * dado en el array, ó retorna -1 si el
 * elemento no esta presente en el arreglo.
 */
const fruits = ['Apple', 'Cherry', 'Grape', 'Apple'];
const lastApplePosition = fruits.lastIndexOf('Apple');
console.log( lastApplePosition );


// EJERCICIO: Encontrado los indices
