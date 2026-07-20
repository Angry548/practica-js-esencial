let comparacionDebil = 10 == "10";
let comparacionEstricta = 10 === "10";

console.log("10 == '10':", comparacionDebil);
console.log("10 === '10':", comparacionEstricta);

document.write("<h2>Resultado</h2>");
document.write("<p>10 == '10': " + comparacionDebil + "</p>");
document.write("<p>10 === '10': " + comparacionEstricta + "</p>");

alert("Igualdad débil: " + comparacionDebil + "\nIgualdad estricta: " + comparacionEstricta);