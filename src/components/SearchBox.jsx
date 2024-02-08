import React, { useContext, useState } from "react";
import weatherInfoContext from "../context/weatherInfoContext";

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
                <button className="p-2 text-white bg-indigo-500">search</button>
            </form>
        </div>
    );
};
