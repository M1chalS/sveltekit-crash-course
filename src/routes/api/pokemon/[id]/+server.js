import {json} from "@sveltejs/kit";

export async function GET({params}) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const res = await fetch(url);
    const pokemon = await res.json();

    return json(pokemon);
}