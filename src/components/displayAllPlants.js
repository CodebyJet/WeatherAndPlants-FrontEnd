import React, { useEffect, useState } from 'react';
import { API } from '../lib/api';
import PlantCard from './PlantCard';

export default function DisplayPlantList() {
  const [displayAllPlants, setDisplayAllPlants] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allPlants())
      .then(({ data }) => {
        setDisplayAllPlants(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsUpdated(false);
  }, [isUpdated]);

  console.log(displayAllPlants);

  if (!displayAllPlants) {
    return <p>Loading... before</p>;
  }

  return (
    <div>
      {Array.isArray(displayAllPlants?.results) && displayAllPlants.results.map((plant) => (
        <PlantCard key={plant.id} Id={plant.id} />
      ))}
    </div>
  );
}

//        <div key={plant.id}>
// <p>{plant.common_name}</p>
// <img src={plant.default_image.medium_url} alt={plant.common_name} />
// </div> 