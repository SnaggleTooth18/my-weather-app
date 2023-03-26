import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';
import { Container } from '@mui/system';
import EasterBreaker from './components/easter-eggs/easter-breaker';
import EasterEggs from './components/easter-eggs/easter-eggs';
import GeoLocationButton from './components/geolocation/geolocation';




function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lng] = searchData.value.split(" ");

    const weatherFetch = fetch(
      `${WEATHER_API_URL}?lat=${lat}&lng=${lng}&params=airTemperature,cloudCover,humidity,precipitation,pressure,windSpeed,windDirection&start=${Math.floor(Date.now() / 1000)}&source=noaa`,
      {
        headers: {
          'Authorization': `${WEATHER_API_KEY}`
        },
      }
    );

    Promise.all([weatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        const days = [
          weatherResponse.hours[24],
          weatherResponse.hours[48],
          weatherResponse.hours[72],
          weatherResponse.hours[96],
          weatherResponse.hours[120],
          weatherResponse.hours[144],
        ];

        setCurrentWeather({
          city: searchData.label,
          ...weatherResponse.hours[0],
        });
        setForecast({
          days,
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Search onSearchChange={handleOnSearchChange} />
      <GeoLocationButton handleOnSearchChange={handleOnSearchChange} />
      <EasterBreaker />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      {currentWeather && <EasterEggs data={currentWeather} />}
    </Container>
  );
}

export default App;