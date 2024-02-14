import React, { useContext } from "react";
import Loader from "./Loader";
import InfoList from "./InfoList";
import weatherInfoContext from "../context/weather-data-context/weatherInfoContext";

const AtmosphericConditions = () => {
    const { error, loading } = useContext(weatherInfoContext);

    return (
        <div className="min-h-[300px] md:w-[50%] p-4 md:p-10 relative">
            {!error && (loading ? <Loader /> : <InfoList />)}
        </div>
    );
};

export default AtmosphericConditions;
