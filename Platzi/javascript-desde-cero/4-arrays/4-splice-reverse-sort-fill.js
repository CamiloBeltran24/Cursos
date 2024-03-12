//SPLICE
const vegetables = ['Carrot', 'Broccoli', 'Spinach', 'Tomato'];
/**
 * vegetables.splice(2, 1, 'Cucumber', 'Onion');
 * vegetables.splice( posicion dentro del array donde hace el cambio, cuantos elementos a partir de ese va a eliminar, elementos que va a agregar);
 */
const removedVegetables = vegetables.splice(2, 1, 'Cucumber', 'Onion');

console.log( vegetables );
console.log( removedVegetables );


// REVERSE
// Permite ordenar nuestro array a la inversa

const numbers = [30,60,10,5,150,65,89,92,15,17,22,35,41,73,58,21,17,9,5,3,1];
console.log( numbers );

const reversedArray = numbers.reverse();
console.log( reversedArray );


//SORT

const unsortNumbers = [ 10, 4, 30, 1, 34, 14, 7, 89, 9 ];
const unicodeSortedNumbers = unsortNumbers.sort();

console.log( unicodeSortedNumbers );


const unsortNumbers2 = [ 4, 18, 1, 62, 34 ];
const sortedNumbers = unsortNumbers2.sort( ( a, b ) => a - b );
// 4 - 18 = -14 -> si encuentra un numero negativo no lo mueve
// 18 - 1 = 17 -> si encuentra un numero positivo lo mueve de posicion
// Este proceso de realiza manera repetitiva hasta que javascript se da cuenta que todo esta debidamente ordenado.
console.log( unsortNumbers );
console.log( sortedNumbers );


// SORT STRINGS UTF-16
const cities = ['New York', 'Paris', 'Tokyo', 'London'];
console.log(cities);

const sortedCities = cities.sort();
console.log(sortedCities);



// FILL
const ages = [ 21, 35, 45, 50, 34, 56, 21, 50, 32, 67 ];
console.log(ages.fill(0, 2, 5));
console.log(ages.fill(15, 1));
console.log(ages.fill(15));