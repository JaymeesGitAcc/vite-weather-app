import React from "react";
import { extractDateInfo } from "../utils/dateFormatMethods";

function ForecastCard({ detail }) {
    const { time, date, monthName } = extractDateInfo(detail.dt_txt);
    return (
        <div
            key={detail.dt}
            className="text-center min-w-[130px] text-sm text-white rounded-lg shadow shadow-black even:bg-[#001b4c] odd:bg-[#73264c] py-2"
        >
            <p>
                {date}, {monthName}
            </p>
            <p>{time}</p>
            <img
                src={`https://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`}
                alt="weather-icon"
                width={55}
                height={55}
                className="mx-auto"
            />
            <p>{detail.main.temp.toFixed(1)} °C</p>
            <p>{detail.weather[0].description}</p>
        </div>
    );
}

export default ForecastCard;
