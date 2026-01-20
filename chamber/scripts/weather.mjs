// scripts/weather.mjs

const apiKey = "beff9c8a958221e992923378bf3f5f39";
const lat = 13.48;   // San Miguel (example)
const lon = -88.18;
const units = "imperial";

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather fetch failed");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Weather Error:", error);
        weatherDesc.textContent = "Weather unavailable";
    }
}

function displayWeather(data) {
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;

    currentTemp.textContent = temp;
    weatherDesc.textContent = desc;

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = desc;
}

getWeather();
