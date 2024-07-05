// Promesas

import { getHeroById } from "./08-importaciones";

// const promesa = new Promise( (resolve, reject ) => {

//     setTimeout(() => {
//         // console.log('Dos Segundos Despues');
//         // resolve(); // -> ejecuta lo que esta en el promesa.then
//         const heroe = getHeroById(2);
//         // resolve( heroe ) // -> Esto envia la variable al then.
//         // console.log( heroe );
//         if( heroe ){
//             resolve( heroe )
//         } else {
//             reject('No se encontro ningun heroe');
//         }

//     }, 2000)
// });

// promesa.then( ( heroe )=>{
//     console.log('Then de la promesa, ', heroe);
// }).catch(( err ) =>{
//     console.log( err );
// })

const getHeroByIdAsync = ( id ) => {

    const promesa = new Promise( (resolve, reject ) => {

        setTimeout(() => {

            const heroe = getHeroById(id);

            if( heroe ){
                resolve( heroe )
            } else {
                reject('No se encontro ningun heroe con ese id');
            }

        }, 2000)
    });

    return promesa;
}

// getHeroByIdAsync(8)
//     .then( ( heroe ) => console.log( heroe))
//     .catch( err => console.warn( err ));

getHeroByIdAsync(2)
    .then( console.log )
    .catch( console.warn );