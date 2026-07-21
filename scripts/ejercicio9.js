let temperatura = 32;

if (temperatura > 30) {
    console.log("Hace calor");
    document.write("<h2>Resultado</h2>");
    document.write("<p>Temperatura: " + temperatura + "°C</p>");
    document.write("<p>Hace calor</p>");
    alert("Hace calor");
} else {
    console.log("Clima agradable");
    document.write("<h2>Resultado</h2>");
    document.write("<p>Temperatura: " + temperatura + "°C</p>");
    document.write("<p>Clima agradable</p>");
    alert("Clima agradable");
}