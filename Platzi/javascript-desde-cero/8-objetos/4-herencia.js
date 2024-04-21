// HERENCIA

class Animal {
  constructor( nombre, tipo ){
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido(){
    console.log("Sonido de animal");
  }
}

class Perro extends Animal { // extends nos permite heredar las propiedades y métodos de una clase padre
  constructor( nombre, tipo, raza ){ // constructor es un método especial que se ejecuta al crear un objeto de una clase
    super( nombre, tipo ); // super() llama al constructor de la clase padre y hereda las propiedades de la clase padre
    this.raza = raza;
  }
  emitirSonido(){
    console.log("Guau guau");
  }
  correr(){
    console.log(`${this.nombre} está corriendo`);
  }
}


const cooper = new Perro("Cooper", "Perro", "Beagle");

cooper.emitirSonido();
cooper.correr();

// Agregar un método a la instancia de la clase
cooper.nuevoMetodo = function(){
  console.log("Nuevo método");
}

// Agregar un método a la clase constructora
Perro.prototype.segundoNuevoMetodo = function(){
  console.log("Nuevo método");
}