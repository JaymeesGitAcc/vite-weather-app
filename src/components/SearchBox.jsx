import React, { useContext, useState } from "react";
import weatherInfoContext from "../context/weather-data-context/weatherInfoContext";

export const SearchBox = ({ className = "" }) => {
    const [input, setInput] = useState("");

    const { setCity } = useContext(weatherInfoContext);

    function handleOnSubmit(e) {
        e.preventDefault();
        if (input) {
            setCity(input.toLocaleLowerCase());
            setInput("");
        }
    }

    return (
        <div className={`w-full md:max-w-[330px] mx-auto mt-4 ${className}`}>
            <form
                className="flex w-full rounded-full overflow-hidden"
                onSubmit={handleOnSubmit}
            >
                <input
                    type="text"
                    placeholder="enter city..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={`w-full text-lg p-2 outline-none`}
                />
                <button className="p-2 text-white bg-indigo-500 px-4">
                    <div className="flex flex-col justify-center items-center -rotate-45">
                        <div className="h-[20px] w-[20px] border-2 border-slate-200 rounded-full"></div>
                        <div className="h-[10px] w-[2px] bg-slate-200"></div>
                    </div>
                </button>
            </form>
        </div>
    );
};
