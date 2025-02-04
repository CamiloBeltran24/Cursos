const countries = [
    "Colombia",
    "Uruguay",
    "Brasil",
    "Peru",
    "Bolivia",
    "Argentina",
    "Chile",
];

const newCountries = countries.push("Ecuador", "Paraguay", "Guyana", "Trinidad Y Tobago"); // Esto ademas de enviar nuevos datos al arreglo, retorna la nueva longitud del array despues del push.

console.log(countries);
console.log( newCountries );

const removedCoutry = countries.pop();

console.log(removedCoutry);
console.log(countries);

