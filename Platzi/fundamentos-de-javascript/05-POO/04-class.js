class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} Años`);
    }
}

const persona1 = new Persona('Christian', 31);
persona1.saludar();