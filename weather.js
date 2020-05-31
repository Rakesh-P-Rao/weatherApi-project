// 7d51622a209c8b344634c0a92228c506

var search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
  var getCityName = e.target.value;
  getWeather(getCityName);
});

function getWeather(getCityName) {
  const weatherApi = `
  http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=7d51622a209c8b344634c0a92228c506`;
  window
    .fetch(weatherApi)
    .then((data) => {
      data
        .json()
        .then((weather) => {
          var output = "";
          console.log(weather);
          var weatherData = weather.weather;
          for (let climate of weatherData) {
            output += `
                    <div class="weatherBlock">
                        <div>
                            <h1>${weather.name}</h1>
                            <span>
                                <img src="http://openweathermap.org/img/wn/${climate.icon}.png" />
                            </span>
                            <p>
                                <span>temp: ${weather.main.temp}&deg;c</span>
                            </p>
                            <span>${climate.description}</span>
                            <span>${climate.main}</span>
                        </div>
                    </div>
                  `;
            document.getElementById("template").innerHTML = output;
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}