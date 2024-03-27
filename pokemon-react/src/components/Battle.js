import React, { useState } from 'react';
import rocketGif from './rocket.gif';


function Battle({ chosenPokemon, enemy, setChosenPokemon, setSelectedCityURL, setSelectedAreaURL, setCapturedPokes, capturedPokes}) {
  const [enemyHP, setEnemyHP] = useState(100);
  const [friendlyHP, setFriendlyHP] = useState(100);
  const [captured, setCaptured] = useState(false);
  const [killed, setKilled] = useState(false);

  function dealRandomDamage(number) {
    return Math.floor(number + (Math.random() * 5));
  }

  return (
    <div className='battleMiddle'>
      {enemyHP > 20 ?
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
            <button onClick={() => {
              setSelectedAreaURL(null);
              setSelectedCityURL(null);
              setChosenPokemon(null);
            }}>Run you fools!</button>
            <h2>HP: {friendlyHP}</h2>
          </div>
        </div>
        <div className='enemy'>
          <h3>{enemy.name[0].toUpperCase() + enemy.name.substring(1)}</h3>
          <img src={enemy.sprites.other.showdown['front_default']} alt=''></img>
          <h4>HP: {enemyHP}</h4>
        </div></>) :
        (enemyHP > 0 && enemyHP <= 20) ?
          (<><h2>{enemy.name[0].toUpperCase() + enemy.name.substring(1)}'s HP is under 20! Capture, or Defeat!</h2>
            <button onClick={() => {
              setCaptured(true);
              setEnemyHP(-1);
              setCapturedPokes(capturedPokes.concat([enemy]));
            }}>Capture</button>
            <button onClick={() => {
              setKilled(true);
              setEnemyHP(-1);
            }}>Defeat</button></>) :
          killed ? (
            <>
              <img src={rocketGif} alt=''></img>
              <h2>Yeay!!! You are Great!</h2>
              {/* <img src={chosenPokemon.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"]} alt=''></img> */}
              <h2>You defeated {enemy.name[0].toUpperCase() + enemy.name.substring(1)}</h2>
              <button onClick={() => {
                setChosenPokemon(null);
                setSelectedAreaURL(null);
                setSelectedCityURL(null);
              }}>Go to next town</button></>) :
            captured ? (
              <>
                <img src={rocketGif} alt=''></img>
                <h2>Yeay!!! You are Great!</h2>
                {/* <img src={enemy.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"]} alt=''></img> */}
                <h2>You captured {enemy.name[0].toUpperCase() + enemy.name.substring(1)}</h2>
                <button onClick={() => {
                  setChosenPokemon(null);
                  setSelectedAreaURL(null);
                  setSelectedCityURL(null);
                }}>Go to next town</button></>) : null
      }
    </div>
  );
}

export default Battle;
