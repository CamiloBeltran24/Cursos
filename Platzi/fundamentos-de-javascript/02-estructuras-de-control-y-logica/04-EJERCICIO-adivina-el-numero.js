// EJERCICIO ADIVINA EL NUMERO

const numeroSecreto = Math.floor(Math.random() * 10 + 1);
console.log(numeroSecreto);

const numeroJugador = parseInt(prompt("Ingresa un numero: "));
console.log(`Este es el numero con el que juegas: ${numeroJugador}`);


if( numeroJugador === numeroSecreto ) {
    console.log("¡Felicidades! Adivinaste el numero secreto");
} else if( numeroJugador < numeroSecreto ) {
    console.log("El numero es demasiado bajo, intenta de nuevo");
} else {
    console.log("El numero es demasiado alto, intenta de nuevo");
}

