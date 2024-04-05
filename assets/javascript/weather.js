const weatherCurrentUrl = 'http://api.weatherapi.com/v1/current.json?key=c499ece443144aa190b192241240204';
const weatherForecastUrl = 'http://api.weatherapi.com/v1/forecast.json?key=c499ece443144aa190b192241240204';
const searchHistory = JSON.parse(localStorage.getItem("search-history")) || [];

const todayWeather = document.querySelector('#today');
const fiveDayForecast = document.querySelector('#forecast');
const searchHistoryContainer = document.querySelector('#history');
const citySearchBtn = document.querySelector('#searchButton');
console.log(citySearchBtn)


function appendToHistory(search) {
    if (searchHistory.indexOf(search) !== -1) {
        return;
    }
    searchHistory.push(search);

    localStorage.setItem("search-history", JSON.stringify(searchHistory));

}

async function searchCity(city) {
    console.log(city);
    try {

        const response = await fetch(`${weatherCurrentUrl}&q=${city}`)
        const data = await response.json()
        console.log(data)
        const parsedData = {
            name: data.location.name,
            temp_f: data.current.temp_f,
            wind: data.current.wind_mph,
            humidity: data.current.humidity
        }
        return parsedData


    }
    catch (error) {
        console.error("error fetching data", error)
    }
}

async function searchForecast(city) {
    console.log(city);
    try {

        const fiveDayresponse = await fetch(`${weatherForecastUrl}&q=${city}&days=5`)
        const fiveDayData = await fiveDayresponse.json()
        const filteredArray = fiveDayData.forecast.forecastday

        return filteredArray
    }
    catch (error) {
        console.error("error fetching data", error)
    }
}

function renderTodayForecast(data) {
    const weatherHtml = `
        <div> 
            <h3>${data.name}</h3>
            <p>Temp: ${data.temp_f}</p>
            <p>Humidity: ${data.humidity}</p>
            <p>Wind-speed: ${data.wind}</p>
        </div>

        `;

    todayWeather.innerHTML = weatherHtml
}

citySearchBtn.addEventListener('click', async function (event) {
    console.log("working");
    event.preventDefault();
    const searchedEl = document.querySelector('#searchInput').value.trim();
    if (!searchedEl) {
        console.error('You need a search input value!');
        return;
    }

    const cityData = await searchCity(searchedEl)
    renderTodayForecast(cityData)
    console.log(cityData)
    const forecastArray = await searchForecast(searchedEl)
    let forecastCard = ""
    forecastArray.forEach(day => {
        console.log(day)
        const weatherIcon = day.day.condition.icon
        const weatherUrl = `https:${weatherIcon}`
        forecastCard += `
        <div class="forecast-card">
            <p>${day.date}</p>
            <p>Temp: ${day.day.avgtemp_f}</p>
            <p>Humidity: ${day.day.avghumidity}</p>
            <p>Wind Speed: ${day.day.maxwind_mph}</p>
         <img src = "${weatherUrl}"alt="${day.day.condition.text}"/>
        </div>
        
        `
        fiveDayForecast.innerHTML = forecastCard

    })
    appendToHistory(searchedEl);
});