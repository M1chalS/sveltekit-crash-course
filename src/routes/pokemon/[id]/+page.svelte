<script>
    export let data;

    const pokemon = data.pokemon;
    const type = pokemon.types[0].type.name;
</script>

<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
    <p>Type: <strong>{type}</strong> | Height: <strong>{pokemon.height}</strong>
        | Weight: <strong>{pokemon.weight}</strong>
    </p>
    <img class="card-image" src={pokemon.sprites['front_default']}
         alt={pokemon.name}
    />
</div>