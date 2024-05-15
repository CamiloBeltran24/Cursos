const persona = {
    nombre: 'Christian',
    apellido: 'Beltran',
    edad: 30,
    ciudad: 'Girardot',
    direccion: {
        ciudad: 'Bogota',
        zipCode: 111111,
        lat: 14.5346,
        lng: 12.35634,
    }
}

console.log( persona );
console.log({ persona });
console.log( persona.nombre );

// console.table es util para imprimir objetos literales.
console.table( persona )

const persona2 = persona;
persona2.nombre = 'Peter';
console.log({ persona });
console.log({ persona2 });


// Operador Spread :)
const persona3 = {...persona };
persona3.nombre = 'Clark';
console.log({ persona });
console.log({ persona3 });
