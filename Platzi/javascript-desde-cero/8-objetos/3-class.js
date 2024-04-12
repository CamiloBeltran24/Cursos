// CLASS
// ES6 introduce una nueva forma de crear objetos, las clases.

// Las clases son una forma de crear funciones constructoras más simples y con una sintaxis más clara.

// Para crear una clase, utilizamos la palabra reservada class seguida del nombre de la clase. Por convención, el nombre de la clase comienza con mayúscula.

class Persona {
  constructor( nombre, apellido, edad ) { // constructor es un método especial que se ejecuta al crear un objeto a partir de la clase y nos permite asignar las propiedades al objeto.
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}