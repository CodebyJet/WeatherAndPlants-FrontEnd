import DisplayWeather from './components/displayWeather';
import DisplayPlantList from './components/displayAllPlants';
import Register from './components/Register';
import {Router, Route} from '@mui/material';



window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  const city = 'london';

  if (city) {
    return (
      <Router>
        <Route path='/register' element={<Register />} />
        <Route path='/plants' element={<DisplayPlantList />} />
      </Router>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
