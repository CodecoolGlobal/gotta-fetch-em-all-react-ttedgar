import React, { useEffect, useState } from 'react';

function Starters() {
  const [starter, setStarter] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const ids = ['pikachu', 'charmander', 'ludicolo'];
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
          <div key={pokemon.name} className='Starter'>
            <h4>{pokemon.name}</h4>
            <img src={pokemon.sprites.other.showdown['front_default']} alt=''></img>
          </div>
        ))}
      </div>
    </>
  );
}

export default Starters;
