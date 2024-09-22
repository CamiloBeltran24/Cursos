/**
 * OPERADORES LOGICOS
 *
 * && (AND lógico): devuelve true solo si ambas condiciones son verdaderas.
 * || (OR lógico): devuelve true si al menos una de las condiciones es verdadera.
 * ! (NOT lógico): invierte el valor lógico, es decir, convierte true en false y false en true.
 *
 */
const a = 10;
const b = 20;
const c = "10"; // c es un string ahora

// && (AND lógico): ambas condiciones deben ser verdaderas
console.log( a > 5 && b > 15 ); // true, porque a es mayor que 5 y b es mayor que 15
console.log( a === c && b > 15 ); // false, porque a (número) no es estrictamente igual a c (string)

// || (OR lógico): al menos una de las condiciones debe ser verdadera
console.log( a === c || b > 15 ); // true, porque b es mayor que 15, aunque a no sea estrictamente igual a c
console.log( a > 15 || c === "15" ); // false, porque ni a es mayor que 15 ni c es igual a "15"

// ! (NOT lógico): invierte el valor lógico
console.log( !(a === c) ); // true, porque a no es estrictamente igual a c, y el ! lo invierte a true
console.log( !(b > 15) ); // false, porque b sí es mayor que 15, pero el ! lo invierte a false

