// Objeto literal

const dog = {
  name: 'Bolt',
  age: 5,
  bark: function() {
    return 'Woof!';
  }
};


console.log( dog );

const johana = {
  name: 'Johana',
  age: 30,
  cursosAprobados: [
    'Curso de Frontend',
    'Curso de React'
  ],
  // Método
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso); // this hace referencia al objeto johana es decir al objeto que estamos creando
  }
}


johana.cursosAprobados.push('Curso de Angular'); // Agregar un nuevo curso al array cursosAprobados de johana
johana.cursosAprobados.push('Curso de Node.js'); // Agregar un nuevo curso al array cursosAprobados de johana


johana.name = 'Pedrita'; // Cambiar el nombre del objeto

console.log( johana );


// Prototipos

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // Método desde el constructor
  // this.aprobarCurso = function(nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso);
  // }
}

// Método desde el prototipo
// Se crea una sola vez y se comparte entre todas las instancias de Student
Student.prototype.aprobarCurso = function( nuevoCurso ){
  this.cursosAprobados.push( nuevoCurso )
}

const juanita = new Student('Juanita', 20, ['Curso de Frontend', 'Curso de React']); // Crear un nuevo objeto con el constructor Student

juanita.aprobarCurso('Curso de Angular'); // Agregar un nuevo curso al array cursosAprobados de juanita

console.log( juanita );