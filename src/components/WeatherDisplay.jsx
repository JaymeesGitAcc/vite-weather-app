import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import { SearchBox } from "./SearchBox";
import WeatherContents from "./WeatherContents";

const WeatherDisplay = ({
    error,
    loading,
    weatherData,
    setCity,
    className = "",
    units = null,
}) => {
    return (
        <div
            className={`${className} relative min-h-[400px] text-center rounded-b-[35px] overflow-hidden md:w-[50%] md:rounded-[35px] bg-gradient-to-b from-[#5d4df0] to-[#1b0c98]`}
        >
            <SearchBox className="p-4" setCity={setCity} />
            {!error ? (
                loading ? (
                    <Loader />
                ) : (
                    <WeatherContents weatherData={weatherData} units={units} />
                )
            ) : (
                <ErrorMessage message="Not available" />
            )}
        </div>
    );
};

export default WeatherDisplay;
