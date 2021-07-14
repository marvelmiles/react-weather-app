import React, {useState} from 'react';
import { fetch } from './Api/fetch';
import './App.css';

const App = ()=>{
    const [query,setQuery] = useState('');
    const [weather,setWeather] = useState({});
    
    const search = async e=> {
         if (e.key === 'Enter') {
            const data = await fetch(query);
            setWeather(data);
            setQuery('');
         }
    }
    return (
        <>
        <div className="main-container">
            <h1 className="title">The df</h1>
            <input 
            type="text"
            className="search"
            placeholder="Search city"value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
            id="search"
            data-testid="search"
            />
            {weather.name && (
                <div id="report" data-testid="report" className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
         </>
    )
}

export default App;
