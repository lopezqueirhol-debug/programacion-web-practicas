const inputProducto = document.getElementById("input-producto");
const btnAgregar = document.getElementById("btn-agregar");
const btnOrdenar = document.getElementById("btn-ordenar");
const listaProductos = document.getElementById("lista-productos");
const mensajeError = document.getElementById("mensaje-error");

let productos = [];
let ordenAscendente = true;

function renderLista() {
    listaProductos.innerHTML = "";

    productos.forEach(function (producto, indice) {
        const item = document.createElement("li");
        item.classList.add("producto");

        if (producto.completado) {
            item.classList.add("completado");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = producto.completado;
        checkbox.addEventListener("change", function () {
            alternarCompletado(indice);
        });

        const nombre = document.createElement("span");
        nombre.textContent = producto.nombre;
        nombre.addEventListener("click", function () {
            alternarCompletado(indice);
        });

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.addEventListener("click", function () {
            eliminarProducto(indice);
        });

        item.appendChild(checkbox);
        item.appendChild(nombre);
        item.appendChild(btnEliminar);
        listaProductos.appendChild(item);
    });
}