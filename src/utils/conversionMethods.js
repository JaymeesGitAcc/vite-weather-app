export function setTemp(unit, value) {
    switch (unit) {
        case "°F":
            return ((9 / 5) * value + 32).toFixed(1);
        default:
            return value;
    }
}

export function setWind(unit, value) {
    switch (unit) {
        case "km/hr":
            return (value * 3.6).toFixed(1);
        case "mph":
            return (value * 2.23694).toFixed(1);
        default:
            return value;
    }
}

export function setVisibility(unit, value) {
    switch (unit) {
        case "km":
            return (value / 1000).toFixed(1);
        case "miles":
            return (value / 1609.34).toFixed(1);
        default:
            return value;
    }
}

export function setPressure(unit, value) {
    switch (unit) {
        case "Pa":
            return value * 100;
        default:
            return value;
    }
}
