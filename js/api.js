
const apiKey = "bad101c97288cb32e2870ec1ae62e2e2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTemp = document.querySelector(".temp");

async function checkWeather(city){
    const response = await fetch(apiURL + city +  `&appid=${apiKey}`);

    var data = await response.json();
    
    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    weatherTemp.innerHTML = Math.round(data.main.temp)  + "°c"
    // document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    // document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png"
    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png"
    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png"
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png"
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})



