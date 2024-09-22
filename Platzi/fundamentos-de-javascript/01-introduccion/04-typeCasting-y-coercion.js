//CONVERSION DE TIPOS DE DATOS

// La conversión de tipos en JavaScript es fundamental y una característica distintiva del lenguaje.
// JavaScript utiliza tanto compiladores como intérpretes para traducir el código escrito por los programadores en un formato que el computador pueda entender.
// Los lenguajes de programación se dividen en compilados (e.g., C, C++, Rust, Go, Swift) y los interpretados (e.g., JavaScript, Python, Ruby, PHP).
// Lenguajes Compilados vs Interpretados
// Lenguajes compilados: El código es traducido antes de la ejecución del programa. Ejemplos: C, C++, Rust, Go, Swift.
// Lenguajes interpretados: El código es traducido a medida que se va ejecutando el programa. Ejemplos: JavaScript, Python, Ruby, PHP.

// Conversión Implícita y Explícita
// Conversión implícita: JavaScript convierte los tipos automáticamente durante la ejecución.
// Conversión explícita: El programador convierte los tipos manualmente según sea necesario.


// Ejemplo conversion implicita:
const numero = 2;
const booleano = true;
const resultado = numero + booleano;  // resultado es 3 (número + booleano se convierte a número)
console.log(resultado);  // 3