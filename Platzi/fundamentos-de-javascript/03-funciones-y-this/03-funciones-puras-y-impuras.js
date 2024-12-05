/* En JavaScript (y en programación funcional en general), las funciones se pueden clasificar como
puras o impuras dependiendo de si cumplen con ciertas características.

Una función pura es una función que:

Siempre produce el mismo resultado dado el mismo conjunto de argumentos.
No tiene efectos secundarios, es decir, no modifica ninguna variable externa o global,
ni depende de variables externas o globales que puedan cambiar.

Ejemplo de función pura:

function suma(a, b) {
    return a + b;
}

En este ejemplo, la función suma siempre devuelve el mismo resultado para los mismos valores de a y b, y no afecta ni depende de ninguna otra variable fuera de su alcance.

Una función impura es una función que:

Puede producir diferentes resultados aún si se le pasan los mismos argumentos.
Tiene efectos secundarios, como modificar una variable externa, hacer una llamada a una API,
modificar el DOM, etc.

Ejemplo de función impura:

let contador = 0;

function incrementarContador() {
    contador += 1;
    return contador;
}

En este ejemplo, la función incrementarContador es impura porque:

Depende de la variable externa contador, y el valor devuelto depende del estado anterior de esta variable.
Modifica la variable externa contador, lo que constituye un efecto secundario.

========================================================================

Funciones Puras - Side Effects
    1. Modificar variables globales
    2. Modificar parametros
    3. Solicitudes HTTP
    4. Imprimir mensajes en pantalla o consola
    5. Manipulacion del Dom
    6. Obtener la hora actual


*/

// Funcion pura

function suma( a, b ) {
    return a + b;
}
function square( x ) {
    return x*x;
}


// Funciones impura

function sum (a , b){
    console.log("A: " + a);
    return a + b;
}



let total = 0;

function sumWithSideEffect (a) {
    total += a;
}

sumWithSideEffect(20)