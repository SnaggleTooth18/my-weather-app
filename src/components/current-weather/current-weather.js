import React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import "./current-weather.css";

const CUR_MONTH = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

const CURRENT_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const CurrentWeather = ({ data }) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const dayCurrent = CURRENT_DAYS[current.getDay()];


    console.log(date);
    console.log(dayCurrent);


    return (
        <Box sx={{ flexGrow: 1  }} >
            <Card variant="outlined" sx={{ justifycontent: 'center' }}>
                <CardContent color="#394655">

                    <Typography variant="h4" align="center" color="#330e62"  gutterBottom>
                        {dayCurrent}
                    </Typography>
                    <Typography variant="h6" align="center" color="" fontWeight="Bold" gutterBottom>
                        {date}
                    </Typography>
                    <Typography variant="h5" align="center" fontWeight="Bold" gutterBottom>
                        {data.city}
                    </Typography>
                    <Typography variant="h2" align="center" color="#330e62" gutterBottom>
                        {Math.round(data.airTemperature.noaa)}°C
                    </Typography>

                    <Typography variant="h5" align="center" fontWeight="Bold" color="#303030" gutterBottom>
                        Details
                    </Typography>
                    <Box sx={{ width: '100%' }} display="flex" justifyContent="center">
                        <Stack direction="row" spacing={16}>
                            <Box>
                            <Typography paragraph variant="body 1" color="#303030" fontWeight="Bold">
                                Cloud Cover: {Math.round(data.cloudCover.noaa)}%
                            </Typography>
                            <Typography paragraph variant="body 1" color="#303030" fontWeight="Bold">
                                Humidity: {Math.round(data.humidity.noaa)}%
                            </Typography>
                            <Typography paragraph variant="body 1"  color="#303030" fontWeight="Bold">
                                Precipitation: {data.precipitation.noaa} mm/h
                            </Typography>
                            </Box>
                            <Box>
                            <Typography paragraph variant="body 1" color="#303030" fontWeight="Bold">
                                Pressure: {Math.round(data.pressure.noaa)} hPa
                            </Typography>
                            <Typography paragraph variant="body 1" color="#303030" fontWeight="Bold">
                                Wind Speed: {data.windSpeed.noaa} m/s
                            </Typography>
                            <Typography paragraph variant="body 1" color="#303030" fontWeight="Bold">
                                Wind Direction: {Math.round(data.windDirection.noaa)}°
                            </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </CardContent>
            </Card >
        </Box>
    );
};

export default CurrentWeather;