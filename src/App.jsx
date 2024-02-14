import AtmosphericConditions from "./components/AtmosphericConditions";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherDataProvider from "./context/weather-data-context/WeatherDataProvider";
import UnitsProvider from "./context/unitscontext/UnitsProvider";

function App() {
    return (
        <WeatherDataProvider>
            <UnitsProvider>
                <section
                    className={`bg-slate-300 md:min-h-screen md:grid md:place-items-center`}
                >
                    <div
                        className={`max-w-[750px] shadow-sm shadow-black md:rounded-[35px] md:w-full md:flex`}
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
