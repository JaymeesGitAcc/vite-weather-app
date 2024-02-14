import React, { useState } from "react";
import weatherInfoContext from "./weatherInfoContext";
import useWeatherInfo from "../../hooks/useWeatherInfo";

function WeatherDataProvider({ children }) {
    const [city, setCity] = useState("delhi");
    const { weatherData, loading, error } = useWeatherInfo(city);

    return (
        <weatherInfoContext.Provider
            value={{ weatherData, loading, error, setCity }}
        >
            {children}
        </weatherInfoContext.Provider>
    );
}

export default WeatherDataProvider;
