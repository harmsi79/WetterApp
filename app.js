let position;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (success) => {
      position = success.coords;
      // Jetzt hast du Zugriff auf die Breiten- und Längengrade in den Variablen:
      const latitude = position.latitude;
      const longitude = position.longitude;

      // Nutze die Daten z.B. für die Anzeige auf einer Karte oder weitere Berechnungen.
    },
    (error) => {
      console.error("Fehler beim Abrufen der Standortdaten:", error);
    }
  );
} else {
  console.log("Geolocation wird vom Browser nicht unterstützt.");
}
