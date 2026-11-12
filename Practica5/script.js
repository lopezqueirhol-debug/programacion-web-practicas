// --- EL ESTADO ---
let nextUrl = null;
let prevUrl = null;
const URL_BASE = 'https://rickandmortyapi.com/api/character';

// --- SELECCIÓN DE ELEMENTOS DEL DOM ---
const inputBuscar = document.getElementById('input-buscar');
const btnBuscar = document.getElementById('btn-buscar');
const mensajeDiv = document.getElementById('mensaje');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const divPaginacion = document.getElementById('paginacion');
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');