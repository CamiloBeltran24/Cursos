// Methods that iterate over an array.
// Methods that DO NOT modify the original  array (Inmutability)


// MAP
// nos permite aplicar una funcion a cada uno de los elementos de un array y obtener un nuevo array como resultado.

const numbers = [ 1, 2, 3, 4,5 ];
const squareNumber = numbers.map( ( num ) => num * num );

console.log( numbers );
console.log( squareNumber );


// FOREACH
// A diferencia de map este metodo no nos regresa un nuevo arreglo, este si afecta el arreglo original.

const colors = ['red','green','blue'];
const iteratedColors = colors.forEach(element => {
  console.log( element );
});


console.log( colors );
console.log( iteratedColors );


// EJERCICIO
// Fahremheit to Celsius
// C = 5/9 * ( F - 32 )

const fahrenheit = 25;
const tempCollection = [20, 15, 56];

function changeTemp( temperature ){
  if( Array.isArray( temperature ) ) {
    return temperature.map( ( temp ) => change(temp))
  } else {
    return change( temperature );
  }
}

function change( number ) {
  return 5/9 * ( number - 32 );
}

console.log(changeTemp( fahrenheit ));
console.log(changeTemp( tempCollection ));