import React from "react";
import { extractDateInfo } from "../utils/dateFormatMethods";

function ForecastRow({ detail }) {
    const { time, date, monthName } = extractDateInfo(detail.dt_txt);
    return (
        <div
            key={detail.dt}
            className="flex items-center justify-between flex-wrap gap-4 text-center min-w-[130px] text-sm text-white px-4 my-2  even:bg-[#001b4c] odd:bg-[#73264c]"
        >
            <div className="flex items-center gap-2">
                <p>
                    {date}, {monthName}
                </p>
                <p>{time}</p>
            </div>

            <div className="flex items-center gap-2">
                <p>{detail.main.temp.toFixed(1)} °C</p>
                <p>{detail.weather[0].description}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`}
                    alt="weather-icon"
                    width={55}
                    height={55}
                />
            </div>
        </div>
    );
}

export default ForecastRow;
