import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
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
        <Card variant="outlined" sx={{ justifycontent: 'flex-end' }}>
            <CardContent>
                <Typography gutterBottom variant="h4" align="center"  color="#4527A0">
                    {dayCurrent}
                </Typography>
                <Typography gutterBottom variant="h6" align="center"  fontWeight="Bold">
                    {date}
                </Typography>
                <Typography gutterBottom variant="h5" align="center" fontWeight="Bold">
                    {data.city}
                </Typography>
                <Typography gutterBottom variant="h2" align="center"  color="#5E35B1">
                    {Math.round(data.airTemperature.noaa)}°C
                </Typography>

                <Typography gutterBottom variant="h6" align="center"  fontWeight="Bold">
                    Details
                </Typography>

                <Typography paragraph variant="body 1" align="center" color="#90A4AE" fontWeight="Bold">
                    Cloud Cover: {Math.round(data.cloudCover.noaa)}%
                </Typography>

                <Typography paragraph variant="body 1" align="center" color="#78909C" fontWeight="Bold">
                    Humidity: {Math.round(data.humidity.noaa)}%
                </Typography>

                <Typography paragraph variant="body 1" align="center" color="#546E7A" fontWeight="Bold">
                    Precipitation: {data.precipitation.noaa} mm/h
                </Typography>

                <Typography paragraph variant="body 1" align="center" color="#455A64" fontWeight="Bold">
                    Pressure: {Math.round(data.pressure.noaa)} hPa
                </Typography>

                <Typography paragraph variant="body 1" align="center" color="#37474F" fontWeight="Bold">
                    Wind Speed: {data.windSpeed.noaa} m/s
                </Typography>

                <Typography paragraph variant="body 1" align="center" color="#263238" fontWeight="Bold">
                    Wind Direction: {Math.round(data.windDirection.noaa)}°
                </Typography>

            </CardContent>
        </Card>
    );
};

export default CurrentWeather;