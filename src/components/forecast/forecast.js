// import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { hover } from "@testing-library/user-event/dist/hover";


const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(forecastDays);
    console.log(data.days);

    return (
        <div>
            <Typography>Forecast</Typography>
            <Accordion>
                <AccordionSummary 
                expandIcon={<ExpandMoreIcon />} 
                aria-controls="panella-content" 
                id="panella-header"
                sx={{bgColor: "#330e62", hover: {bgColor: "#472671"}}}
                >
                    <Typography fontWeight="bold">{forecastDays[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="center" color="#330e62" variant="h4">
                        {Math.round(data.days[0].airTemperature.noaa)}°C
                    </Typography>
                    <Typography align="center">
                        Cloud Cover: {Math.round(data.days[0].cloudCover.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Humidity: {Math.round(data.days[0].humidity.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Precipitation: {data.days[0].precipitation.noaa} mm/h
                    </Typography>
                    <Typography align="center">
                        Pressure: {Math.round(data.days[0].pressure.noaa)} hPa
                    </Typography>
                    <Typography align="center">
                        Wind Speed: {Math.round(data.days[0].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography align="center">
                        Wind Direction: {Math.round(data.days[0].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panella-content" id="panella-header">
                    <Typography fontWeight="bold">{forecastDays[1]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="center">
                        {Math.round(data.days[1].airTemperature.noaa)}°C
                    </Typography>
                    <Typography align="center">
                        Cloud Cover: {Math.round(data.days[1].cloudCover.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Humidity: {Math.round(data.days[1].humidity.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Precipitation: {Math.round(data.days[1].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography align="center">
                        Pressure: {Math.round(data.days[1].pressure.noaa)} hPa
                    </Typography>
                    <Typography align="center">
                        Wind Speed: {Math.round(data.days[1].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography align="center">
                        Wind Direction: {Math.round(data.days[1].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panella-content" id="panella-header">
                    <Typography fontWeight="bold">{forecastDays[2]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="center">
                        {Math.round(data.days[2].airTemperature.noaa)}°C
                    </Typography>
                    <Typography align="center">
                        Cloud Cover: {Math.round(data.days[2].cloudCover.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Humidity: {Math.round(data.days[2].humidity.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Precipitation: {Math.round(data.days[2].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography align="center">
                        Pressure: {Math.round(data.days[2].pressure.noaa)} hPa
                    </Typography>
                    <Typography align="center">
                        Wind Speed: {Math.round(data.days[2].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography align="center">
                        Wind Direction: {Math.round(data.days[2].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panella-content" id="panella-header">
                    <Typography fontWeight="bold">{forecastDays[3]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="center">
                        {Math.round(data.days[3].airTemperature.noaa)}°C
                    </Typography>
                    <Typography align="center">
                        Cloud Cover: {Math.round(data.days[3].cloudCover.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Humidity: {Math.round(data.days[3].humidity.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Precipitation: {Math.round(data.days[3].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography align="center">
                        Pressure: {Math.round(data.days[3].pressure.noaa)} hPa
                    </Typography>
                    <Typography align="center">
                        Wind Speed: {Math.round(data.days[3].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography align="center">
                        Wind Direction: {Math.round(data.days[3].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panella-content" id="panella-header">
                    <Typography fontWeight="bold">{forecastDays[4]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="center">
                        {Math.round(data.days[4].airTemperature.noaa)}°C
                    </Typography>
                    <Typography align="center">
                        Cloud Cover: {Math.round(data.days[4].cloudCover.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Humidity: {Math.round(data.days[4].humidity.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Precipitation: {Math.round(data.days[4].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography align="center">
                        Pressure: {Math.round(data.days[4].pressure.noaa)} hPa
                    </Typography>
                    <Typography align="center">
                        Wind Speed: {Math.round(data.days[4].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography align="center">
                        Wind Direction: {Math.round(data.days[4].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panella-content" id="panella-header">
                    <Typography fontWeight="bold">{forecastDays[5]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="center">
                        {Math.round(data.days[5].airTemperature.noaa)}°C
                    </Typography>
                    <Typography align="center">
                        Cloud Cover: {Math.round(data.days[5].cloudCover.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Humidity: {Math.round(data.days[5].humidity.noaa)}%
                    </Typography>
                    <Typography align="center">
                        Precipitation: {Math.round(data.days[5].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography align="center">
                        Pressure: {Math.round(data.days[5].pressure.noaa)} hPa
                    </Typography>
                    <Typography align="center">
                        Wind Speed: {Math.round(data.days[5].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography align="center">
                        Wind Direction: {Math.round(data.days[5].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>



        </div>
    );
};



export default Forecast;