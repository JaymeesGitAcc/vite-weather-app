export function extractDateInfo(dateString) {
    const dateObject = new Date(dateString);
    const monthName = dateObject.toLocaleString("en-US", { month: "short" });
    const weekday = dateObject.toLocaleDateString("en-US", {
        weekday: "short",
    });
    const time = dateObject.toLocaleTimeString("en-US", {
        hours: "numeric",
        minutes: "numeric",
        hours12: true,
    });
    const date = dateObject.getDate();
    return { monthName, weekday, time, date };
}
