const api = {
    key: `972cddccdb0563baf888c9632d4e3dff`,
    baseurl: `https://api.openweathermap.org/data/2.5/`
}

const searchBox = document.querySelector('.search-box')

searchBox.addEventListener('keypress', setQuery)

function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchBox.value)
    }
}

function getResults(e){
    fetch(`${api.baseurl}weather?q=${e}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json())
    .then(displayResults)

    .catch(err => console.log(err))
}

function displayResults(e){
    console.log(e)
    document.querySelector('.location .city').innerText = `${e.name}, ${e.sys.country} `
    let now = new Date()
    document.querySelector('.location .date').innerText = dateBuilder(now)

    document.querySelector('.current .temp').innerText = `${e.main.temp} °C`
    document.querySelector('.current .weather').innerText = `${e.weather[0].main}`
    document.querySelector('.current .hi-low').innerText = `${e.main.temp_min} °C / ${e.main.temp_max}°C`
}

function dateBuilder(d){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    

    return `${day} ${date}, ${month} ${year}`

}


let now = new Date()

let year = now.getFullYear()

document.querySelector('#date').innerText = year;
