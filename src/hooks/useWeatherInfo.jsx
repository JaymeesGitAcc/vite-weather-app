import { useState, useEffect } from "react";
import conf from "../conf/conf.js";

function useWeatherInfo(cityname) {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    // const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(false);

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${conf.apikey}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // setCoordinates(data["coord"]);
                setWeatherData({
                    coordinates: data["coord"],
                    cityName: data["name"],
                    country: data["sys"].country,
                    temperature: data["main"].temp,
                    wind: data["wind"].speed,
                    humidity: data["main"].humidity,
                    visibility: data["visibility"],
                    pressure: data["main"].pressure,
                    feelsLike: data["main"].feels_like,
                    weatherType: data["weather"][0].main,
                    description: data["weather"][0].description,
                    iconId: data["weather"][0].icon,
                });
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [cityname]);

    return { weatherData, error, loading };
}

export default useWeatherInfo;
