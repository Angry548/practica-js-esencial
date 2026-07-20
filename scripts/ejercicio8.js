let nota1 = 8;
let nota2 = 6;

let resultado = nota1 >= 7 || nota2 >= 7;

console.log("¿Al menos una nota es mayor o igual a 7?:", resultado);

document.write("<h2>Resultado</h2>");
document.write("<p>Nota 1: " + nota1 + "</p>");
document.write("<p>Nota 2: " + nota2 + "</p>");
document.write("<p>¿Al menos una nota es mayor o igual a 7?: " + resultado + "</p>");

alert("Resultado: " + resultado);