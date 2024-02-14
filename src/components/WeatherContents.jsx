import React, { useContext } from "react";
import { setTemp } from "../utils/conversionMethods";
import weatherInfoContext from "../context/weather-data-context/weatherInfoContext";
import WeatherIcon from "./WeatherIcon";
import unitsContext from "../context/unitscontext/unitsContext";

function WeatherContents() {
    const { weatherData } = useContext(weatherInfoContext);
    const { units, setUnits } = useContext(unitsContext);

    const city = weatherData?.cityName;
    const country = weatherData?.country;
    const temperature = setTemp(units?.tempUnit, weatherData?.temperature);
    const typeOfWeather = weatherData?.weatherType;
    const description = weatherData?.description;
    const icon = weatherData.iconId;

    return (
        <>
            <div className="p-4">
                <h1 className="text-slate-300 text-[1.85rem]">
                    {city}
                    {city && ","} {country}
                </h1>
            </div>
            <div className="h-[170px] w-[170px] flex justify-center items-center rounded-full mx-auto shadow-[inset_20px_70px_50px_rgba(0,0,0,0.2)]">
                <h1 className="text-[32px] text-slate-200">{temperature}</h1>

                <div className="ml-4">
                    <button
                        className={`${
                            units["tempUnit"] === "°C"
                                ? "text-white"
                                : "text-slate-400"
                        } text-lg font-bold`}
                        onClick={() =>
                            setUnits({ ...units, ["tempUnit"]: "°C" })
                        }
                    >
                        °C
                    </button>
                    <span className="text-slate-400 mx-2">{"|"}</span>
                    <button
                        className={`${
                            units["tempUnit"] === "°F"
                                ? "text-white"
                                : "text-slate-400"
                        } text-lg font-bold`}
                        onClick={() =>
                            setUnits({ ...units, ["tempUnit"]: "°F" })
                        }
                    >
                        °F
                    </button>
                </div>
            </div>
            <div className="text-center py-10 px-5">
                <div className="flex items-center justify-center">
                    {icon && <WeatherIcon icon={icon} />}
                    <h1 className="text-[1.5rem] font-bold text-slate-200">
                        {typeOfWeather}
                    </h1>
                </div>
                <p className="font-semibold md:text-lg text-slate-300 capitalize italic">
                    {description}
                </p>
            </div>
        </>
    );
}

export default WeatherContents;
