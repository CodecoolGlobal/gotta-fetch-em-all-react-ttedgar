import React, { useState } from 'react';


function Battle({ chosenPokemon, enemy, setChosenPokemon, setSelectedCityURL, setSelectedAreaURL}) {
  const [enemyHP, setEnemyHP] = useState(100);
  const [friendlyHP, setFriendlyHP] = useState(100);

  function dealRandomDamage(number) {
    return Math.floor(number + (Math.random() * 5));
  }

  return (
    <div>
      {enemyHP > 0 ?
        (<><div className="yourPokemon">
          <img src={chosenPokemon.sprites.other.showdown['back_default']} alt=''></img>
          <div className="moves">
            <h3>Moves:</h3>
            {chosenPokemon.moves.slice(0, 4).map((move) => (
              <li key={move.move.name} onClick={() => {
                setEnemyHP(enemyHP - dealRandomDamage(20));
                setFriendlyHP(friendlyHP - dealRandomDamage(15));
              }}> {move.move.name} </li>
            ))}
            <h4>HP: {friendlyHP}</h4>
          </div>
        </div>
        <div className='enemy'>
          <h3>{enemy.name[0].toUpperCase() + enemy.name.substring(1)}</h3>
          <img src={enemy.sprites.other.showdown['front_default']} alt=''></img>
          <h4>HP: {enemyHP}</h4>
        </div></>) : (
          <>
            <img src={chosenPokemon.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"]} alt=''></img>
            <h2>You defeated {enemy.name[0].toUpperCase() + enemy.name.substring(1)}</h2>
            <button onClick={() => {
              setChosenPokemon(null);
              setSelectedAreaURL(null);
              setSelectedCityURL(null);
            }}>Go to next town</button>
          </>
        )
      }
    </div>
  );
}

export default Battle;
