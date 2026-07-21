let color = "rojo";

switch (color) {
    case "rojo":
        console.log("Detenerse");
        document.write("<h2>Resultado</h2>");
        document.write("<p>Color: " + color + "</p>");
        document.write("<p>Detenerse</p>");
        alert("Detenerse");
        break;

    case "verde":
        console.log("Avanzar");
        document.write("<h2>Resultado</h2>");
        document.write("<p>Color: " + color + "</p>");
        document.write("<p>Avanzar</p>");
        alert("Avanzar");
        break;

    default:
        console.log("Precaución");
        document.write("<h2>Resultado</h2>");
        document.write("<p>Color: " + color + "</p>");
        document.write("<p>Precaución</p>");
        alert("Precaución");
        break;
}