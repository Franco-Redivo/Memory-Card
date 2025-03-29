const url = "https://pokeapi.co/api/v2/pokemon/";
import pokemons from './pokemonList.js'

const fetchPokemon = async (pokemonName) => {
    try{
        const response = await fetch(`${url}${pokemonName}`);
        const data = await response.json();
        return {
            name: pokemonName,
            sprite: data.sprites.front_default,
        };
    }
    catch(err){
        console.error(err);
    }
};

const getInitialPokemonsList = async () => {
    const promises = pokemons.map((pokemon) => fetchPokemon(pokemon));
    const fetchedPokemons = await Promise.all(promises);
    return fetchedPokemons.filter(pokemon => pokemon !== null); // Remove any null values from failed requests
};

export default getInitialPokemonsList; 