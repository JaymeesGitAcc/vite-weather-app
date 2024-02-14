import React, { useContext } from "react";
import unitsContext from "../context/unitscontext/unitsContext";

function Select({ options = null }) {
    const { units, setUnits } = useContext(unitsContext);
    const handleOnChange = (e) => {
        setUnits({
            ...units,
            [options.name]: e.target.value,
        });
    };

    return (
        <select
            onChange={handleOnChange}
            defaultValue={units[options.name]}
            className="bg-slate-400 outline-none ml-2 text-md md:text-lg"
            aria-label="set-unit"
        >
            {options?.units.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Select;
