/**
 * primero se ejcuta el codigo dentro del do y despues hace la verificacion de la condicion para volver a ejecutar el codigo del do !
 *
 * do {
 *  codigo
 * } while ( condicion );
 *
 */

let contador = 0;

do {
    console.log( contador );
    contador++;
} while(contador < 10);