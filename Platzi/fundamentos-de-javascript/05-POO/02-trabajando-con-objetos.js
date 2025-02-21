/**
 * Estructura de datos que me permite guardar valores
 *
 *
 * key / value
 *
 * Objeto {
 *  Propiedad : valor,
 *  Propiedad : valor,
 *  Propiedad : valor,
 *  Propiedad : valor,
 *  Metodos
 * }
 */

const persona = {
    nombre: 'Christian',
    apellido: 'Beltrán',
    edad: 31,
    anoNacimiento: 1993,
    direccion: {
        calle: 'Calle 129 #54-07',
        ciudad: 'Bogota',
    },
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    },
};

persona.saludar();

//agregar nueva propiedad
persona.telefono = '317-589-1597';

console.log(persona);
console.log(persona.telefono);

//Agregar nuevo metodo
persona.despedir = () => {
    console.log('Adios');
};

persona.despedir();

//Eliminar metodo y propiedad
delete persona.telefono;
delete persona.despedir;
