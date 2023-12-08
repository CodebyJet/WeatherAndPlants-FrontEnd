import DisplayWeather from './components/displayWeather';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayPlantList from './components/displayAllPlants';
import DisplaySinglePlant from './components/displaySinglePlant';
import Register from './components/Register';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  const city = 'Manchester';
  const searchedPlant = 1
  if (city) {
    return (
      <div>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/plants' element={<DisplayPlantList />} />
        </Routes>
      </Router>
      <div>
        <DisplayWeather city={city}/>
        <DisplayPlantList />
        <DisplaySinglePlant plantId={searchedPlant}/>
      </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
