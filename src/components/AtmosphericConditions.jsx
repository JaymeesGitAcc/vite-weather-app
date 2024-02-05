import React from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const AtmosphericConditions = ({
    error,
    loading,
    weatherData,
    setSettingsOpen,
    units = null,
}) => {
    const data = [
        {
            label: "Wind",
            value: weatherData?.wind,
            unit: units?.windUnit,
        },
        {
            label: "Humidity",
            value: weatherData?.humidity,
            unit: "%",
        },
        {
            label: "Visibility",
            value: weatherData?.visibility,
            unit: units?.visibilityUnit,
        },
        {
            label: "Pressure",
            value: weatherData?.pressure,
            unit: units?.pressureUnit,
        },
        {
            label: "Feels Like",
            value: weatherData?.feelsLike,
            unit: units?.tempUnit,
        },
    ];

    return (
        <div className="min-h-[300px] md:w-[50%] p-4 md:p-10 relative">
            <button
                className={`${
                    error || loading ? "opacity-0" : ""
                } absolute top-4 right-8 font-lg`}
                onClick={() => setSettingsOpen(true)}
                disabled={error}
            >
                &#9881;
            </button>
            {!error &&
                (loading ? (
                    <Loader />
                ) : (
                    <ul className="my-8">
                        {data.map((item) => (
                            <li
                                key={item.label}
                                className="flex even:bg-pink-100 odd:bg-green-100 my-4 text-lg rounded-xl font-semibold p-4"
                            >
                                <h2>{item.label}</h2>
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
