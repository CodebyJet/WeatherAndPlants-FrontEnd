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

  if (!displayAllPlants) {
    return <p>Loading... before</p>;
  }

  console.log(displayAllPlants)
  return (
    <div>
      {displayAllPlants?.data.map((plant) => (
        <PlantCard key={plant.id} Id={plant.id} />
      ))}
    </div>
  );
  
}
