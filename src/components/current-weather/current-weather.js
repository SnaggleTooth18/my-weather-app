//import { Card, CardContent, Typography } from "@material-ui/core";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                </div>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.airTemperature.noaa)}</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Cloud Cover</span>
                        <span className="parameter-value">{Math.round(data.cloudCover.noaa)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{Math.round(data.humidity.noaa)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Precipitation</span>
                        <span className="parameter-value">{data.precipitation.noaa} mm/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind Speed</span>
                        <span className="parameter-value">{data.windSpeed.noaa} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind Direction</span>
                        <span className="parameter-value">{Math.round(data.windDirection.noaa)}°</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;