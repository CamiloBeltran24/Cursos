/*

for in -> se utiliza en objetos
recorre las propiedades del objeto

for( variable in objeto ) {
  codigo que se va a ejecutar
}

*/

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 8,
  uva: 10,
};

for (const fruta in listaDeCompras) {
  console.log( fruta );
}


// En este siguiente ejemplo, la variable fruta es un elemento que contiene el nombre de la propiedad necesitada por eso se utiliza como un indice en el console.log listaDeCompras[fruta]

for (const fruta in listaDeCompras) {
  console.log( `${fruta} : ${listaDeCompras[fruta]}` );
}