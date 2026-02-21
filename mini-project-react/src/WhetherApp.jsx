import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo,setWheatherInfo] = useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"
    });

    let updateInfo = (newInfo) => {
    setWheatherInfo(newInfo);
}
   return (
  <div className="app-container">
    <h2 className="app-title">🌤 Weather App by Umang</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
  </div>
);
}