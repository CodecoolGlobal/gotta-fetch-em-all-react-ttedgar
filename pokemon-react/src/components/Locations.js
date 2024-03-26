
import React from 'react'

function convertCityNames(pokemonLocation) {
  const replaceLocName = pokemonLocation.replace('-', ' ');
  const toReturnName = replaceLocName[0].toUpperCase() + replaceLocName.substring(1);
  return toReturnName;
}

export default function Locations(props) {
  const locations = props.locations;

  return (
    <div>
      {locations.map((location, index) => (
        <div key={index} onClick={() => console.log(location)}>
          <h2>{convertCityNames(location.name)}</h2>
        </div>
      ))}
    </div>
  )
}
