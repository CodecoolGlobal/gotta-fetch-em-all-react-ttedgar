// import React, { useEffect, useState } from 'react';


function Battle({ chosenPokemon }) {

  return (
    <div className="yourPokemon">
      <img src={chosenPokemon.sprites.other.showdown['back_default']} alt=''></img>
      <div className="moves">
        <h3>Moves:</h3>
        {chosenPokemon.moves.slice(0, 4).map((move) => (
          <li key={move.move.name}> {move.move.name} </li>
        ))}
      </div>
    </div>
  );
}

export default Battle;
