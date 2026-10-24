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

const btnLike = document.getElementById("btn-like");
const spanLikes = document.getElementById("like-counter");

let contadorLikes = 0;

function sumarLike() {
    contadorLikes = ++contadorLikes;

    if (contadorLikes == 1) {
        spanLikes.textContent = contadorLikes + " ❤ Me gusta";
    } else {
        spanLikes.textContent = contadorLikes + " ❤ Me gustas";
    }
}

btnLike.addEventListener("click", sumarLike);