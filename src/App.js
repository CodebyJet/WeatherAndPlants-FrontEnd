import React from 'react';
import { API } from './components/lib/api';
import { useState } from 'react';



function App() {

  const [displayLocation, setDisplayLocation] = useState({})


  const London = 'london'
  const Display = API.GET(API.ENDPOINTS.singleWeather, London)
  console.log(Display)

  return (<div>App</div>);
}

export default App;
