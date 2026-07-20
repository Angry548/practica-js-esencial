const frutas = ["Manzana", "Plátano"];

frutas.push("Naranja");

console.log("Arreglo:", frutas);
console.log("Longitud del arreglo:", frutas.length);

document.write("<h2>Resultado</h2>");
document.write("<p>Frutas: " + frutas.join(", ") + "</p>");
document.write("<p>Longitud del arreglo: " + frutas.length + "</p>");

alert("La longitud del arreglo es: " + frutas.length);