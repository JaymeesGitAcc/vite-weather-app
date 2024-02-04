import { useEffect, useState } from "react";
import AtmosphericConditions from "./components/AtmosphericConditions";
import WeatherDisplay from "./components/WeatherDisplay";
import Settings from "./components/Settings";

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("delhi");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [settingsOpened, setSettingsOpened] = useState(false);
    const [units, setUnits] = useState({
        temperatureUnit: "",
        windUnit: "",
        visibilityUnit: "",
        pressureUnit: "",
    });

    useEffect(() => {
        setLoading(true);
        setError(false);
        const apiKey = `629cae91753c6dfa85aded52928beddb`;
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
            .catch((err) => {
                console.log(
                    "Some error occurred! Maybe the entered city is not valid"
                );
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [city]);

    return (
        <>
            {settingsOpened && (
                <Settings setSettingsOpened={setSettingsOpened} error={error} />
            )}
            <section
                className={`${
                    settingsOpened ? "blur-sm" : ""
                } relative flex flex-col justify-center items-center min-h-screen`}
            >
                <div
                    className={`md:flex w-full max-w-[750px] min-h-[450px] md:shadow-2xl md:rounded-[35px]`}
                >
                    <WeatherDisplay
                        weatherData={weatherData}
                        setCity={setCity}
                        loading={loading}
                        error={error}
                    />
                    <AtmosphericConditions
                        weatherData={weatherData}
                        loading={loading}
                        error={error}
                        setSettingsOpened={setSettingsOpened}
                    />
                </div>
            </section>
        </>
    );
}

export default App;
