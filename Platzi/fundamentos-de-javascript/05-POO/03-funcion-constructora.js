
function Persona( nombre, apellido, edad ){
    this.nombre = nombre;
    this.edad = edad;
    this.apellido = apellido;
}

const persona1 = new Persona('Juan', 'Perez', 10);
console.log(persona1);

const persona2 = new Persona('Johana', 'Perez', 18);
console.log(persona2);

Persona.prototype.telefono = "123-456-7572";
persona1.nacionalidad = 'Colombia';
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    
}


persona1.saludar();
persona2.saludar();