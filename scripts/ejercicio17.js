function saludarUsuario(nombre) {
    return "Hola, " + nombre;
}

let mensaje = saludarUsuario("Carlos");

console.log(mensaje);

document.write("<h2>Resultado</h2>");
document.write("<p>" + mensaje + "</p>");

alert(mensaje);