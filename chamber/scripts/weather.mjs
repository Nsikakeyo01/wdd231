// File: scripts/weather.mjs

const apiKey = 'beff9c8a958221e992923378bf3f5f39';
const city = 'San Miguel'; // Change if needed
const units = 'imperial'; // Fahrenheit
const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
const weatherDesc = document.getElementById('weather-desc');

// OpenWeatherMap API URL
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

// Fetch weather data
async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        // Update HTML elements
        currentTemp.textContent = Math.round(data.main.temp);
        weatherDesc.textContent = data.weather[0].description
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' '); // Capitalize each word

        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
    } catch (error) {
        console.error('Weather API error:', error);
        currentTemp.textContent = '--';
        weatherDesc.textContent = 'Weather unavailable';
        weatherIcon.src = '';
        weatherIcon.alt = 'Weather icon';
    }
}

// Run function when page loads
getWeather();
