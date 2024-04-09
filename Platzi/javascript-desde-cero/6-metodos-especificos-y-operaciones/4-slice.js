

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // muestra la porcion del arreglo apartir de la posicion 2
console.log(animals.slice(2, 4)); // entrega una porcion del arreglo desde la posicion a la posicion 3 siendo el 4 la posicion donde debe acabar de incluir
console.log(animals.slice(2, 5));

console.log( animals.slice(-2)); // entrega un porcion en sentido inverso siendo -1 el ultimo elemento del array
console.log( animals.slice( 2, -1 ) ); // entrega una porcion del arreglo que empieza en la posicion 2 y acaba en la posicion -1