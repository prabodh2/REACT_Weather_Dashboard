import React, { useState } from 'react';
import './WeatherApp.css';

let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apikey = "9c6b82660ec03e4ee0c3229414f6162d";

let WeatherApp = () => {
    let [city, setCity] = useState('');
    let [weather, setWeather] = useState(null);

    let checkWeather = (city) => {
        fetch(apiurl + city + `&appid=${apikey}`)
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(error => console.error('Error fetching weather data:', error));
    };

    let handleSearchClick = () => {
        checkWeather(city);
    };

    return (
        <div className="card">
            <div className="search">
                <input
                    type="text"
                    placeholder="Enter city name"
                    spellCheck="false"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={handleSearchClick}>
                    <img src="/Users/badimiprabodh/Weather App/src/assets/search.png" alt="search btn" />
                </button>
            </div>
            {weather && (
                <div className="weather">
                    <img src="./clear.png" className="weather-icon" alt="weather icon" />
                    <h1 className="temp">{Math.round(weather.main.temp)}°c</h1>
                    <h2 className="city">{weather.name}</h2>
                    <div className="details">
                        <div className="col">
                            <img src="./humidity icon" alt="humidity icon" />
                            <div>
                                <p className="humidity">{weather.main.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="./wind.png" alt="wind icon" />
                            <div>
                                <p className="wind">{weather.wind.speed} Km/h</p>
                                <p>Wind speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;

