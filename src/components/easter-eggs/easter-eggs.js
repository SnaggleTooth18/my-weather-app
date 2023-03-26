import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import wildlife from "./wildlife.jpg";
import winefriends from "./winefriends.jpeg";
import climb from "./climb.gif";


const EasterEggs = ({ data }) => {

    if (data?.city?.includes("Stellenbosch") === true) {
        return (
            <Card>
                <CardContent>
                    <div align="center">
                        <img src={winefriends}
                            alt="Friends having wine"
                        />
                        <Typography>
                            Try our wine farms. We have a lot of them.
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (data?.city?.includes("Botswana") === true) {
        return (
            <Card>
                <CardContent>
                    <div align="center">
                        <img src={wildlife}
                            alt="Wildlife image"
                        />
                        <Typography>
                            We have a lot of wildlife. Come and see.
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (data?.city?.includes("Cape Town") === true) {
        return (
            <Card>
                <CardContent>
                    <div align="center">
                        <img src={climb}
                            alt="Spiderman climbing"
                        />
                        <Typography>
                            Check out City Rock or Bloc 11 for some bouldering and sport cilmbing 🧗🏽‍♀️🧗🏽‍♂️.
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        );
    }
};

export default EasterEggs;