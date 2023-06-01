const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "efcb51744ead05e44fb5d4392567bf0f";
const search = document.querySelector(".input-card input");
const btn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather img");

async function weatherCheck(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"    
    }
    else{
        let data = await response.json();
    document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humid-val").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-val").innerHTML = Math.round(data.wind.speed) +"km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/Photos/cloudy.jpeg"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Photos/sunny.jpeg"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Photos/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "Photos/snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Photos/mist.jpeg"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Photos/drizzle.png"
    }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"
    }
};

// weatherCheck()

btn.addEventListener("click", ()=>{
    weatherCheck(search.value)
})