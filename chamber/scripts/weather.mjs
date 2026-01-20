// Weather Module
const apiKey = "YOUR_API_KEY"; // <-- Replace with your OpenWeatherMap API key
const city = "San Miguel,SV"; // Your city
const units = "imperial"; // Fahrenheit

// DOM Elements
const weatherIcon = document.getElementById("weather-icon");
const currentTemp = document.getElementById("current-temp");
const weatherDesc = document.getElementById("weather-desc");

// Fetch Weather Data
async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
        );

        if (!response.ok) throw new Error("Weather data not available");

        const data = await response.json();

        // Update DOM
        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.alt = data.weather[0].description;

        currentTemp.textContent = Math.round(data.main.temp);
        weatherDesc.textContent = data.weather[0].description;

    } catch (error) {
        console.error(error);
        currentTemp.textContent = "--";
        weatherDesc.textContent = "Weather unavailable";
        weatherIcon.src = "";
    }
}

// Run the function
getWeather();
