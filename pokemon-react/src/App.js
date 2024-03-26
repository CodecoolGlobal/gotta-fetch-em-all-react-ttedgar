import './App.css';
import { useEffect, useState } from 'react';
import Locations from './components/Locations';


function App() {
  const [pokemonLocation, setPokemonLocation] = useState(null);
  
  useEffect(() => {
    async function fetchData(pokemonLocation) {
      const response = await fetch(pokemonLocation)
      const data = await response.json();
      setPokemonLocation(data.results)
      // console.log(data.results);
      return data.results;
    }
    fetchData('https://pokeapi.co/api/v2/location');
  }, [])

  function convertCityNames(pokemonLocation) {
    const replaceLocName = pokemonLocation.replace('-', ' ');
    const toReturnName = replaceLocName[0].toUpperCase() + replaceLocName.substring(1);
    return toReturnName;
  }
  
  return (
    <div className="App">
      <h1>Pokemon Towns</h1>
      {pokemonLocation && pokemonLocation.map((location, index) => (
        <div key={index}>
          <Locations location={convertCityNames(location.name)} />
        </div>
      ))}
    </div>
  );
}

export default App;
