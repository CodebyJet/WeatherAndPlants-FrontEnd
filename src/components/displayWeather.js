import { useEffect } from 'react';
import { API } from '../lib/api';
import { useState } from 'react';

export default function DisplayWeather(city) {
  const [displayLocation, setDisplayLocation] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    API.GET(API.ENDPOINTS.currentWeather(city.city), API.Access)
      .then(({ data }) => {
        setDisplayLocation(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsUpdated(false);
  }, [city, isUpdated]);

  return (
    <>
      <div>{displayLocation?.location.name}</div>
      <img
        src={displayLocation?.current.condition.icon}
        alt={displayLocation?.current.condition.text}
      />
      <div>{displayLocation?.current.condition.text}</div>
      <div>Temp: {displayLocation?.current.temp_c}</div>
      <div>Feels like: {displayLocation?.current.feelslike_c}</div>
    </>
  );
}
