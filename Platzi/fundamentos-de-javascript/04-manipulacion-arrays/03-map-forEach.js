// Metodos que NO modifican el arreglo original pero si iteran sobre el.

//MAP
//map tiene la capacidad de retornarnos un nuevo arreglo cuyos elementos seran el resultado de operacion ejecutada dentro del map
const numeros = [2,4,8,10,12];

const nuevosNumeros = numeros.map( numero => numero*numero);

console.log(numeros);
console.log(nuevosNumeros);

// forEach
const colors = ["Red","Pink","Blue"];
const iteratedColors = colors.forEach( color => { console.log( color ) });

console.log(colors);
console.log(iteratedColors); // el forEach no se puede almacenar en un varaible por que no retorna nada, solo lo que se ejecute dentro de su cuerpo

// Ejercicio Clase
// Fahrenheit to Celsius
const fahrenheit = [ 32, 68, 95, 104, 212 ];
const celsius = fahrenheit.map( temp => (5/9) * (temp - 32) );

console.log("Temperaturas en Fahrenheit " + fahrenheit);
console.log("Temperaturas en Celsius " +celsius);

// suma de todos los elementos en un array
const numerosParaSumar = [2,4,8,10,12];
let resultadoDeLaSuma = 0;
numerosParaSumar.forEach( numero => resultadoDeLaSuma += resultadoDeLaSuma + numero );

console.log( resultadoDeLaSuma );