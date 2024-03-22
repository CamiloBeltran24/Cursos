/**
 * Estos metodos nos permiten encontrar elementos dentro de un array
 */

// =============== FIND
// Retorna el primer elemento que cumpla con una condicion que le enviemos como parametro dentro de una funcion.

const multipleOf5 = [5,10,15,20]
const firstNumberGreaterThan10 = multipleOf5.find( number => number > 10 );

console.log( multipleOf5 );
console.log( firstNumberGreaterThan10 );

// ============== FindIndex
/**
 * Retornar el indice del primer elemento en un array que satisface una condicion proporcionada.
 */

const randomNumber = [6,14,27,56,40];
const indexNumber = randomNumber.findIndex( number => number > 30 );

console.log( randomNumber );
console.log( indexNumber )
