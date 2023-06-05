function resultado(){

    let resultado1, resultado2, resultado3

    resultado1 = localStorage.getItem("pregunta1")
    document.getElementById("resultado1").innerHTML = resultado1

    resultado2 = localStorage.getItem("pregunta2")
    document.getElementById("resultado2").innerHTML = resultado2 

    resultado3 = localStorage.getItem("pregunta3")
    document.getElementById("resultado3").innerHTML = resultado3


}
resultado()