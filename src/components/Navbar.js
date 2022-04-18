import React from 'react'
import locationPin from '../assets/location_on_white_24dp.svg';
import Home from '../assets/home_white_24dp.svg';
import weatherLogo from '../assets/weather-app.png'

export default function Navbar() {
  return (
  <>
    <div className="h-12 bg-[rgb(0,0,0)] flex justify-between">
      <ul className='flex'>
        <li className='mx-4 p-2'><img className="w-7" src={weatherLogo} alt="" /></li>
        <li className='mx-4 p-2'><img className="w-7" src={Home} alt="" /></li>
        <li className='mx-2 p-2'>C</li>
      </ul>
      <div className='p-2 flex justify-evenly'>
        <h1 className="text-white p-1 mx-1 ">LOCATION</h1>
        <img src={locationPin} alt="" />
      </div>
    </div>
  </>
  )
}
