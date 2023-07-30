import React, { useEffect, useState } from 'react';
import { API } from './lib/api';

export default function DisplayPlantList() {
  const [display1AllPlants, setDisplayAllPlants] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allPlants())
      .then(({ data }) => {
        setDisplayAllPlants(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsUpdated(false);
  }, [isUpdated]);

  function displayAsList(display1AllPlants) {
    let listOfPlants = [];
    for (let i = 0; i < display1AllPlants.data.length; i++) {
      listOfPlants.push(display1AllPlants.data[i].common_name);
    }
    return listOfPlants;
  }

  return (
    <>
      <div>
        {display1AllPlants && displayAsList(display1AllPlants).join(', ')}
      </div>
    </>
  );
}
