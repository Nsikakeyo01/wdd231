const apiKey = "beff9c8a958221e992923378bf3f5f39";

// San Miguel coordinates (adjusted)
const lat = 13.4833;
const lon = -88.1833;

const tempSpan = document.querySelector("#current-temp");
const descPara = document.querySelector("#weather-desc");
const iconImg = document.querySelector("#weather-icon");

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        if (!response.ok) throw new Error("Weather fetch failed");
        const data = await response.json();

        tempSpan.textContent = Math.round(data.main.temp);
        descPara.textContent = data.weather[0].description;

        const icon = data.weather[0].icon;
        iconImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        iconImg.alt = data.weather[0].description;
    } catch (error) {
        tempSpan.textContent = "--";
        descPara.textContent = "Weather unavailable";
        console.error(error);
    }
}

getWeather();
