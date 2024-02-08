import React, { useContext } from "react";
import { setTemp } from "../utils/conversionMethods";
import weatherInfoContext from "../context/weatherInfoContext";
import WeatherIcon from "./WeatherIcon";

function WeatherContents({ units }) {
    const { weatherData } = useContext(weatherInfoContext);

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
            <div className="h-[135px] w-[135px] md:h-[170px] md:w-[170px] flex justify-center items-center rounded-full mx-auto shadow-[inset_20px_70px_50px_rgba(0,0,0,0.2)]">
                <h1 className="text-[2.5rem] text-slate-200">
                    {temperature}
                    <span className="text-xl text-slate-400">
                        {" "}
                        {temperature && units.tempUnit}
                    </span>
                </h1>
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
