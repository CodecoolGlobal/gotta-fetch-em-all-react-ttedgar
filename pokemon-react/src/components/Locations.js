import React from 'react';

function convertCityNames(pokemonLocation) {
  const replaceLocName = pokemonLocation.replace('-', ' ');
  const toReturnName = replaceLocName[0].toUpperCase() + replaceLocName.substring(1);
  return toReturnName;
}

export default function Locations(props) {
  const locations = props.locations;
  const setSelectedCityURL = props.setSelectedCityURL;
  const selectedCityURL = props.selectedCityURL;


  return (
    <div>
      {locations.map((location, index) => (
        <div key={index} onClick={() => {
          setSelectedCityURL(location.url);
          console.log(selectedCityURL);
        }}>
          <h2>{convertCityNames(location.name)}</h2>
        </div>
      ))}
    </div>
  );
}
