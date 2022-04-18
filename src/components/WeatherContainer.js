import React, {useEffect, useLayoutEffect, useState} from 'react'
import WeatherItem from './WeatherItem'

export default function WeatherContainer(props) {
  console.log(props.latitude);
  console.log(props.longitude);
  const apiKey = '4c008a12c62f090bba0b23cf1f807be0';
  const urls = {
    baseUrl : 'https://pro.openweathermap.org/data/2.5',
    endUrl :  `lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}`,
  }
  // useEffect(() => {
  //   fetch(urls.baseUrl + '/weather?' + urls.endUrl).then((response)=>console.log(response));
  // }, [])
  
  return (
    <div className="h-72 flex justify-center items-center">
    <WeatherItem/>
    </div>
  )
}
