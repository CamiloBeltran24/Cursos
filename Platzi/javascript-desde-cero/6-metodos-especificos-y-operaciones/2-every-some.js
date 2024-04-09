// VALIDANDO TODO CON EVERY
/**
 * Determina si todos los elementos en el array satisfacen una condicion
 * 
 * retorna true si todos cumplen con la condicion
 * retorna false si uno de los elementos no cumple con la condicion.
 */

const ages = [21, 25, 30, 22 ];

// Every()

const allAreAdults = ages.every( age => age > 18 );

console.log( ages );
console.log( allAreAdults );


// some()
/**
 * Determina si almenos uno de los elementos de un arreglo complen con una determinada condicion.
 */

const atLeasOneIsOver30 =  ages.some( age => age > 29 );
console.log( ages );
console.log( atLeasOneIsOver30 );

