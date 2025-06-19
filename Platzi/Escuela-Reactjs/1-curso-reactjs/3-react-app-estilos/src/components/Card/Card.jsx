// import './card.css';
// import styles from "./Card.module.css"; // importar Estilos CSS
import styles from "./Card.module.scss"; // importar Estilos CSS

let myPokemon;

async function fetPokemon() {
    const URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data);
    myPokemon = getPokemonInfo(data);
}

function getPokemonInfo({name, abilities, sprites}){

    return {
        name,
        abilities: abilities.map(ability => ability.ability.name),
        image: sprites.other["official-artwork"].front_default
    }
}

fetPokemon();


const Card = () => {
    return(
        <>
            <div className={styles.card}> {/* agregar los estilos del archivo card.module.css esto utiliza la clase card que esta en el archivo */}
                <h1>{myPokemon.name}</h1>
                <figure>
                    <img src={myPokemon.image} alt={`Image of ${myPokemon.name}`} />
                </figure>

                <div className={styles.desc}>
                    <h2>Abilities</h2>
                    <ul>
                        {myPokemon.abilities.map( abilitie => (
                            <li>{abilitie}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card