async function fetchWeatherDetails() {
    let location = document.getElementById("cityName").value;
    let key = "008475c5dcd556a5432c4d6ccda06ea0";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`;

    try {
        let data = await fetch(endpoint);
        let response = await data.json();

        if (data.ok) {
            let temperature = response.main.temp;
            let weatherCondition = response.weather[0].description;
            document.getElementById("weatherInfo").innerText = `Temp: ${temperature}°C | Condition: ${weatherCondition}`;
        } else {
            document.getElementById("weatherInfo").innerText = "City not found. Try again!";
        }
    } catch (err) {
        document.getElementById("weatherInfo").innerText = "Unable to retrieve data.";
    }
}
