let mylocation = "Berlin";
const apiKey = "4725677d4d7444429ae185546240502";

function getApi() {
  let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${mylocation}&lang=de`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => weatherData(data))
    .catch((err) => console.log(err));
}

function weatherData(data) {
  let temperature = data.current.temp_c;
  let condition = data.current.condition.text;
  let weather = `In ${mylocation} ist es derzeit ${temperature} °C und ${condition}.`;

  document.getElementById("ausgabe").innerHTML = weather;
}

function getCity() {
  mylocation = document.getElementById("city").value;
  getApi();
}

getApi();
