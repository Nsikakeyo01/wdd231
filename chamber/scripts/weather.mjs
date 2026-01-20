// scripts/weather.mjs

const weatherIcon = document.getElementById('weather-icon');
const weatherTemp = document.getElementById('current-temp');
const weatherDesc = document.getElementById('weather-desc');

const defaultWeather = {
    temp: "75°F",
    desc: "Sunny",
    icon: "images/weather-icon.png"
};

function showDefaultWeather() {
    weatherTemp.textContent = defaultWeather.temp;
    weatherDesc.textContent = defaultWeather.desc;
    weatherIcon.src = defaultWeather.icon;
    weatherIcon.alt = defaultWeather.desc;
}

async function fetchWeather() {
    const apiKey = "YOUR_API_KEY_HERE"; // Replace with OpenWeatherMap API key
    const cityId = "3580718"; // San Miguel
    const units = "imperial";

    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${units}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response not ok");

        const data = await response.json();

        const temp = Math.round(data.main.temp) + "°F";
        const desc = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        weatherTemp.textContent = temp;
        weatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
        weatherIcon.src = iconUrl;
        weatherIcon.alt = desc;
    } catch (error) {
        console.error("Weather API error:", error);
        showDefaultWeather();
    }
}

window.addEventListener("DOMContentLoaded", () => {
    showDefaultWeather();
    fetchWeather();
});
