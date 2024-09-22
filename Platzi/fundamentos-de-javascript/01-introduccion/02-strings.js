// Tipo de dato: String

let string1 = 'Hola, mundo';
let string2 = "Javascript es genial";
let string3 = `Mensaje: ${string1} ${string2}`;
let string4 = string1 + ' ' + string2;

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);


let frase = 'Javascript es Extremadamente Genial';
console.log( frase.length ); // longitud del string: caracteres
console.log( frase.toLowerCase()); // Todas en minuscula
console.log( frase.toUpperCase() ); // Todas en mayuscula
console.log( frase.substring(0, 10) ); // substring recibe dos indices, desde donde empieza hasta donde termina.