/**
 * for in se puede utilizar para iterar en objetos innumerables, el caso mas frecuente seran los OBJETOS
 *
 * for ( variable in objeto ) {
 *  codigo a ejecutar
 * }
 *
 */

const listaDeCompras = {
    manzanas: 5,
    peras: 3,
    naranjas: 5,
    uvas: 4,
    moras: 6,
}

for ( fruta in listaDeCompras ){
    console.log(fruta);
}

console.log('====================================');
console.log('====================================');

for ( fruta in listaDeCompras ){
    console.log( `${fruta}:  ${listaDeCompras[fruta]}` ); // acceder a cada propiedad del objeto y su valor
}