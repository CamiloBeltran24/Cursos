/**
 *
 * se va a estar utilizando en objetos iterables como arrays o string
 * es decir for of se puede utilizar sobre elementos de lista !
 *
 * for ( variable of objeto ) {
 *  // codigo
 * }
 *
 * un truco para saber si puedes usar for of en un elemento es si al hacerle variable.length obtienes un numero
 *
*/

let canasta = ["manzana","pera","naranja","uva"];

for (fruta of canasta) {
    console.log(`${fruta}`);
}