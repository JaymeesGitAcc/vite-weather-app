import React from "react";

const AtmosphericConditions = ({ data }) => {
    return (
        <div className="md:w-[50%] p-4 md:p-10">
            <div className="font-bold text-slate-700 text-xl">
                <h1>Atmospheric Conditions</h1>
            </div>

            <ul>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="flex even:bg-pink-100 odd:bg-green-100 my-4 text-lg rounded-xl font-semibold p-4"
                    >
                        <h2>{item.title}</h2>
                        <p className="ml-auto">
                            {item.value}{" "}
                            <span className="text-slate-500">{item.unit}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AtmosphericConditions;
