let mylocation = "Großefehn";
const apiKey = "4725677d4d7444429ae185546240502";
const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${mylocation}&lang=de`;

fetch(url)
  .then((response) => response.json())
  .then((data) => weatherData(data))
  .catch((err) => console.log(err));

function weatherData(data) {
  console.log(data);

  const temperature = data.current.temp_c;
  const condition = data.current.condition.text;
  const weather = `In ${mylocation} ist es derzeit ${temperature} °C und ${condition}.`;

  document.getElementById("ausgabe").innerHTML = weather;
}
