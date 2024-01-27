import React from "react";
import { SearchBox } from "./SearchBox";

const WeatherDisplay = ({ className = "" }) => {
    const linearGradient = `bg-gradient-to-b from-[#5d4df0] to-[#1b0c98]`;

    return (
        <div
            className={`${className} text-center rounded-b-[35px] overflow-hidden md:w-[50%] md:rounded-[35px] ${linearGradient}`}
        >
            <SearchBox className="p-4" />
            <div className="p-4">
                <h1 className="text-slate-300 text-[1.85rem]">Delhi</h1>
            </div>
            <div className="h-[170px] w-[170px] flex justify-center items-center rounded-full mx-auto shadow-[inset_20px_70px_50px_rgba(0,0,0,0.2)]">
                <h1 className="text-[3rem] md:text-[4rem] text-slate-200">
                    14
                    <span className="text-xl text-slate-400"> °C</span>
                </h1>
            </div>
            <div className="text-center py-10 px-5">
                <h1 className="text-[1.5rem] font-bold text-slate-200 mb-4">
                    Lorem, ipsum.
                </h1>
                <p className="font-semibold md:text-lg text-slate-300">
                    Lorem, ipsum dolor.
                </p>
            </div>
        </div>
    );
};

export default WeatherDisplay;
