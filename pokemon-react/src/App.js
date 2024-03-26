import './App.css';
import { useEffect, useState } from 'react';
import Locations from './components/Locations';

function App() {
  const [pokemonLocation, setPokemonLocation] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  
  useEffect(() => {
    async function fetchData(pokemonLocation) {
      const response = await fetch(pokemonLocation);
      const data = await response.json();
      setPokemonLocation(data.results);
      return data.results;
    }
    fetchData('https://pokeapi.co/api/v2/location');
  }, [])
  
  return (
    <div className="App">
      <h1>Pokemon Towns</h1>
      {pokemonLocation && <Locations locations={pokemonLocation}/>}
    </div>
  );
}

export default App;
