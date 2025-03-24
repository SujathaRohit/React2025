import {useState, useEffect} from "react";
import axios from 'axios';
import './WeatherApp.css';

function WeatherApp(){
    const[weather, setWeather] = useState(null);
    const[loading, setLoading]= useState(true);
    const[error, setError]= useState(null);

    useEffect(()=>{
        async function fetchWeather(){
           try{
            const city="london";
            const response= await axios.get(`https://api.weatherapi.com/v1/current.json?key=1e1a20c2ffab44779aa30603252403&q=${city}`);
            setWeather(response.data);
           } catch(error){
            setError("Failed to fetch weather data");
           }finally{
            setLoading(false);
           }
        }
        fetchWeather();
    }, []);

    if(loading) return <p>Fetching weather data please  wait...</p>
    if(error) return <p>Error!</p>
    return(
        <div className= "weather-container">
            <h2>Weather in {weather.location.name}</h2>
            <p>temperature: {weather.current.temp_c}</p>
            <p>condition: {weather.current.condition.text}</p>
        </div>
    )
}
export default WeatherApp;