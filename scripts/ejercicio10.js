let totalCompra = 150;

let estadoEnvio = totalCompra >= 100 ? "Gratis" : "De pago";

console.log("Estado del envío:", estadoEnvio);

document.write("<h2>Resultado</h2>");
document.write("<p>Total de la compra: $" + totalCompra + "</p>");
document.write("<p>Estado del envío: " + estadoEnvio + "</p>");

alert("Estado del envío: " + estadoEnvio);