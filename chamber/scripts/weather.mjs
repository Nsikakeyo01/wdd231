const apiKey = "6780a0dcb9c34e6648dba652803c7c37";
const lat = 16.75;   // San Miguel latitude
const lon = -93.12;  // San Miguel longitude
const units = "imperial";

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather fetch failed");

        const data = await response.json();

        currentTemp.textContent = Math.round(data.main.temp) + "°F";
        weatherDesc.textContent = data.weather[0].description;

        const icon = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;

    } catch (error) {
        console.error(error);
        weatherDesc.textContent = "Weather unavailable";
    }
}

getWeather();
