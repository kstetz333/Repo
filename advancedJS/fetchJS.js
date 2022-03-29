document.querySelector("#fetchAPi").addEventListener("click", getPokeApi)
async function getPokeApi(event){
    // get a request from the api
   // const nidoking = await fetch('https://pokeapi.co/api/v2/pokemon/nidoking')
    //const nidokingReply = await nidoking.json();
    //document.querySelector("#pokeName").innerText = nidokingReply.name;
    //document.querySelector("#pokeHP").innerText = nidokingReply.name + " has an HP of " + nidokingReply.stats[0].base_stat;
   //const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
   //const reply = await pokemon.json();
   //alert("You found " + reply.name);
// old query
    let pokeName = document.querySelector('#anyPokemon').value;
    const pokemonName = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName);
    const pokemonNameReply = await pokemonName.json();
    document.querySelector('#pokeName').innerText = pokemonNameReply.name;
    document.querySelector("#pokeHP").innerText = pokemonNameReply.name + " has an HP of " + pokemonNameReply.stats[0].base_stat

}