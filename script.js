window.onload = function() {

let city = document.querySelector('.input-text');
let button = document.querySelector('.button');
let key = "cc849320a34e7e9d09e74100400ff710";

button.addEventListener('click', function() {

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=' + key)

.then(res => {
    return res.json()
})
.then(data => {
    drawWeather(data);
    // button.addEventListener('click', function() {
    // window.location.reload();

    // })
    console.log(data);
    
})
.catch(err => {
    alert("Please enter a valid city");
})
})
}
function drawWeather(d) {
    let temp = Math.round(parseFloat(d.main.temp)-273.15);
    let tempMin = Math.round(parseFloat(d.main.temp_min)-273.15);
    let tempMax = Math.round(parseFloat(d.main.temp_max)-273.15);
    let location = d.name;
    let country = d.sys.country;
    let main = d.weather[0].main;

    //icon
    let iconCode = d.weather[0].icon;
    let img = document.createElement('img');
    let iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
    // img.src = iconUrl
    let description = d.weather[0].description;
    img.alt = description;
    let icon = document.getElementById("icon");
    icon.setAttribute('src', iconUrl)

    // sunrise
    let unix_sunrise = d.sys.sunrise;
    let date = new Date(unix_sunrise * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let sunrise = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    //sunset
    let unix_sunset = d.sys.sunset;
    let date1 = new Date(unix_sunset * 1000);
    let hours1 = date1.getHours();
    let minutes1 = "0" + date1.getMinutes();
    let seconds1 = "0" + date1.getSeconds();
    let sunset = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);

    document.getElementById("temp").innerHTML = temp + '&deg';
    document.getElementById("temp-min").innerHTML = tempMin + '&deg;';
    document.getElementById("temp-max").innerHTML = tempMax + '&deg;';
    document.getElementById("location").innerHTML = location + ', ' + country;
    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;
    document.getElementById("main").innerHTML = main;
}
