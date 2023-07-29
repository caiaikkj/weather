

const key = "822f042b9db3cbe060c5cceed8372f6c"


function populateScreen(data){
    console.log(data)

    document.querySelector(".city-name").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-wheater").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade do ar: " + data.main.humidity + "%"
    document.querySelector(".img-wheater").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    populateScreen(data)
    
}

function buttonPressed() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}