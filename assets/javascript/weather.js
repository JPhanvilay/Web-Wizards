const weatherCurrentUrl = 'http://api.weatherapi.com/v1/current.json?key=c499ece443144aa190b192241240204';
const weatherForecastUrl = 'http://api.weatherapi.com/v1/forecast.json?key=c499ece443144aa190b192241240204';
const searchHistory = JSON.parse(localStorage.getItem("search-history")) || [];

const todayWeather = document.querySelector('#today');
const fiveDayForecast = document.querySelector('#forecast');
const searchHistoryContainer = document.querySelector('#history');
const citySearchBtn = document.querySelector('#searchButton');
console.log(citySearchBtn)


function renderSearchHistory() {
    searchHistoryContainer.innerHTML = "";

    for (let i = searchHistory.length - 1; i >= 0; i--) {
        const citySearchBtn = document.createElement('button');
        citySearchBtn.setAttribute('type', 'button');
        citySearchBtn.setAttribute('aria-controls', 'todayForecast');
        citySearchBtn.classList.add('history-citySearchBtn', 'citySearchBtn-history');

        citySearchBtn.setAttribute('data-search', searchHistory[i]);
        citySearchBtn.textContent = searchHistory[i];
        searchHistoryContainer.append(citySearchBtn);

    }
}

renderSearchHistory();

function appendToHistory(search) {
    if (searchHistory.indexOf(search) !== -1) {
        return;
    }
    searchHistory.push(search);

    localStorage.setItem("search-history", JSON.stringify(searchHistory));
    renderSearchHistory();
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
            <p>temp_f: ${data.temp_f}</p>
            <p>humidity: ${data.humidity}</p>
            <p>wind-speed: ${data.wind}</p>
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
    console.log(forecastArray)
    appendToHistory(searchedEl);
});