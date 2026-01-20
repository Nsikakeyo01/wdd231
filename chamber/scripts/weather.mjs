const apiKey = "beff9c8a958221e992923378bf3f5f39";
const city = "San Miguel";

const weatherIcon = document.getElementById("weather-icon");
const currentTemp = document.getElementById("current-temp");
const weatherDesc = document.getElementById("weather-desc");
const forecastContainer = document.getElementById("forecast-container");

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);
        const data = await response.json();

        // Current Weather
        currentTemp.textContent = Math.round(data.list[0].main.temp);
        weatherDesc.textContent = data.list[0].weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

        // 3-day forecast
        forecastContainer.innerHTML = "";
        const days = [0, 8, 16]; // roughly next 3 days
        days.forEach(i => {
            const dayData = data.list[i];
            const card = document.createElement("div");
            card.classList.add("forecast-card");
            card.innerHTML = `
                <p>${new Date(dayData.dt_txt).toLocaleDateString(undefined, { weekday: 'short' })}</p>
                <img src="https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png" alt="${dayData.weather[0].description}">
                <p>${Math.round(dayData.main.temp)}°F</p>
            `;
            forecastContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Weather fetch failed:", error);
        weatherDesc.textContent = "Weather unavailable";
    }
}

fetchWeather();
