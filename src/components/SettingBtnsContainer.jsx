import React from "react";

function SettingBtnsContainer({
    className = "",
    data = null,
    units = null,
    setUnits,
}) {
    return (
        <div className={`${className}`}>
            {data?.unitsArray.map((unit) => (
                <button
                    key={unit}
                    className={`${
                        units[data.keyTitle] === unit
                            ? "bg-indigo-800 text-white"
                            : "bg-slate-400"
                    } py-2 px-4 text-[12px] md:text-base rounded-lg shadow-sm shadow-slate-800 transition-colors duration-300`}
                    onClick={() => {
                        setUnits({
                            ...units,
                            [data.keyTitle]: unit,
                        });
                    }}
                >
                    {unit}
                </button>
            ))}
        </div>
    );
}

export default SettingBtnsContainer;
