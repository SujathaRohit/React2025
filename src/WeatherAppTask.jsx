import { useEffect, useState } from "react";
import axios from 'axios';
import './WeatherApp.css';

function WeatherAppTask(){
    const[weather, setWeather]= useState(null);
    const[loading, setLoading]= useState(false);
    const[error, setError]= useState(null);
    const[city, setCity]= useState('london');

    const FetchWeather = async () =>{
        try{
            setLoading(true);
            const response= await axios.get(`https://api.weatherapi.com/v1/current.json?key=1e1a20c2ffab44779aa30603252403&q=${city}`);
            setWeather(response.data);

        }catch(error){
            setError('Error in Fetching weather data');
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        FetchWeather();
    },[])
    return(
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
            <button onClick={FetchWeather}>Get weather</button>

            {loading && <p> Loading...</p>}
            {error && <p> error!</p>}

            { weather && (
                <div className="weather-container">
                <h2>Weather in {weather.location.name}</h2>
                <p> Temperature {weather.current.temp_c}</p>
                <p>Condition: {weather.current.condition.text}</p>
                </div>
            )}
        </div>
    )
}
export default WeatherAppTask;