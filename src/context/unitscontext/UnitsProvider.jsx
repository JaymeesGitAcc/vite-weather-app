import React, { useState } from "react";
import unitsContext from "./unitsContext";

function UnitsProvider({ children }) {
    const [units, setUnits] = useState({
        tempUnit: "°C",
        windUnit: "m/s",
        humidityUnit: "RH(%)",
        visibilityUnit: "m",
        pressureUnit: "hPa",
        feelsLikeUnit: "°C",
    });
    return (
        <unitsContext.Provider value={{ units, setUnits }}>
            {children}
        </unitsContext.Provider>
    );
}

export default UnitsProvider;
