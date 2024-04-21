/*
Estrucutra de For Of

Se utiliza en objetos iterables ( Array, strings );

  for( variable of objeto ){
   // Codigo a ejecutar
  }
*/

let list = ["eat", "sleep", "code", "repeat"];

for (const listItem of list) { // for of recorre el array y asigna cada valor a la variable listItem
  console.log(listItem);
};


let canasta = ["Manzana", "Pera", "Naranjas", "Uvas", "lulo"];

for ( const fruta of canasta ) {
  console.log( fruta );
}