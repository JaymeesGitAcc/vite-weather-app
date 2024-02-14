import React, { useContext } from "react";
import {
    setFeelsLike,
    setHumidity,
    setPressure,
    setVisibility,
    setWind,
} from "../utils/conversionMethods";
import weatherInfoContext from "../context/weather-data-context/weatherInfoContext";
import Select from "./Select";
import unitsContext from "../context/unitscontext/unitsContext";

function InfoList() {
    const { weatherData } = useContext(weatherInfoContext);
    const { units } = useContext(unitsContext);

    let windVal = setWind(units?.windUnit, weatherData?.wind);
    let humidityVal = setHumidity(units?.humidityUnit, weatherData?.humidity);
    let feelslikeVal = setFeelsLike(
        units?.feelsLikeUnit,
        weatherData?.feelsLike
    );
    let visibilityVal = setVisibility(
        units?.visibilityUnit,
        weatherData?.visibility
    );
    let pressureVal = setPressure(units?.pressureUnit, weatherData?.pressure);

    const unitOptions = {
        feelslike: {
            name: "feelsLikeUnit",
            units: ["°C", "°F"],
        },
        wind: {
            name: "windUnit",
            units: ["m/s", "km/hr", "mph"],
        },
        humidity: {
            name: "humidityUnit",
            units: ["RH(%)", "g/kg"],
        },
        visibility: {
            name: "visibilityUnit",
            units: ["m", "km", "miles"],
        },
        pressure: {
            name: "pressureUnit",
            units: ["hPa", "Pa"],
        },
    };

    return (
        <ul className="my-8">
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Wind Speed</h2>
                <p className="ml-auto text-slate-200">{windVal}</p>
                <Select options={unitOptions["wind"]} />
            </li>
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Humidity</h2>
                <p className="ml-auto text-slate-200">{humidityVal}</p>
                <Select options={unitOptions["humidity"]} />
            </li>
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Visibility</h2>
                <p className="ml-auto text-slate-200">{visibilityVal} </p>
                <Select options={unitOptions["visibility"]} />
            </li>
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Pressure</h2>
                <p className="ml-auto text-slate-200">{pressureVal} </p>
                <Select options={unitOptions["pressure"]} />
            </li>
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Feels Like</h2>
                <p className="ml-auto text-slate-200">{feelslikeVal} </p>
                <Select options={unitOptions["feelslike"]} />
            </li>
        </ul>
    );
}

export default InfoList;
