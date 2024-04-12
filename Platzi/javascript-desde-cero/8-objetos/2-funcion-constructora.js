// Funcion Constructora
// Las funciones constructoras son funciones que nos permiten crear objetos de un mismo tipo, es decir, objetos que tienen las mismas propiedades y métodos.

// Para crear una función constructora, utilizamos la palabra reservada function seguida del nombre de la función. Por convención, el nombre de la función constructora comienza con mayúscula.

// Dentro de la función constructora, utilizamos la palabra reservada this para referirnos al objeto que se creará a partir de la función constructora. Luego, asignamos las propiedades y métodos al objeto utilizando la sintaxis this.propiedad = valor y this.metodo = function() {}.

function Persona( nombre, apellido, edad ) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.saludar = function() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  };
}


const Christian = new Persona("Christian", "Beltran", 30); // new crea un nuevo objeto a partir de la función constructora -> Instancia
// crear un metodo para Christian que no se comparta con Diego
Christian.descansar = function() {
  console.log(`Estoy descansando`);
};
console.log( Christian );


const Diego = new Persona("Diego", "Fulanito", 20); // new crea un nuevo objeto a partir de la función constructora -> Instancia
console.log( Diego );


// Agregar un método a la función constructora que se comparta entre todas las instancias
Persona.prototype.despedir = function() {
  console.log(`Adios mi nombre es ${this.nombre} ${this.apellido}`);
};


Christian.despedir();
Diego.despedir();