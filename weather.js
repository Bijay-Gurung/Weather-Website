alert("Welcome to our Weather Web Application!");

const inputField = document.getElementById('searchBar');
const searchButton = document.querySelector('button');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const windSpeed = document.getElementById('windSpeed');

searchButton.addEventListener("click", () => {
    const city = inputField.value;
    const apiKey = 'd666925a487e8b8073178d85ffeba0a2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        updateWeatherData(data);
    })
    .catch((error) =>{
        console.log(error);
    })
});

function updateWeatherData(data) {
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherCondition.textContent = data.weather[0].description;
    windSpeed.textContent = `Wind: ${data.wind.speed} m/s`;

    const weatherLogo = document.getElementById('weatherLogo');
    weatherLogo.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;

    const humidity = document.getElementById('humidity');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const pressure = document.getElementById('pressure');
    pressure.textContent = `Pressure: ${data.main.pressure} hPa`;

    const windSpeedIcon = document.getElementById('windSpeedIcon');
    windSpeedIcon.innerHTML = `<i class="fas fa-wind"></i>`;
}
