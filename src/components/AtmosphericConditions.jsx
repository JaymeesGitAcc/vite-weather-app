import React from "react";
import Loader from "./Loader";

const AtmosphericConditions = ({ error, loading, weatherData }) => {
    const data = [
        {
            title: "Wind",
            value: weatherData?.wind,
            unit: "m/s",
        },
        {
            title: "Humidity",
            value: weatherData?.humidity,
            unit: "%",
        },
        {
            title: "Visibility",
            value: weatherData?.visibility,
            unit: "m",
        },
        {
            title: "Pressure",
            value: weatherData?.pressure,
            unit: "hPa",
        },
        {
            title: "Feels Like",
            value: weatherData?.feelsLike,
            unit: "°C",
        },
    ];

    return (
        <div className="min-h-[300px] md:w-[50%] p-4 md:p-10 relative">
            {!error &&
                (loading ? (
                    <Loader />
                ) : (
                    <ul>
                        {data.map((item, index) => (
                            <li
                                key={index}
                                className="flex even:bg-pink-100 odd:bg-green-100 my-4 text-lg rounded-xl font-semibold p-4"
                            >
                                <h2>{item.title}</h2>
                                <p className="ml-auto">
                                    {item.value}{" "}
                                    <span className="text-slate-500">
                                        {item.unit}
                                    </span>
                                </p>
                            </li>
                        ))}
                    </ul>
                ))}
        </div>
    );
};

export default AtmosphericConditions;
