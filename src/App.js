import DisplayWeather from "./components/displayWeather";

function App() {

const city = 'london';

if (city){
  return (
    <>
    <DisplayWeather city={city}  />
    </>
  );
}else{
  return <div>Loading...</div>
}
}

export default App;
