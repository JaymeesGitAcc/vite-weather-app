import AtmosphericConditions from "./components/AtmosphericConditions";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherDataProvider from "./context/weather-data-context/WeatherDataProvider";
import UnitsProvider from "./context/unitscontext/UnitsProvider";
import Forecast from "./components/Forecast";

function App() {
    return (
        <WeatherDataProvider>
            <UnitsProvider>
                <main className="bg-slate-300 min-h-screen">
                    <section
                        className={`bg-slate-300 md:grid md:place-items-center md:py-5`}
                    >
                        <div
                            className={`max-w-[750px] md:shadow-sm md:shadow-black md:rounded-[35px] md:w-full md:flex md:bg-[#f1f1f1]`}
                        >
                            <WeatherDisplay />
                            <AtmosphericConditions />
                        </div>
                    </section>
                    <Forecast />
                </main>
            </UnitsProvider>
        </WeatherDataProvider>
    );
}

export default App;
