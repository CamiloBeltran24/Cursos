// Operador Ternario

const activo = true;

// let mensaje = '';

// if( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( !activo ) ? 'Activo' : null

const mensaje = activo && 'Activo'; // Es una forma de hacer un condicional if aun mas corto que el ternario, esta sintaxis omite el procesamiento de un else

console.log( mensaje );