let mylocation = "Großefehn";
const apiKey = "4725677d4d7444429ae185546240502";
const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${mylocation}&lang=de`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Fehler: Status ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Wetterdaten:", data);
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    console.log(
      `In ${mylocation} ist es derzeit ${temperature} °C und ${condition}.`
    );
  })
  .catch((error) => {
    console.error("Fehler beim Abrufen der Wetterdaten:", error);
  });
