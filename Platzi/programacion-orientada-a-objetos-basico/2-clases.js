// CLASES

// las clases por dentro son prototipos pero por fuera son una forma más sencilla de trabajar con prototipos

class Student {
  // Método constructor
  // en el constructor se definen las propiedades del objeto
  constructor( name, age, cursosAprobados ){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  // Crear un método dentro de la clase
  aprobarCurso( nuevoCurso ){
    this.cursosAprobados.push( nuevoCurso ) // this hace referencia al objeto que se está creando con la clase Student
  }
}

const pedro = new Student('Pedro', 30, ['Curso de Frontend', 'Curso de React']); // Crear un nuevo objeto con la clase Student

pedro.aprobarCurso('Curso de Angular'); // Agregar un nuevo curso al array cursosAprobados de pedro

console.log( pedro );

// ROR => Recibe un objeto y retorna un objeto

class Student2 {
  constructor({
    name,
    age,
    cursosAprobados = [],
  }){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
}


const juanita = new Student2({
  age: 20,
  cursosAprobados: ['Curso de Frontend', 'Curso de React'],
  name: 'Juanita'
});