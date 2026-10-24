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

const btnTema = document.getElementById("btn-tema");

function alternarTemas() {
    document.body.classList.toggle("temas");

    if (document.body.classList.contains("temas")) {
        btnTema.textContent = "Modo Claro";
    } else {
        btnTema.textContent = "Modo Oscuro";
    }
}

btnTema.addEventListener("click", alternarTemas);