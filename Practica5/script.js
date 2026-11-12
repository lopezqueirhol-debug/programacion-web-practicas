let nextUrl = null;
let prevUrl = null;
const URL_BASE = 'https://rickandmortyapi.com/api/character';

const inputBuscar = document.getElementById('input-buscar');
const btnBuscar = document.getElementById('btn-buscar');
const mensajeDiv = document.getElementById('mensaje');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const divPaginacion = document.getElementById('paginacion');
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');

async function obtenerPersonajes(url) {
    try {
        mensajeDiv.textContent = 'Cargando...';
        contenedorTarjetas.innerHTML = '';
        divPaginacion.style.display = 'none';

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('No se encontraron personajes con ese criterio.');
        }

        const data = await response.json();

        nextUrl = data.info.next;
        prevUrl = data.info.prev;

        mensajeDiv.textContent = '';
        dibujarTarjetas(data.results);

        divPaginacion.style.display = 'flex';
        actualizarPaginacion();

    } catch (error) {
        mensajeDiv.textContent = error.message;
        contenedorTarjetas.innerHTML = '';
        divPaginacion.style.display = 'none';
    }
}