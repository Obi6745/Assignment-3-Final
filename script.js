const API_KEY = '9d68a4364c162e2cdfb93cf46be71d5d'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

//main dom elements 
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const forecast = document.getElementById('forecast');

//event listeners

searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

