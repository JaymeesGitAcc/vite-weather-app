import { useEffect, useState } from "react";
import { useWeatherData } from "../hooks/useWeatherData";

function App() {
    const [input, setInput] = useState("");
    const [city, setCity] = useState("");
    const weatherData = useWeatherData(city);

    function handleOnSubmit(e) {
        e.preventDefault();
        setCity(input);
        setInput("");
    }

    if (weatherData) console.log(weatherData);

    return (
        <>
            <h1 className="text-red-500 text-center text-xl">
                Weather App project Setup
                <div>
                    <h1>Temperatue: {weatherData.temperature}</h1>
                    <form onSubmit={handleOnSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="enter city..."
                        />
                    </form>
                </div>
            </h1>
        </>
    );
}

export default App;
