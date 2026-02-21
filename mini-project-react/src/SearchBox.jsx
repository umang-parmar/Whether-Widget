import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from "react";

export default function SearchBox(){
    let [city,setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6f6210a72718e9262df6c0b07f638684";

    let getWhetherInfo = async () => {
      let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponce=await responce.json();
      let result={
        temp: jsonResponce.main.temp,
        tempMin: jsonResponce.main.temp_min,
        tempMax: jsonResponce.main.temp_max,
        humidity:jsonResponce.main.humidity,
        feelsLike:jsonResponce.main.feels_like,
        whether:jsonResponce.weather[0].description,
      };
      console.log(result);
      
    }; 

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWhetherInfo();

        
    }
    return(
        <div className="SearchBox">
            <h3>Search For The Whether</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city"
                    label="City Name"
                    variant="outlined" 
                    required value={city}
                    onChange={handleChange}
                  />
                <br></br><br></br>
                <Button variant="contained"type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}