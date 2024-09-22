/*OPERADORES DE COMPARACION

==      => verifica solo el valor
===     => verifica que el valor y el tipo de dato sean iguales entre dos datos
!=      => verifica si un valor es diferente de otro en una comparacion de dos datos
!==     => verifia que el valor y el tipo de dato sean diferentes entre dos datos
>       => verifica si un dato es mayor a otro
<       => verifica si un dato es menor a otro
>=      => verficia si un dato es mayo o igual a otro
<=      => verifica si un dato es menor o igual a otro

*/

const a = 10;
const b = 20;
const c = "10";

// === verifica que el valor y el tipo de dato sean iguales entre dos datos
console.log(a === b); // false, porque 10 no es igual a 20
console.log(a === c); // false, porque 10 es número y "10" es string

// == verifica solo el valor
console.log(a == b); // false, porque 10 no es igual a 20
console.log(a == c); // true, porque el valor 10 es igual al valor "10" (sin comparar tipos)

// !== verifica que el valor y el tipo de dato sean diferentes
console.log(a !== b); // true, porque 10 no es igual a 20
console.log(a !== c); // true, porque 10 es número y "10" es string

// != verifica si un valor es diferente de otro
console.log(a != b); // true, porque 10 es diferente de 20
console.log(a != c); // false, porque 10 es igual a "10" (sin comparar tipos)

// > verifica si un dato es mayor a otro
console.log(a > b); // false, 10 no es mayor que 20
console.log(b > a); // true, 20 es mayor que 10

// < verifica si un dato es menor a otro
console.log(a < b); // true, 10 es menor que 20
console.log(b < a); // false, 20 no es menor que 10

// >= verifica si un dato es mayor o igual a otro
console.log(a >= 10); // true, 10 es igual a 10
console.log(b >= a); // true, 20 es mayor que 10

// <= verifica si un dato es menor o igual a otro
console.log(a <= 10); // true, 10 es igual a 10
console.log(a <= b); // true, 10 es menor que 20

