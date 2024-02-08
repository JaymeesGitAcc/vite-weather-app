import React, { useContext } from "react";
import Loader from "./Loader";
import InfoList from "./InfoList";
import weatherInfoContext from "../context/weatherInfoContext";

const AtmosphericConditions = ({
    // error,
    // loading,
    // weatherData,
    setSettingsOpen,
    units = null,
}) => {
    const { error, loading } = useContext(weatherInfoContext);

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
            {!error && (loading ? <Loader /> : <InfoList units={units} />)}
        </div>
    );
};

export default AtmosphericConditions;
