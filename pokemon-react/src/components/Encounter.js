import React, { useEffect, useState } from "react";

function Encounter({ selectedAreaURL }) {
  const [encounter, setEncounter] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData(pokemons) {
      const response = await fetch(pokemons);
      const data = await response.json();
      const encounters = data["pokemon_encounters"];
      const randomPokemon = getRandomPokemon(encounters);
      const pokemonResponse = await fetch(randomPokemon.pokemon.url);
      const pokemonData = await pokemonResponse.json();
      console.log(pokemonData);
      setPokemon(pokemonData);
      console.log(pokemon);
      return data["pokemon_encounters"];
    }
    fetchData(selectedAreaURL);
  }, [selectedAreaURL]);

  function getRandomPokemon(pokemons) {
    const randomIndex = Math.floor(pokemons.length * Math.random());
    setEncounter(pokemons[randomIndex]);
    return pokemons[randomIndex];
  }

  return (
    <div>
      {(pokemon && encounter) ?
        (<>
          <h1>POKEMON!</h1>
          <img src={pokemon.sprites.other.showdown['front_default']}/>
          <h2>Le wild {pokemon.name} appears!</h2>
        </>) :
        <h2>Loading...</h2>
      }
    </div>
  );
}

export default Encounter;
