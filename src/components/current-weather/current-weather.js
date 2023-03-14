import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Belgrade</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img alt="Weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind Speed</span>
                        <span className="parameter-value">5 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind Direction</span>
                        <span className="parameter-value">30°</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Precipitation</span>
                        <span className="parameter-value">10%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;