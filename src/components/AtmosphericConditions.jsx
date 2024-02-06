import React from "react";
import Loader from "./Loader";
import InfoList from "./InfoList";

const AtmosphericConditions = ({
    error,
    loading,
    weatherData,
    setSettingsOpen,
    units = null,
}) => {
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
            {!error &&
                (loading ? (
                    <Loader />
                ) : (
                    <InfoList data={weatherData} units={units} />
                ))}
        </div>
    );
};

export default AtmosphericConditions;
