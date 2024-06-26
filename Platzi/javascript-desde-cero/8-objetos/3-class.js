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

const juan = new Persona("Juan", "Perez", 30); // new crea un nuevo objeto a partir de la clase -> Instancia
console.log( juan );

juan.saludar(); // Ejecutar un método

// Agregar un método a la clase que se comparta entre todas las instancias
Persona.prototype.despedir = function() {
  console.log(`Adios mi nombre es ${this.nombre} ${this.apellido}`);
};

juan.despedir(); // Ejecutar un método desde la instancia juan