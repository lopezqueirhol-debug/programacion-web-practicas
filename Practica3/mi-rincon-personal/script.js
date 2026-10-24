const spanVerMas = document.getElementById("ver-mas");
const btnLeerMas = document.getElementById("btn-ver-mas");

function alternarTexto() {

    if (spanVerMas.classList.contains("ocultar")) {   

        spanVerMas.classList.remove("ocultar");
        btnLeerMas.textContent = "Ver Menos";

    } else { 

        spanVerMas.classList.add("ocultar");
        btnLeerMas.textContent = "Ver Mas";

    }
}

btnLeerMas.addEventListener("click", alternarTexto);