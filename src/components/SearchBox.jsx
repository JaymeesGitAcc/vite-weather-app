import React, { useState } from "react";

export const SearchBox = ({ setCity, className = "" }) => {
    const [input, setInput] = useState("");

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
