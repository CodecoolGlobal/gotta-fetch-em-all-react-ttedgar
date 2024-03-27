import './App.css';
import { useEffect, useState } from 'react';
import Locations from './components/Locations';
import Areas from './components/Areas';
import Encounter from './components/Encounter';


function App() {
  const [pokemonLocation, setPokemonLocation] = useState(null);
  const [selectedCityURL, setSelectedCityURL] = useState(null);
  const [selectedAreaURL, setSelectedAreaURL] = useState(null);

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
      <h1>Pokemon Towns</h1>
      {selectedAreaURL ?
        (<Encounter selectedAreaURL={selectedAreaURL}/>) :
        selectedCityURL ?
          (<>
            <Areas selectedCityURL={selectedCityURL} setSelectedAreaURL={setSelectedAreaURL} selectedAreaURL={selectedAreaURL}/> 
            <button onClick={() => {
              setSelectedAreaURL(null);
              setSelectedCityURL(null);
            }} >I'm lost lol. Go back</button> </>)  :
          (pokemonLocation && <Locations locations={pokemonLocation} selectedCityURL={selectedCityURL} setSelectedCityURL={setSelectedCityURL}/>)}
    </div>
  );
}

export default App;
