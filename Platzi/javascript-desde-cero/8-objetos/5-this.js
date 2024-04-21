/**
 * this es una palabra reservada que hace referencia al objeto actual
 */


class Persona {
  constructor( nombre, edad ){
    this.nombre = nombre; // this hace referencia al objeto actual
    this.edad = edad;
  }
}

const persona1 = new Persona('Juan', 30); // new crea un nuevo objeto de la clase Persona, toma los argumentos del constructor y los asigna a las propiedades del objeto


persona1.nuevoMetodo = function(){
  console.log(`Hola mi nombre es ${this.nombre}`);
}

persona1.nuevoMetodo(); // Hola mi nombre es Juan