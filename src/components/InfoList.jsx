import React, { useContext } from "react";
import {
    setPressure,
    setTemp,
    setVisibility,
    setWind,
} from "../utils/conversionMethods";
import weatherInfoContext from "../context/weatherInfoContext";

function InfoList({ units }) {
    const { weatherData: data } = useContext(weatherInfoContext);

    let windVal = setWind(units?.windUnit, data?.wind);
    let feelslikeVal = setTemp(units?.tempUnit, data?.feelsLike);
    let visibilityVal = setVisibility(units?.visibilityUnit, data?.visibility);
    let pressureVal = setPressure(units?.pressureUnit, data?.pressure);

    return (
        <ul className="my-8">
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Wind</h2>
                <p className="ml-auto text-slate-200">
                    {windVal}{" "}
                    <span className="text-slate-400">{units.tempUnit}</span>
                </p>
            </li>
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Humidity</h2>
                <p className="ml-auto text-slate-200">
                    {data.humidity}{" "}
                    <span className="text-slate-400">{"%"}</span>
                </p>
            </li>
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Visibility</h2>
                <p className="ml-auto text-slate-200">
                    {visibilityVal}{" "}
                    <span className="text-slate-400">
                        {units.visibilityUnit}
                    </span>
                </p>
            </li>
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Pressure</h2>
                <p className="ml-auto text-slate-200">
                    {pressureVal}{" "}
                    <span className="text-slate-400">{units.pressureUnit}</span>
                </p>
            </li>
            <li className="flex even:bg-[#001b4c] odd:bg-[#73264c] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-slate-800">
                <h2 className="text-slate-200">Feels Like</h2>
                <p className="ml-auto text-slate-200">
                    {feelslikeVal}{" "}
                    <span className="text-slate-400">{units.tempUnit}</span>
                </p>
            </li>
        </ul>
    );
}

export default InfoList;
