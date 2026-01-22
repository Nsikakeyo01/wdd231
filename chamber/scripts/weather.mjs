const apiKey = "6780a0dcb9c34e6648dba652803c7c37";
const lat = 16.75;
const lon = -93.12;
const units = "imperial";

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        currentTemp.textContent = Math.round(data.main.temp) + "°F";
        weatherDesc.textContent = data.weather[0].description;

        const icon = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        const forecastDays = forecastData.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        day1.textContent = `${forecastDays[0].dt_txt.split(" ")[0]}: ${Math.round(forecastDays[0].main.temp)}°F`;
        day2.textContent = `${forecastDays[1].dt_txt.split(" ")[0]}: ${Math.round(forecastDays[1].main.temp)}°F`;
        day3.textContent = `${forecastDays[2].dt_txt.split(" ")[0]}: ${Math.round(forecastDays[2].main.temp)}°F`;

    } catch (error) {
        weatherDesc.textContent = "Weather unavailable";
    }
}

getWeather();
