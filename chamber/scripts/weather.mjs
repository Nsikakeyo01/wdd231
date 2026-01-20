// Default weather if API fails
const weatherIcon = document.getElementById("weather-icon");
const currentTemp = document.getElementById("current-temp");
const weatherDesc = document.getElementById("weather-desc");
const forecastContainer = document.getElementById("forecast");

// Example default weather
const weatherData = {
    temp: 75,
    description: "Sunny",
    icon: "images/weather-icon.png",
    forecast: [
        { day: "Tue", temp: 78, desc: "Partly Cloudy" },
        { day: "Wed", temp: 80, desc: "Sunny" },
        { day: "Thu", temp: 77, desc: "Cloudy" }
    ]
};

// Update DOM
currentTemp.textContent = `${weatherData.temp}°F`;
weatherDesc.textContent = weatherData.description;
weatherIcon.src = weatherData.icon;

forecastContainer.innerHTML = "";
weatherData.forecast.forEach(day => {
    const div = document.createElement("div");
    div.textContent = `${day.day}: ${day.temp}°F - ${day.desc}`;
    forecastContainer.appendChild(div);
});
