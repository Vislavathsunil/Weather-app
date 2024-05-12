const JSON = {
    "coord": {
        "lon": 10.99,
        "lat": 44.34
    },
    "weather": [
        {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 298.48,
        "feels_like": 298.74,
        "temp_min": 297.56,
        "temp_max": 300.05,
        "pressure": 1015,
        "humidity": 64,
        "sea_level": 1015,
        "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.62,
        "deg": 349,
        "gust": 1.18
    },
    "rain": {
        "1h": 3.16
    },
    "clouds": {
        "all": 100
    },
    "dt": 1661870592,
    "sys": {
        "type": 2,
        "id": 2075663,
        "country": "IT",
        "sunrise": 1661834187,
        "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
}


// console.table(JSON.weather[0].main);

// console.log(parseInt(JSON.main.temp));


const india = { "coord": { "lon": 12.2797, "lat": 46.7406 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 290.79, "feels_like": 289.97, "temp_min": 290.79, "temp_max": 290.79, "pressure": 1016, "humidity": 52, "sea_level": 1016, "grnd_level": 818 }, "visibility": 10000, "wind": { "speed": 1.97, "deg": 142, "gust": 1.99 }, "clouds": { "all": 51 }, "dt": 1715515529, "sys": { "country": "IT", "sunrise": 1715485190, "sunset": 1715538885 }, "timezone": 7200, "id": 3168508, "name": "Innichen", "cod": 200 }

const In = { "coord": { "lon": 12.2797, "lat": 46.7406 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 289.19, "feels_like": 288.29, "temp_min": 289.19, "temp_max": 289.19, "pressure": 1016, "humidity": 55, "sea_level": 1016, "grnd_level": 864 }, "visibility": 10000, "wind": { "speed": 2.05, "deg": 157, "gust": 2.02 }, "clouds": { "all": 55 }, "dt": 1715515771, "sys": { "country": "IT", "sunrise": 1715485190, "sunset": 1715538885 }, "timezone": 7200, "id": 3168508, "name": "Innichen", "cod": 200 }


// console.log(india.weather[0].description);

const k = {
    "coord": {
      "lon": 139.7531,
      "lat": 35.6854
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 294.39,
      "feels_like": 294.35,
      "temp_min": 293.13,
      "temp_max": 294.85,
      "pressure": 1013,
      "humidity": 68
    },
    "visibility": 10000,
    "wind": {
      "speed": 6.17,
      "deg": 190
    },
    "rain": {
      "1h": 0.18
    },
    "clouds": {
      "all": 75
    },
    "dt": 1715516912,
    "sys": {
      "type": 2,
      "id": 268395,
      "country": "JP",
      "sunrise": 1715456310,
      "sunset": 1715506578
    },
    "timezone": 32400,
    "id": 1861060,
    "name": "Japan",
    "cod": 200
  }

let t = k.weather[0].description;

console.log(t);