// Metodos que NO modifican el arreglo original pero si iteran sobre el.

//FILTER
/**
 * Crea un nuevo array con elementos que cumplen una condicion dada por una funcion
 */

const numeros = [2,4,8,10,12];
const numerosMayoresDeDiez = numeros.filter( numero => numero > 8 );
console.log(numerosMayoresDeDiez);

//Reduce
/**
 * Ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor
 */

const arregloDeNumeros = [2,4,8,10,12];
const sum = arregloDeNumeros.reduce( (accumulator, currentValue) => accumulator + currentValue, 0); // el ultimo numero es el valor inicial del "contador"
console.log(sum);

const palabras = ['Apple', 'Banana', 'Hello', 'Bye', 'Apple', 'Yellow', 'Bye', 'Apple', 'Banana', 'Apple','Bye','Yellow'];
const frecuenciaDePalabras = palabras.reduce((accumulator, currentValue) => {
    if ( accumulator[currentValue] ){
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1
    }

    return accumulator;
}, {});

console.log( frecuenciaDePalabras );
