import React, { useEffect, useState } from "react";


function convertCityNames(area) {
  const replaceLocName = area.replaceAll('-', ' ');
  const toReturnName = replaceLocName[0].toUpperCase() + replaceLocName.substring(1);
  return toReturnName;
}


function Areas( {selectedCityURL, setSelectedAreaURL} ) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    async function fetchData(area) {
      const response = await fetch(area);
      const data = await response.json();
      setAreas(data.areas);
      return data.areas;
    }
    fetchData(selectedCityURL);
  }, [selectedCityURL]);


  return (
    <div>
      {areas.length ?
        areas.map((area) => (
          <div key={area.name} onClick={() => {
            setSelectedAreaURL(area.url);
          }}>
            <h2 className='locations'> {convertCityNames(area.name)} </h2>
          </div>
        )) :
        <div>
          <h2> This location doesn't seem to have any pokémon </h2>
        </div>
      }
    </div>
  );
}

export default Areas;
