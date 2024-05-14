import React, { useEffect, useState } from 'react'
import Temeperature from './Temeperature'
import axios from 'axios'
import WeatherIcon from './WeatherIcon'

const Weather = () => {
    const [city, setCity] = useState("Delhi")
    const [weatherData, setWeatherData] = useState("")

    let key = "524e408441012f2ce614e3a49e0d0279"

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`


    let getWeather = async () => {
        try {

            const data = await axios.get(url)
            console.log(data.data)
            setWeatherData(data.data)

        } catch (error) {
            console.log(error)
            alert("Please Provide City Name")
        }

    }

    useEffect(() => {
        getWeather();
    }, [])



    return (
        <div className='weather'>
            <h1>Weather Application</h1>

            <div className="card">
                <div className="header">
                    <h2>Enter City Name</h2>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={(e) => { if (e.key == "Enter") { getWeather() } }} />
                    <button onClick={getWeather}>SEARCH</button>
                </div>
                <h3>City Name : {weatherData.name}</h3>

                <h3>Humidity : {weatherData && weatherData.main.humidity} </h3>


                <Temeperature data={weatherData && (weatherData.main.temp - 273).toFixed(1)} />
                <WeatherIcon data={weatherData && weatherData.weather[0].main} />
            </div>

        </div>
    )
}

export default Weather
