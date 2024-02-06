import { useEffect, useState } from "react";
import AtmosphericConditions from "./components/AtmosphericConditions";
import WeatherDisplay from "./components/WeatherDisplay";
import Settings from "./components/Settings";
import { apiKey } from "./config";

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("delhi");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const [units, setUnits] = useState({
        tempUnit: "°C",
        windUnit: "m/s",
        visibilityUnit: "m",
        pressureUnit: "hPa",
    });

    useEffect(() => {
        setLoading(true);
        setError(false);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const weatherObject = {
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
                };
                setWeatherData(weatherObject);
                setError(false);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [city]);

    return (
        <>
            {settingsOpen && (
                <Settings
                    setSettingsOpen={setSettingsOpen}
                    error={error}
                    units={units}
                    setUnits={setUnits}
                />
            )}
            <section
                className={`${
                    settingsOpen ? "blur-sm" : ""
                } relative flex flex-col justify-center items-center min-h-screen bg-slate-200`}
            >
                <div
                    className={`w-full max-w-[750px] min-h-[450px] shadow-sm shadow-black md:rounded-[35px] md:flex bg-white`}
                >
                    <WeatherDisplay
                        weatherData={weatherData}
                        setCity={setCity}
                        loading={loading}
                        error={error}
                        units={units}
                    />
                    <AtmosphericConditions
                        weatherData={weatherData}
                        loading={loading}
                        error={error}
                        setSettingsOpen={setSettingsOpen}
                        units={units}
                    />
                </div>
            </section>
        </>
    );
}

export default App;
