import { heroes } from "./data/heroes";
console.log( heroes );



// FIND
const getHeroById = ( id ) => {
    const heroe = heroes.find( heroe => heroe.id == id );
    return heroe;
}


const myHero = getHeroById(2);
console.log( myHero );



// FILTER
const getHeroesByOwner = ( owner ) => {
    return heroes.filter( heroe => heroe.owner === owner );
}

console.log( getHeroesByOwner('DC') );