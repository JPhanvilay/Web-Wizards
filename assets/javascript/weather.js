const weatherApiRootUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
const searchHistory = JSON.parse(localStorage.getItem("search-history")) || [];


const todayWeather = document.querySelector('#today');
const sevenDayForecast = document.querySelector('#forecast');
const searchHistoryContainer = document.querySelector('#history');
const citySearchBtn = document.querySelector('#searched-cities');

//History Display Functionality:
function renderSearchHistory() {
    searchHistoryContainer.innerHTML = "";

    for (let i = searchHistory.length - 1; i >= 0; i--) {
        const citySearchBtn = document.createElement('button');
        citySearchBtn.setAttribute('type', 'button');
        citySearchBtn.setAttribute('aria-controls', 'todaysWeather');
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

        const response = await fetch(`${weatherApiRootUrl}/data/2.5/weather?q=${city}&units=imperial&appid`)
        const data = await response.json()
        //console.log(data)
        const icon = data.weather[0].icon
        //const url = 
        const todayWeather = `
        <div> 
            <h3>${data.name}</h3>
            <p>temp: ${data.main.temp}</p>
            <p>humidity: ${data.main.humidity}</p>
            <p>wind-speed: ${data.wind.speed}</p>
            <img src = "${url}"/>
        </div>
        
        `;

        todayWeather.innerHTML = todayWeather
        const lat = data.coord.lat
        const lon = data.coord.lon


        const sevenDayResponse = await fetch(
            `${weatherApiRootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid`
        )
        const sevenDayData = await sevenDayResponse.json()

        const filteredArray = sevenDayData.list.filter((day) => day.dt_txt.includes("12:00:00"))
        console.log(filteredArray)

        let sevenDayCard = ""

        filteredArray.forEach((day) => {
            console.log(day)
            let date = new Date(day.dt_txt).toLocaleDateString().split(",")[0]
            //const fiveIcon = data.weather[0].icon
            //const fiveUrl =
            sevenDayCard += `
            <div> 
            <h3>${date}</h3>
            <p>temp: ${day.main.temp}</p>
            <p>humidity: ${day.main.humidity}</p>
            <p>wind-speed: ${day.wind.speed}</p>
        </div>
            
            `;
            sevenDayForecast.innerHTML = sevenDayCard
        })
    } catch (error) {
        console.error("error fetching data", error)
    }
}



citySearchBtn.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchedEl = document.querySelector('#searchInput').value.trim();
    if (!searchedEl) {
        console.error('You need a search input value!');
        return;
    }
    console.log("working");

    searchCity(searchedEl)
    appendToHistory(searchedEl);
});