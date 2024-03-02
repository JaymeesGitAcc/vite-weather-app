import React, { useContext, useEffect, useState } from "react";
import weatherInfoContext from "../context/weather-data-context/weatherInfoContext";
import conf from "../conf/conf";
import FilterButtons from "./FilterButtons";
import { extractDateInfo } from "../utils/dateFormatMethods";
import ForecastRow from "./ForecastRow";

function Forecast() {
    const [forecast, setForecast] = useState(null);
    const [viewDay, setViewDay] = useState("");
    const { weatherData, error } = useContext(weatherInfoContext);

    const forecastDetails = forecast?.filter((detail) => {
        const { weekday } = extractDateInfo(detail["dt_txt"]);
        if (weekday == viewDay) {
            return {
                ...detail,
            };
        }
        return null;
    });

    const filterBtns = forecast?.reduce((values, item) => {
        const { weekday } = extractDateInfo(item["dt_txt"]);
        if (!values.includes(weekday)) {
            values.push(weekday);
        }
        return values;
    }, []);

    useEffect(() => {
        if (weatherData) {
            const { lat, lon } = weatherData["coordinates"];
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${conf.apikey}`;

            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setForecast(data["list"]);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }, [weatherData]);
    return !error ? (
        <div className="p-2 max-w-[750px] mx-auto overflow-auto">
            {forecast && (
                <h1 className="text-2xl text-center font-bold mb-4 text-[#73264c] md:text-3xl">
                    FORECAST
                </h1>
            )}
            {filterBtns && (
                <FilterButtons
                    tabButtons={filterBtns}
                    currentTabButton={viewDay}
                    onTabButtonChange={setViewDay}
                />
            )}

            <div className="">
                {forecastDetails?.map((detail) => (
                    <ForecastRow key={detail.dt} detail={detail} />
                ))}
            </div>
        </div>
    ) : null;
}

export default Forecast;
