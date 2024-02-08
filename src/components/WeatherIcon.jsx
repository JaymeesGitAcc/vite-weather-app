import React from "react";

function WeatherIcon({ icon }) {
    return (
        <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="image-icon"
            width={60}
            height={60}
        />
    );
}

export default WeatherIcon;
