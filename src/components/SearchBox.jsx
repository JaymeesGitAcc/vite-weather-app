import React from "react";

export const SearchBox = ({ className = "" }) => {
    return (
        <div className={`w-full max-w-[500px] mx-auto ${className}`}>
            <form className="flex w-full rounded-xl overflow-hidden">
                <input
                    type="text"
                    placeholder="enter city..."
                    className={`w-full text-lg p-2 outline-none`}
                />
                <button className="p-2 text-white bg-indigo-500">search</button>
            </form>
        </div>
    );
};
