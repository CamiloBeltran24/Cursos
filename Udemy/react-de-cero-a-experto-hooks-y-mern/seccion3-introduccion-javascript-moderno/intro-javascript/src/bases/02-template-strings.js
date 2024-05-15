const nombre = 'Christian';
const apellido = 'Beltran';

const nombreCompleto = nombre + ' ' + apellido;
console.log( nombreCompleto );


const nombreCompletoConTemplateStrings = `${ nombre } ${ apellido } ${ 1 + 1 }`;
console.log(nombreCompletoConTemplateStrings);


function getSaludo( nombre ){
    return `Hola ${ nombre }`;
}

console.log(`Este es un texto: ${ getSaludo( nombreCompletoConTemplateStrings ) }`);