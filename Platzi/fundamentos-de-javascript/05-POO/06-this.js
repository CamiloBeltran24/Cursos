/**
 * this --- Se va a utilizar siempre que trabajemos con class
 *
 * this hace referencia al objeto o a la clase actual
 */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona('Alice', 21);
const persona2 = new Persona('Christian', 31);

persona1.nuevoSaludo = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
};
