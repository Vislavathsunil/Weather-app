const container = document.querySelector(".weather-main-container");
const serach = document.querySelector(".weather-serach button")
const WeatherBox = document.querySelector(".weather-box")
const WeatherDetails = document.querySelector(".weather-details")
const error = document.querySelector(".not-found");
const hideCity = document.querySelector("#hide-city");




serach.addEventListener("click", () => {


    // API key 
    const APIKey = '1df024886d844838bd5c71f743edf4b3';


    let city = document.querySelector("#input").value;

    if (city == '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {


        if (json.cod == '404') {
            container.style.height = "55vh";
            WeatherBox.classList.remove("active");
            WeatherDetails.classList.remove("active");
            error.classList.add("active");
            return;
        }

        container.style.height = "75vh";
        WeatherBox.classList.add("active");
        WeatherDetails.classList.add("active");
        error.classList.remove("active");

        const image = document.querySelector(".weather-info img");
        const temperature = document.querySelector(".weather-info .temperature");
        const description = document.querySelector(".weather-info .description");
        const Humidity = document.querySelector(".Humidity-text p");
        const Wind = document.querySelector(".Wind-text p");




        switch (json.weather[0].main) {
            case "Clouds":
                image.src = "cloud.png";
                break;
            case "Rain":
                image.src = "rain.png";
                break;
            case "Snow":
                image.src = "snow.png";
                break;
            case "Clear":
                image.src = "clear.png";
                break;
            case "Mist":
                image.src = "mist.png";
                break;
            case "Haze":
                image.src = "mist.png";
                break;
            default:
                image.src = "404.png";
        }


        temperature.innerHTML = `${json.main.temp}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        Humidity.innerHTML = `${json.main.humidity}%`;
        Wind.innerHTML = `${json.wind.speed} Km/h`;

        city = "";
    });







})
