/* switch (key) {
    case valor1:

    // Codigo a ejecutar si valor1 es true

        break;

    case valor2:

    // Codigo a ejecutar si valor2 es true

        break;
    default:
        break;
}

si el codigo llega al break este automaticamente se sale del switch
si ninguno de los valores que estan siendo analizados en los case retorna true, automaticamente se ejecuta lo que este en default.
*/

let expr = "Uvas";

switch (expr) { // el switch ejecuta una especie de comparacion ===
    case "Peras":
        console.log('====================================');
        console.log("Las peras cuestan $40 el kilo");
        console.log('====================================');
        break;

    case "Naranjas":
        console.log('====================================');
        console.log("Las naranjas cuestan $20 el kilo");
        console.log('====================================');
        break;

    case "Manzanas":
        console.log('====================================');
        console.log("Las naranjas cuestan $43 el kilo");
        console.log('====================================');
        break;

    case "Platanos":
        console.log('====================================');
        console.log("El platano cuesta $30 el kilo");
        console.log('====================================');
        break;

    case "Mangos":
    case "Papayas":
        console.log('====================================');
        console.log("Los mangos y las papayas cuestan $35 el kilo");
        console.log('====================================');
        break;

    default:
        console.log('====================================');
        console.log(`No hay existencia de ${expr} en el mercado`);
        console.log('====================================');
        break;
}

console.log('====================================');
console.log("¿Deseas algo más?");
console.log('====================================');