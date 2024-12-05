/*
 CLOSURE: función que tiene acceso a variables de un ámbito externo,
 incluso después de que esa función haya terminado de ejecutarse.

 Ámbito léxico: cada vez que se declara una función,
 crea su propio ámbito léxico, y puede acceder a las variables
 dentro de ese ámbito y a las variables en ámbitos superiores.
 
*/

function outerFunction (){
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const clousureExample = outerFunction();
console.log( clousureExample );
console.log( clousureExample() );

// =========================

function createCounter () {
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();
counterB();

// ==================================

function outer() {
    let message = "Hello, ";

    function inner (name) {
        console.log( message + name );
    }

    return inner;
}

const CLOSUREA = outer();
CLOSUREA("Rambo");
CLOSUREA("Peter");

const CLOSUREB = outer();
CLOSUREB("Tony");
CLOSUREB("Mike");

