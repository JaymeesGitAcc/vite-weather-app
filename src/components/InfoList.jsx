import React from "react";
import {
    setPressure,
    setTemp,
    setVisibility,
    setWind,
} from "../utils/conversionMethods";

function InfoList({ data, units }) {
    let windVal = setWind(units?.windUnit, data?.wind);
    let feelslikeVal = setTemp(units?.tempUnit, data?.feelsLike);
    let visibilityVal = setVisibility(units?.visibilityUnit, data?.visibility);
    let pressureVal = setPressure(units?.pressureUnit, data?.pressure);

    return (
        <ul className="my-8">
            <li className="flex even:bg-[#efe] odd:bg-[#8ff] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-gray-800">
                <h2>Wind</h2>
                <p className="ml-auto">
                    {windVal}{" "}
                    <span className="text-slate-500">{units.tempUnit}</span>
                </p>
            </li>
            <li className="flex even:bg-[#ffb] odd:bg-[#8ff] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-gray-800">
                <h2>Humidity</h2>
                <p className="ml-auto">
                    {data.humidity}{" "}
                    <span className="text-slate-500">{"%"}</span>
                </p>
            </li>
            <li className="flex even:bg-[#ffb] odd:bg-[#8ff] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-gray-800">
                <h2>Visibility</h2>
                <p className="ml-auto">
                    {visibilityVal}{" "}
                    <span className="text-slate-500">
                        {units.visibilityUnit}
                    </span>
                </p>
            </li>
            <li className="flex even:bg-[#ffb] odd:bg-[#8ff] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-gray-800">
                <h2>Pressure</h2>
                <p className="ml-auto">
                    {pressureVal}{" "}
                    <span className="text-slate-500">{units.pressureUnit}</span>
                </p>
            </li>
            <li className="flex even:bg-[#ffb] odd:bg-[#8ff] my-4 text-lg rounded-xl font-semibold p-4 shadow-sm shadow-gray-800">
                <h2>Feels Like</h2>
                <p className="ml-auto">
                    {feelslikeVal}{" "}
                    <span className="text-slate-500">{units.tempUnit}</span>
                </p>
            </li>
        </ul>
    );
}

export default InfoList;
