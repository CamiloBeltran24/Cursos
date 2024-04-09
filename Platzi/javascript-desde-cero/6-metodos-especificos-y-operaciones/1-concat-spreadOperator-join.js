// Methods that DO NOT MODIFY the original array ( inmutability );

const morseCode1 = ['...','---'];// H O
const morseCode2 = ['.-.', '.-']; // L A

// Combine with concat() - way 1
const morseCodeMessage = morseCode1.concat( morseCode2 );

console.log( morseCode1 );
console.log( morseCode2 );
console.log('====================================');
console.log( morseCodeMessage );
console.log('====================================');


// Combine with concat() - way 2
// En esta forma se pone primero
// un arreglo vacio seguido del concat.
const morseCodeMessage2 = [].concat( morseCode1, morseCode2 );


// SPREAD OPERATOR

function combineMorseMessages( morseCode1, morseCode2 ){
  return [...morseCode1, ...morseCode2] // retorna una unico arreglo con la mezcla de los arreglos enviados como parametros a la funcion.
}

console.log('====================================');
console.log(combineMorseMessages( morseCode1, morseCode2 ));
console.log('====================================');


const numbers = [1,2,3];
const myString = 'String';

combineMorseMessages( numbers, myString ); // cuando combinamos un string con un arreglo JS por defecto divide la palabra y pone cada caracter de la palabra en una posicion del array

// JOIN()
// Nos permite juntar elementos separandolos
// por el caracter que le pasemos en el llamado
// al metodo join();

const morseCodeMessageString = morseCodeMessage.join('');

console.log( morseCode1 );
console.log( morseCode2 );
console.log( morseCodeMessageString );