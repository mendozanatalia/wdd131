const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

function displayWindChill() {
    const element = document.getElementById("windchill");
    let windchillValue = "N/A";

    if (temperature <= 10 && windSpeed > 4.8) {
        windchillValue = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
    }

    element.innerHTML = windchillValue;
}

displayWindChill();