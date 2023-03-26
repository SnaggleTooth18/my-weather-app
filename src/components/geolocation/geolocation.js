import { useState } from 'react';

function GeoLocationButton({ handleOnSearchChange }) {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [error, setError] = useState(null);

    const geolocationAPI = navigator.geolocation;

    const getUserCoordinates = () => {
        if (!geolocationAPI) {
            setError('Geolocation API is not available in your browser!')
        } else {
            geolocationAPI.getCurrentPosition((position) => {
                const { coords } = position;
                setLat(coords.latitude);
                setLong(coords.longitude);
            }, (error) => {
                setError('Something went wrong getting your location!');
            });
        }
    };

    console.log(lat, long);

    return (

        <button
            variant="contained"
            onClick={() => {
                getUserCoordinates();
                handleOnSearchChange(`${lat} ${long}`);
            }}
        >
            Get my location
        </button>
    );




}



export default GeoLocationButton;