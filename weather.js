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
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) =>{
        console.log(error);
    })
})
