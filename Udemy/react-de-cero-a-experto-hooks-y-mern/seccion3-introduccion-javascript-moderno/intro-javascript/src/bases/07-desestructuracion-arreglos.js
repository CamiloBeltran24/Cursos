// Arreglos

const personajes = ['Goku', 'Vegueta', 'Trunks'];
console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );


const [ , , p3 ] = personajes; // la coma(,) sola antes de p2 indica que ignore el elemento
// anterior del arreglo

console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123 ];
}

const arr1 = retornaArreglo();
console.log( arr1 );

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );


//
const useState = ( valor ) => {
    return [ valor, () => console.log('Hola Mundo') ];
};

// const arr = useState( 'Goku' );
// console.log( arr );

const [ nombre, setNombre ] = useState( 'Goku' );
console.log( nombre );
setNombre();