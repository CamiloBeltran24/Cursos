/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
        username: 'andres',
        password: '123',
    },
    {
        username: 'caro',
        password: '456',
    },
    {
        username: 'mariana',
        password: '789',
    },
];

const usersTimeline = [
    {
        username: 'Estefany',
        timeline: 'Me encata Javascript!',
    },
    {
        username: 'Oscar',
        timeline: 'Bebeloper es lo mejor!',
    },
    {
        username: 'Mariana',
        timeline: 'A mi me gusta mÃ¡s el cafÃ© que el tÃ©',
    },
    {
        username: 'Andres',
        timeline: 'Yo hoy no quiero trabajar',
    },
];

let usuario = prompt('Ingrese su usuario');
let contraseña = prompt('Ingrese contraseña');

const usuarioEncontrado = usersDatabase.find(
    (usuarioAlmacenado) => usuarioAlmacenado.username === usuario && usuarioAlmacenado.password === contraseña
);
console.log(usuarioEncontrado);

if (usuarioEncontrado !== null && usuarioEncontrado !== false && usuarioEncontrado !== undefined) {
    const timeline = usersTimeline.find((timeline) => timeline.username === usuarioEncontrado.username);
    console.log(`Bienvenido ${usuarioEncontrado.username}`);
    console.log(`Este es tu timeline: ${timeline.timeline}`);
} else {
    console.log('Usuario o contraseÃ±a incorrectos');
}
