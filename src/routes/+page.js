import {pokemon} from "../stores/pokestore.js";

export async function load({fetch, params}) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
    const data = await response.json();

    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    });

    return {loadedPokemon};
}