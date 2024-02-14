import { useState } from "react";
import AtmosphericConditions from "./components/AtmosphericConditions";
import WeatherDisplay from "./components/WeatherDisplay";
import Settings from "./components/Settings";
import WeatherDataProvider from "./context/WeatherDataProvider";

function App() {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [units, setUnits] = useState({
        tempUnit: "°C",
        windUnit: "m/s",
        visibilityUnit: "m",
        pressureUnit: "hPa",
    });

    let blurEffect = settingsOpen ? `blur-sm` : "";

    return (
        <WeatherDataProvider>
            {settingsOpen && (
                <Settings
                    setSettingsOpen={setSettingsOpen}
                    units={units}
                    setUnits={setUnits}
                />
            )}
            <section
                className={`${blurEffect} relative flex flex-col justify-center items-center min-h-screen bg-slate-200`}
            >
                <div
                    className={`w-full max-w-[750px] min-h-[450px] shadow-sm shadow-black md:rounded-[35px] md:flex`}
                >
                    <WeatherDisplay units={units} />
                    <AtmosphericConditions
                        setSettingsOpen={setSettingsOpen}
                        units={units}
                    />
                </div>
            </section>
        </WeatherDataProvider>
    );
}

export default App;
