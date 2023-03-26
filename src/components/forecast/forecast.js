import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./forecast.css";


const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <div>
            <Typography variant="h6" gutterBottom>Forecast</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    sx={{ bgcolor: "#330e62", ":hover": { bgcolor: "#4a148f" } }}
                >
                    <Typography className="day" variant="h6">{forecastDays[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#e5e5e5" }}>
                    <Typography className="temp" variant="h3">
                        {Math.round(data.days[0].airTemperature.noaa)}°C
                    </Typography>
                    <Typography className="details"  fontWeight="bold">
                        Cloud Cover: {Math.round(data.days[0].cloudCover.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Humidity: {Math.round(data.days[0].humidity.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Precipitation: {data.days[0].precipitation.noaa} mm/h
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Pressure: {Math.round(data.days[0].pressure.noaa)} hPa
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Speed: {Math.round(data.days[0].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Direction: {Math.round(data.days[0].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    sx={{ bgcolor: "#330e62", ":hover": { bgcolor: "#4a148f" } }}
                >
                    <Typography className="day" variant="h6" >{forecastDays[1]}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#e5e5e5" }}>
                    <Typography className="temp" variant="h3">
                        {Math.round(data.days[1].airTemperature.noaa)}°C
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Cloud Cover: {Math.round(data.days[1].cloudCover.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Humidity: {Math.round(data.days[1].humidity.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Precipitation: {Math.round(data.days[1].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Pressure: {Math.round(data.days[1].pressure.noaa)} hPa
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Speed: {Math.round(data.days[1].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Direction: {Math.round(data.days[1].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    sx={{ bgcolor: "#330e62", ":hover": { bgcolor: "#4a148f" } }}
                >
                    <Typography className="day" variant="h6" >{forecastDays[2]}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#e5e5e5" }}>
                    <Typography className="temp" variant="h3">
                        {Math.round(data.days[2].airTemperature.noaa)}°C
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Cloud Cover: {Math.round(data.days[2].cloudCover.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Humidity: {Math.round(data.days[2].humidity.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Precipitation: {Math.round(data.days[2].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Pressure: {Math.round(data.days[2].pressure.noaa)} hPa
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Speed: {Math.round(data.days[2].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Direction: {Math.round(data.days[2].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    sx={{ bgcolor: "#330e62", ":hover": { bgcolor: "#4a148f" } }}
                >
                    <Typography className="day" variant="h6" >{forecastDays[3]}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#e5e5e5" }}>
                    <Typography className="temp" variant="h3">
                        {Math.round(data.days[3].airTemperature.noaa)}°C
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Cloud Cover: {Math.round(data.days[3].cloudCover.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Humidity: {Math.round(data.days[3].humidity.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Precipitation: {Math.round(data.days[3].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Pressure: {Math.round(data.days[3].pressure.noaa)} hPa
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Speed: {Math.round(data.days[3].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Direction: {Math.round(data.days[3].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    sx={{ bgcolor: "#330e62", ":hover": { bgcolor: "#4a148f" } }}
                >
                    <Typography className="day" variant="h6" >{forecastDays[4]}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#e5e5e5" }}>
                    <Typography className="temp" variant="h3">
                        {Math.round(data.days[4].airTemperature.noaa)}°C
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Cloud Cover: {Math.round(data.days[4].cloudCover.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Humidity: {Math.round(data.days[4].humidity.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Precipitation: {Math.round(data.days[4].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Pressure: {Math.round(data.days[4].pressure.noaa)} hPa
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Speed: {Math.round(data.days[4].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Direction: {Math.round(data.days[4].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    sx={{ bgcolor: "#330e62", ":hover": { bgcolor: "#4a148f" } }}
                >
                    <Typography className="day" variant="h6" >{forecastDays[5]}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#e5e5e5" }}>
                    <Typography className="temp" variant="h3">
                        {Math.round(data.days[5].airTemperature.noaa)}°C
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Cloud Cover: {Math.round(data.days[5].cloudCover.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Humidity: {Math.round(data.days[5].humidity.noaa)}%
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Precipitation: {Math.round(data.days[5].precipitation.noaa)} mm/h
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Pressure: {Math.round(data.days[5].pressure.noaa)} hPa
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Speed: {Math.round(data.days[5].windSpeed.noaa)} m/s
                    </Typography>
                    <Typography className="details" fontWeight="bold">
                        Wind Direction: {Math.round(data.days[5].windDirection.noaa)}°
                    </Typography>
                </AccordionDetails>
            </Accordion>



        </div>
    );
};



export default Forecast;