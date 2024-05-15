// Arreglos
// coleccion de informacion que se encuentra dentro de unas misma variable.

// const arreglo = new Array();
// console.log( arreglo )

const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [ ...arreglo, 5];
// arreglo2.push( 5 );

console.log( arreglo );
console.log( arreglo2 );

const arreglo3 = arreglo2.map(( numero ) => numero * 2 );
console.log( arreglo3 );
