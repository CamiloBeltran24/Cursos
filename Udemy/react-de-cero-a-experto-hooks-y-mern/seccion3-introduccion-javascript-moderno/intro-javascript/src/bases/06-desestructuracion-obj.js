// DESESTRUCTURACION OBJETOS

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Lider'
};


console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

const { nombre, edad } = persona;



//
const retornaPersona = ( usuario ) => {
    const { edad, nombre, clave } = usuario;
    // console.log( edad, nombre, clave );
}

retornaPersona( persona );



//
const retornaPersona2 = ( { nombre, edad, clave, rango = 'Capitan' } ) => {
    console.log( edad, nombre, clave, rango );
}
retornaPersona2( persona );


//
const useContext = ({ clave, nombre, edad, rango }) => {
    return {
        nombreClave: clave,
        nombre: nombre,
        anios: edad,
        rango: rango,
        latlng: {
            lat:14.123,
            lng: -12.356,
        }
    }
}

// Extrar obejtos anidados o variables dentro de objetos dentro de otro objeto
const { nombreClave, anios, latlng:{lat, lng} } = useContext( persona );
// console.log( nombreClave, anios, lat, lng );