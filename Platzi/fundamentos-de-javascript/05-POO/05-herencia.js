class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log('El animal emite un sonido');
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); // con super hacemos alucion a las propiedades y metodos de la clase padre
        this.raza = raza;
    }
    emitirSonido() {
        console.log('El perro Ladra');
    }
    correr() {
        console.log(`${this.nombre} esta corriendo alegremente`);
    }
}

const perro1 = new Perro('Cooper', 'Perro', 'Beagle');
console.log(perro1);
perro1.correr();
perro1.emitirSonido();

//agregar metodo a la instancia
perro1.nuevoMetodo = function () {
    console.log('Este es el nuevo metodo de la instancia Perro1');
};
//Agregar metodo al prototype de la clase constructora
Perro.prototype.segundoMetodo = function () {
    console.log(
        'Este es el segundo metodo desde el prototype de la clase constructora Perro'
    );
};

perro1.segundoMetodo();
