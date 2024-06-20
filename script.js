document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = '9788ca235a7cabece23880737cec6bf1'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').textContent = `Weather in ${data.name}`;
            document.getElementById('weatherDescription').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}
