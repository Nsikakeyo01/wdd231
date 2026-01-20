// weather.mjs
const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
const lat = "13.48";   // San Miguel latitude
const lon = "-88.18";  // San Miguel longitude
const units = "metric"; // Celsius
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`;

const currentTempEl = document.getElementById("current-temp");
const currentDescEl = document.getElementById("current-desc");
const weatherIconEl = document.getElementById("weather-icon");
const forecastEl = document.getElementById("forecast");

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayWeather(data) {
    // Current weather
    currentTempEl.textContent = Math.round(data.current.temp);
    currentDescEl.textContent = data.current.weather[0].description;
    const iconCode = data.current.weather[0].icon;
    weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIconEl.alt = data.current.weather[0].description;

    // 3-Day Forecast
    forecastEl.innerHTML = ""; // Clear previous forecast
    data.daily.slice(1, 4).forEach(day => {
        const li = document.createElement("li");
        li.textContent = `${new Date(day.dt * 1000).toLocaleDateString()}: ${Math.round(day.temp.day)}°C, ${day.weather[0].description}`;
        forecastEl.appendChild(li);
    });
}

apiFetch();
