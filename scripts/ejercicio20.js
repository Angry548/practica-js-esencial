const marcas = ["Sony", "LG"];

marcas[4] = "Samsung";

console.log("Arreglo:", marcas);
console.log("Longitud del arreglo:", marcas.length);

document.write("<h2>Resultado</h2>");
document.write("<p>Contenido del arreglo: " + marcas + "</p>");
document.write("<p>Longitud del arreglo: " + marcas.length + "</p>");

alert("La marca Samsung fue agregada en el índice 4.");