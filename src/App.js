import React, {useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WeatherContainer from './components/WeatherContainer';


function App() {
  const [location , setLocation] = useState({coordinates:{lon:'',lat:''}});
  const [lat , setLat] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos)=>{
        setLocation((coordinates)=>{
          coordinates.lat = pos.coords.latitude;
          coordinates.lon = pos.coords.longitude;
        })
    });
  }, [])
  console.log(location);
  return (
    <div className="App">
      <Navbar/>
      <WeatherContainer Location ={location}/>
    </div>
  );
}

export default App;
