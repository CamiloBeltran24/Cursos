/**
 * while nos introduce en un loop siempre y cuando una instruccion
 * que definamos sea veridica, cuando deje de ser veridica saldremos de este loop
 *
 * es importante tener presente que si no se usa con cuidado podriamos entrar
 * en un loop infinito y comerse toda la ram de nuestro computador !
 *
 * while( condicion ){
 *  codigo
 * }
 *
 */

let contador = 0;
// mientras contador sea menor a 10 ejecuta en codigo !
while ( contador < 10 ) {
    console.log( contador );
    contador++; // aumento de la variable contador para que llegue a 10, sin esto podriamos arruinar la memoria del pc y crashear la computadora
}