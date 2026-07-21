for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        console.log("Se detuvo el ciclo en el número: " + i);
        document.write("Se detuvo el ciclo en el número: " + i + "<br>");
        break;
    }

    console.log(i);
    document.write(i + "<br>");
}

alert("El ciclo finalizó.");