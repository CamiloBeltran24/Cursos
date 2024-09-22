// 1. Tipo de dato entero y decimal

const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. Notacion cientifica
const cientifico = 5e3;

// 3. infinitos y Nan
const infinito = infinity;
const noEsUnNumero = Nan;

// Operaciones aritmeticas
// 1. Suma, resta, Multiplicacion, Division
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 4;
const division = 16 / 2;


//2. Modulo y exponenciacion
const modulo = 15 % 8; // util para saber si un numero es multiplo de otro
const exponenciacion = 2 ** 3;


//PROBLEMAS DE PRESICION
const resultado = 0.1 + 0.2;
console.log(resultado); // Esto retorna la suma pero con un numero decimal muy largo 0.30000000000000004
console.log(resultado.toFixed(1)); // con toFixed podemos decirle a js que sea mas precioso y no de una determinada cantidad de decimales
console.log( resultado === 0.3);
console.log( resultado.toFixed(1) === 0.3 );


//OPERACIONES AVANZADAS

const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random()
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);




