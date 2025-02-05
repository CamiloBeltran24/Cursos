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
        ciudad: 'Bogota'
    },
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`);
        
    }
}