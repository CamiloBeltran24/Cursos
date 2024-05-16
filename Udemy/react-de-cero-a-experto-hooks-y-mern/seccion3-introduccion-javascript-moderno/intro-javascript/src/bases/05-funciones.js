function saludar() {
    return `Hola Mundo`;
}

console.log( saludar() );

// const saludar_flecha = ( nombre ) => {
//     return `Hola ${ nombre }`;
// }

const saludar_flecha = ( nombre ) => `Hola ${ nombre }`; // funcion flecha abreviada couando todo lo que hace es un return. "return implicito"


console.log( saludar('Freezer') );

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_parasito23'
});



const getUsuarioActivo = ( nombre ) =>  (
    {
        uid: 'ABC123',
        username: nombre
    }
);



const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );
