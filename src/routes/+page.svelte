<script>
    export let data;

    // import {pokemon} from "../stores/pokestore.js";
    import PokemonCard from "../components/PokemonCard.svelte";

    let searchTerm = "";
    let filteredPokemon = [];

    let pokemon = data.loadedPokemon;

    $: {
        if(searchTerm) {
            filteredPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredPokemon = pokemon;
        }
    }
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input type="text" placeholder="Search Pokemon"
       bind:value={searchTerm} class="w-full rounded-md text-lg p-4 border-2 border-gray-200 mb-4">

<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as poke (poke.id)}
        <PokemonCard pokemon={poke}/>
    {/each}
</div>
