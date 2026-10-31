const inputProducto = document.getElementById("input-producto");
const btnAgregar = document.getElementById("btn-agregar");
const btnOrdenar = document.getElementById("btn-ordenar");
const listaProductos = document.getElementById("lista-productos");
const mensajeError = document.getElementById("mensaje-error");

let productos = [];
let ordenAscendente = true;