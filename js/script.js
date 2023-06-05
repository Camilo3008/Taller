function enviar() {
    let respuesta1, respuesta2, respuesta3

    respuesta1 = document.getElementById("pregunta1").value
    localStorage.setItem("pregunta1", respuesta1)


    respuesta2 = document.getElementById("pregunta2").value
    localStorage.setItem("pregunta2", respuesta2)

    respuesta3 = document.getElementById("pregunta3").value
    localStorage.setItem("pregunta3", respuesta3)





    window.location = "resultados.html"
}