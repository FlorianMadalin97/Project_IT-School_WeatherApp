var API_KEY = "3139a35568c1042cfabaae260ff4b6ce";
var language = "ro";

function getCurrentWeatherDataUrl(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}
