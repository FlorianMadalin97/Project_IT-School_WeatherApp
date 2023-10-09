function getForecastFor5Days(city) {
  const defaultForecastURL = getForecastEndpoint(city);

  fetch(defaultForecastURL)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;

      let forecastsGroupedByDay = {};

      let forecastContainer = document.querySelector(".weather-forecast");
      forecastContainer.innerHTML = "";

      list.forEach((element, index) => {
        let { dt } = element;
        let day = getDayOfTheWeek(dt);

        if (forecastsGroupedByDay[day]) {
          forecastsGroupedByDay[day].push(element);
        } else {
          forecastsGroupedByDay[day] = [element];
        }
      });

      console.log(forecastsGroupedByDay);

      for (day in forecastsGroupedByDay) {
        forecastContainer.innerHTML += `<h3>${day}</h3>`;

        forecastsGroupedByDay[day].forEach((element) => {
          let { main, weather, dt } = element;

          let description = weather[0].description;
          let weatherIcon = getWeatherIcon(weather[0].icon);
          let temp = Math.round(main.temp);
          let realFeel = Math.round(main.feels_like);
          let currentTime = getTime(dt);

          forecastContainer.innerHTML += `<div class="forecast-day-container">
                    <div class="forecast w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
                        <div class="fs-6 ">${currentTime}</div>
                        <div class="weather-icon-container"><img class="weather-icon align-middle" src=${weatherIcon} alt="icon"></div>
                        <strong class=" fs-3">${temp}°C</strong>
                        <div class=" fs-6">${description}</div> 
                        <div class="real-feel-container fs-6 ">Real feel: <strong class="real-feel">${realFeel}°C</strong></div>
                    </div>
                 </div>`;
        });
      }
    });
}
