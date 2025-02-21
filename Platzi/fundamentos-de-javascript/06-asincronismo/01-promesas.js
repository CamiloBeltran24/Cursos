//las promesas tienen 3 estados: pendiente, resuelta y rechazada
/**
 * Estados de una Promesa
 * Pendiente (pending): es el estado inicial de la promesa, es el estado en el que se encuentra la promesa antes de ser resuelta o rechazada.
 * Resuelta (fullfield): es el estado en el que la promesa se resuelve satisfactoriamente.
 * Rechazada (Rejected): es el estado en el que la promesa no se puede cumplir.
 *
 * Callbacks de una promesa
 * Resolve: es una funcion que se ejecuta cuando la promesa se resuelve satisfactoriamente.
 * Reject: es una funcion que se ejecuta cuando la promesa no se puede cumplir.
 *
 * then: es un metodo que se ejecuta cuando la promesa se resuelve satisfactoriamente.
 * catch: es un metodo que se ejecuta cuando la promesa no se puede cumplir.
 */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operacionExitosa = true;
       
        if( operacionExitosa ){
            resolve('Se resolvio la promesa'); // envia un mensaje de exito al metodo then
        } else {
            reject('No se cumplio la promesa'); // envia un mensaje de error al metodo catch
        }
    }, 2000);

});


promise
    .then( (mensajeDeExito) =>{
        console.log(mensajeDeExito); // mensajeDeExito es el mensaje que envia el metodo resolve
    })
    .catch( (mensajeDeError) =>{
        console.log(mensajeDeError); // mensajeDeError es el mensaje que envia el metodo reject
    });