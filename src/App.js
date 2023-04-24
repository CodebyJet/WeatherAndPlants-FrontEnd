import React, { useEffect } from 'react';
import { API } from './components/lib/api';
import { useState } from 'react';

function App() {

  const [displayLocation, setDisplayLocation] = useState(null)
  const [isUpdated, setIsUpdated] = useState(false);


  const area = 'london'


useEffect(()=> {
  API.GET(API.ENDPOINTS.singleWeather(area), API.Access).then(({data}) => {
    setDisplayLocation(data)
  }).catch((error)=>{
    console.log(error)
  })
    setIsUpdated(false);
  }, [isUpdated]);

  console.log(displayLocation);

  return (<><div>App</div><div>{displayLocation?.current.condition.text}</div></>);
}

export default App;
