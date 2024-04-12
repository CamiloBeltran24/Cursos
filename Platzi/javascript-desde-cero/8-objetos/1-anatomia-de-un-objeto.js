// OBJETOS
/**
 * es una estructura de datos que me permite almacenar diferentes tipos de datos
 * un objeto tiene propiedades y métodos
 *
 * los metodos son funciones que se ejecutan dentro de un objeto
 * las propiedades son valores que se almacenan dentro de un objeto
 *
 * key : value
 *
 * cada propiedad tiene un nombre y un valor
 *
 * objeto {
 *  propiedad: valor
 *  propiedad: valor
 *  propiedad: valor
 * }
 *
 */

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  email: "juan.perez@correo.com",
  direccion: {
    ciudad: "Buenos Aires",
    pais: "Argentina",
  },
  saludar(){
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

console.log( persona );


console.log( persona.nombre ); // acceder a una propiedad
persona.saludar( persona.saludar() ); // ejecutar un método

persona.telefono = "123456789"; // agregar una propiedad
console.log( persona.telefono );

// this
// agregar un método a un objeto
persona.despedir = () => {
  console.log(`Adios mi nombre es ${this.nombre}`);
};
console.log( persona.despedir() );


console.log( persona.direccion.ciudad );// acceder a una propiedad de un objeto anidado


// Borrar una propiedad
delete persona.telefono; // borra la propiedad telefono


// Borrar un método
delete persona.despedir; // borra el método despedir

console.log( persona );

