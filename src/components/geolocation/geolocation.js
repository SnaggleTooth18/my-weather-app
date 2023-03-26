import { useState } from 'react';
import { Button } from '@mui/material';

function GeoLocationButton({ handleOnSearchChange }) {

    const [error, setError] = useState(null);

    const geolocationAPI = navigator.geolocation;

    const getUserCoordinates = () => {
        if (!geolocationAPI) {
            setError('Geolocation API is not available in your browser!')
        } else {
            geolocationAPI.getCurrentPosition((position) => {
                const { coords } = position;
                handleOnSearchChange({ value: `${coords.latitude} ${coords.longitude}` });
            }, () => {
                setError('Something went wrong getting your location!');
            });
        }
    };

    return (
        <>
            <Button
                variant="contained"
                sx={{ bgcolor: "#330e62", ":hover": { bgcolor: "#4a148f" } }}
                onClick={() => {
                    getUserCoordinates();
                }}
            >
                Get my location
            </Button>
            {error && <p>{error}</p>}
        </>
    );




}



export default GeoLocationButton;