import AtmosphericConditions from "./components/AtmosphericConditions";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherDataProvider from "./context/weather-data-context/WeatherDataProvider";
import UnitsProvider from "./context/unitscontext/UnitsProvider";

function App() {
    return (
        <WeatherDataProvider>
            <UnitsProvider>
                <section
                    className={`relative flex flex-col justify-center items-center min-h-screen bg-slate-200`}
                >
                    <div
                        className={`w-full max-w-[750px] min-h-[450px] shadow-sm shadow-black md:rounded-[35px] md:flex`}
                    >
                        <WeatherDisplay />
                        <AtmosphericConditions />
                    </div>
                </section>
            </UnitsProvider>
        </WeatherDataProvider>
    );
}

export default App;
