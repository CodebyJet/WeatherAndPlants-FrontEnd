import DisplayWeather from './components/displayWeather';
import DisplayPlantList from './components/displayAllPlants';



window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  const city = 'london';

  if (city) {
    return (
      <>
        <DisplayWeather city={city} />
        <DisplayPlantList />
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
