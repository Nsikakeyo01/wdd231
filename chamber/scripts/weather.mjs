const apiKey = "beff9c8a958221e992923378bf3f5f39";

// ✅ USE COORDINATES (MORE RELIABLE THAN CITY NAME)
const lat = 29.8833;   // San Miguel de Allende latitude
const lon = -100.5167; // longitude

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather API error");
        }

        const data = await response.json();

        // DOM elements
        const temp = document.querySelector("#current-temp");
        const desc = document.querySelector("#weather-desc");
        const icon = document.querySelector("#weather-icon");

        // Set values
        temp.textContent = Math.round(data.main.temp);
        desc.textContent = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        icon.alt = data.weather[0].description;

    } catch (error) {
        console.error("Weather fetch failed:", error);
    }
}

// 🔥 RUN IMMEDIATELY
getWeather();
