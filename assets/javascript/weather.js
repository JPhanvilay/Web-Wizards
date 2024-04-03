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

        const todayWeather = `
        <div> 
            <h3>${data.name}</h3>
            <p>temp_f: ${data.main.temp}</p>
            <p>humidity: ${data.main.humidity}</p>
            <p>wind-speed: ${data.wind.speed}</p>
        </div>

        `;

        todayforecast.innerHTML = todayWeather
    }
    catch (error) {
        console.error("error fetching data", error)
    }
}

async function searchCity(city) {
    console.log(city);
    try {

        const fiveDayresponse = await fetch(`${weatherForecastUrl}&q=${city}&days=5`)
        const fiveDayData = await fiveDayresponse.json()
        const filteredArray = fiveDayData.forecast.forecastday
        console.log(filteredArray)
    }
    catch (error) {
        console.error("error fetching data", error)
    }
}

citySearchBtn.addEventListener('click', function (event) {
    console.log("working");
    event.preventDefault();
    const searchedEl = document.querySelector('#searchInput').value.trim();
    if (!searchedEl) {
        console.error('You need a search input value!');
        return;
    }

    searchCity(searchedEl)
    appendToHistory(searchedEl);
});