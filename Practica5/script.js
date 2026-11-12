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

function dibujarTarjetas(results) {
    contenedorTarjetas.innerHTML = '';

    results.forEach(personaje => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const img = document.createElement('img');
        img.src = personaje.image;
        img.alt = personaje.name;

        const tarjetaBody = document.createElement('div');
        tarjetaBody.classList.add('tarjeta-body');

        const h3 = document.createElement('h3');
        h3.textContent = personaje.name;

        const pStatus = document.createElement('p');
        const estadoClase = personaje.status.toLowerCase();
        pStatus.innerHTML = `Estado: <span class="status ${estadoClase}"><span class="status-dot"></span>${personaje.status}</span>`;

        const pSpecies = document.createElement('p');
        pSpecies.textContent = `Especie: ${personaje.species}`;

        tarjetaBody.appendChild(h3);
        tarjetaBody.appendChild(pStatus);
        tarjetaBody.appendChild(pSpecies);

        tarjeta.appendChild(img);
        tarjeta.appendChild(tarjetaBody);

        contenedorTarjetas.appendChild(tarjeta);
    });
}

function actualizarPaginacion() {
    btnAnterior.disabled = (prevUrl === null);

    btnSiguiente.disabled = (nextUrl === null);
}

btnAnterior.addEventListener('click', () => {
    if (prevUrl) {
        obtenerPersonajes(prevUrl);
    }
});

btnSiguiente.addEventListener('click', () => {
    if (nextUrl) {
        obtenerPersonajes(nextUrl);
    }
});

obtenerPersonajes(URL_BASE);