import React from 'react';

function convertCityNames(pokemonLocation) {
  const replaceLocName = pokemonLocation.replaceAll('-', ' ');
  const toReturnName = replaceLocName[0].toUpperCase() + replaceLocName.substring(1);
  return toReturnName;
}

export default function Locations(props) {
  const locations = props.locations;
  const setSelectedCityURL = props.setSelectedCityURL;


  return (
    <div className='location'>
      {locations.map((location, index) => (
        <div key={index} onClick={() => {
          setSelectedCityURL(location.url);
        }}>
          <h2 className='locations'>{convertCityNames(location.name)}</h2>
        </div>
      ))}
    </div>
  );
}
