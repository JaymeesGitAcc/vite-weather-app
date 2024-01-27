import { useEffect, useState } from "react";

const apiKey = "629cae91753c6dfa85aded52928beddb";

export function useWeatherData(city) {
    const [temperature, setTemperature] = useState("");
    const [description, setDescription] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [humidity, setHumidity] = useState("");
    const [feelsLike, setFeelsLike] = useState("");

    useEffect(() => {
        let ignore = false;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        if (city) {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    if (!ignore) setTemperature(data.main?.temp);
                })
                .catch(() => setError(true));
            console.log(city + " connecting...");
        }

        return () => {
            ignore = true;
            console.log(`disconnected from ${city}`);
        };
    }, [city]);

    return {
        temperature,
        // description,
        // temperature,
        // windSpeed,
        // humidity,
        // feelsLike,
    };
}
