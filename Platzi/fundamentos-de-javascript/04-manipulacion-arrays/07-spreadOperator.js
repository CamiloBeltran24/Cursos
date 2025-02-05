/**
 * 1. Copy an Array
 */

const arrayOriginal = [1,2,3,4,5,6];
const copiaDelArreglo = [...arrayOriginal];

console.log(arrayOriginal);
console.log(copiaDelArreglo);

// Combinar Arreglos

const nuevoArreglo = [7,8,9,10]
const arregloCompleto = [...arrayOriginal, ...nuevoArreglo];

console.log(arregloCompleto);

// Crear arreglos con elementos adicionales

const arregloBase = [1,2,3];
const arregloConElementosAdicionales = [...arregloBase,4,5,6];

console.log(arregloBase);
console.log(arregloConElementosAdicionales);

// Pasar elementos a las funciones

function sum (a,b,c) {
    return a + b + c;
};

sum(1,2,3);
console.log('Resultado: ' + sum(...arregloBase) )



