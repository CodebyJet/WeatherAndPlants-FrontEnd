import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayPlantList from './components/displayAllPlants';
import Register from './components/Register';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
    return (
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/plants' element={<DisplayPlantList />} />
        </Routes>
      </Router>
    );
}

export default App;
