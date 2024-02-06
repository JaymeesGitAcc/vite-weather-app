import React from "react";
import SettingBtnsContainer from "./SettingBtnsContainer";

function Settings({ setSettingsOpen, units, setUnits }) {
    const unitsData = [
        {
            title: "Temperature",
            keyTitle: "tempUnit",
            unitsArray: ["°C", "°F"],
            onClick: (callback) => {
                callback();
            },
        },
        {
            title: "Wind",
            keyTitle: "windUnit",
            unitsArray: ["m/s", "km/hr", "mph"],
            onClick: (callback) => {
                callback();
            },
        },
        {
            title: "Visibility",
            keyTitle: "visibilityUnit",
            unitsArray: ["m", "km", "miles"],
            onClick: (callback) => {
                callback();
            },
        },
        {
            title: "Pressure",
            keyTitle: "pressureUnit",
            unitsArray: ["hPa", "Pa"],
            onClick: (callback) => {
                callback();
            },
        },
    ];

    return (
        <div className="h-screen font-bold fixed z-10 w-full flex justify-center items-center flex-wrap before:content-[''] before:bg-black before:opacity-85 before:-z-10 before:inset-0 before:absolute z-10">
            <div className="relative min-w-[350px] md:min-w-[450px] bg-slate-300 shadow-lg shadow-black rounded-xl p-4 custom-slidedown">
                <button
                    onClick={() => setSettingsOpen(false)}
                    className="absolute top-2 right-4"
                >
                    &#10006;
                </button>
                <div className="mt-6">
                    {unitsData.map((data) => (
                        <div
                            className="w-full flex items-center my-2"
                            key={data.keyTitle}
                        >
                            <h2 className="text-[13px] uppercase md:text-base">
                                {data.title}
                            </h2>
                            <SettingBtnsContainer
                                data={data}
                                className="ml-auto flex gap-2 p-2"
                                units={units}
                                setUnits={setUnits}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Settings;
