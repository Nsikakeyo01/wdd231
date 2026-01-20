const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
const lat = '13.69';  // Latitude for Trier (example)
const lon = '13.77';  // Longitude for Trier
const units = 'imperial'; // Use 'metric' for °C

const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
const weatherDesc = document.getElementById('weather-desc');

async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather fetch failed');
        const data = await response.json();

        currentTemp.textContent = Math.round(data.main.temp);
        weatherDesc.textContent = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
    } catch (error) {
        console.error(error);
        weatherDesc.textContent = 'Weather data not available';
    }
}

getWeather();
