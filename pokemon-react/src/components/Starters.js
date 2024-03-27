import React, { useEffect, useState } from 'react';

function Starters({ setChosenPokemon }) {
  const [starter, setStarter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ids = ['meowth', 'weezing', 'arbok'];
      const pokemonPromises = ids.map(async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        return await response.json();
      });
      const pokemons = await Promise.all(pokemonPromises);
      setStarter(pokemons);
    }
    fetchData();
  }, []);

  return (
    <>
      <h3>Choose a pokemon for battle:</h3>
      <div className='Starters'>
        {starter.map((pokemon) => (
          <div key={pokemon.name} className='Starter' onClick={() => setChosenPokemon(pokemon)}>
            <h4>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h4>
            <img src={pokemon.sprites.other.showdown['front_default']} alt='' className='yourPokemonImage'></img>
          </div>
        ))}
      </div>
    </>
  );
}

export default Starters;
