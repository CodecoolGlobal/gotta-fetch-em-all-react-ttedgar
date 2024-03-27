import './App.css';
import { useEffect, useState } from 'react';
import Locations from './components/Locations';
import Areas from './components/Areas';
import Encounter from './components/Encounter';
import Starters from './components/Starters';
import Battle from './components/Battle';


function App() {
  const [pokemonLocation, setPokemonLocation] = useState(null);
  const [selectedCityURL, setSelectedCityURL] = useState(null);
  const [selectedAreaURL, setSelectedAreaURL] = useState(null);
  const [chosenPokemon, setChosenPokemon] = useState(null);
  const [enemy, setEnemy] = useState(null);

  useEffect(() => {
    async function fetchData(pokemonLocation) {
      const response = await fetch(pokemonLocation);
      const data = await response.json();
      setPokemonLocation(data.results);
      return data.results;
    }
    fetchData('https://pokeapi.co/api/v2/location');
  }, []);

  return (
    <div className="App">
      { chosenPokemon ?
        (<div>
          <Battle chosenPokemon={chosenPokemon} enemy={enemy} setChosenPokemon={setChosenPokemon} setSelectedCityURL={setSelectedCityURL} setSelectedAreaURL={setSelectedAreaURL}/>
        </div>) :
        selectedAreaURL ?
          (<div><Encounter selectedAreaURL={selectedAreaURL} setEnemy={setEnemy}/>
            <Starters setChosenPokemon={setChosenPokemon}/></div>) :
          selectedCityURL ?
            (<><h1>Town areas</h1>
              <Areas selectedCityURL={selectedCityURL} setSelectedAreaURL={setSelectedAreaURL} selectedAreaURL={selectedAreaURL}/>
              <button onClick={() => {
                setSelectedAreaURL(null);
                setSelectedCityURL(null);
              }} >I'm lost lol. Go back</button> </>)  :
            (pokemonLocation &&
          (<><h1>Pokemon Towns</h1>
            <Locations locations={pokemonLocation} setSelectedCityURL={setSelectedCityURL}/></>))}
    </div>
  );
}

export default App;
