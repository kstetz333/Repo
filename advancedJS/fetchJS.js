document.querySelector("#fetchAPi").addEventListener("click", getPokeApi)
async function getPokeApi(event){
    // get a request from the api
    //const pokemon = new Request('https://pokeapi.co/api/v2/pokemon/ditto');
   const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
   const reply = await pokemon.json();
   alert("You found " + reply.name);

}