// Metodos que NO modifican el arreglo original pero si iteran sobre el.

/**
 * === FIND ===
 * Devuelve el valor del primer elemento del array que cumpla la
 * funcion de prueba proporcionada.
 */
const multiploDe5 = [5,10,15,20]
const primeroNumeroMayorA10 = multiploDe5.find( number => number > 10 );

console.log(multiploDe5);
console.log(primeroNumeroMayorA10);


/**
 * === findIndex ===
 * Devuelve el indice del primer elemento en un array que satisface una condicion
 * poporcionada en forma de funcion. Si no encuentra ningun elemento que cumpla
 * con la condicion devuelve -1.
 */

const multiploDe2 = [2,20,60,80,14]
const indicePrimerNumeroCoincidencia = multiploDe2.findIndex( number => number > 10 ); // Retorna el indice

console.log(multiploDe2);
console.log(indicePrimerNumeroCoincidencia);