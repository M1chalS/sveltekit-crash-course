<script>
    import {fade} from "svelte/transition";
    export let pokemon;
</script>

<a href="/pokemon/{pokemon.id}" transition:fade
   class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center">
    <img class="h-32 w-32" src={pokemon.image} alt={pokemon.name}>
    <h2>{pokemon.id}. {pokemon.name}</h2>
</a>
