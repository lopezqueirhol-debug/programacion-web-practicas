const express = require('express')
const app = express()

app.use(express.json())

const productos = [
    {
        id: 1,
        nombre: 'Teclado inalambrico',
        descripcion: 'Teclado 101 teclas idioma ingles',
        precio: 1500.00
    },
    {
        id: 2,
        nombre: 'Mouse inalambrico',
        descripcion: 'Mouse optico inalambrico.',
        precio: 600.00
    },
    {
        id: 3,
        nombre: 'Monitor 23.5 pulgadas full hd',
        descripcion: 'Monitor Full HD panel IPS',
        precio: 6500.00
    }
]

function esProductoValido(nombre, descripcion, precio) {
    const nombreValido = typeof nombre === 'string' && nombre.trim() !== ''
    const descripcionValida = typeof descripcion === 'string' && descripcion.trim() !== ''
    const precioValido = !Number.isNaN(precio) && precio > 0

    return (nombreValido && descripcionValida && precioValido)
}

// GET - Listar todos los productos
app.get('/productos', (req, res) => {
    res.json(productos)
})

// GET - Obtener un producto por id
app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const producto = productos.find(p => p.id === id)

    if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' })
    }

    res.json(producto)
})


// ============================================================
// PRÁCTICA 6: Completa los siguientes métodos de la API
// ============================================================

// POST - Crear nuevo producto
app.post('/productos', (req, res) => {
    const { nombre, descripcion, precio } = req.body

    const precioNumber = parseFloat(precio)

    if (!esProductoValido(nombre, descripcion, precioNumber)) {
        return res.status(400)
            .json({ mensaje: 'nombre, descripcion y precio son obligatorios y el precio debe ser mayor que cero' })
    }

    const nuevoId = productos.reduce((max, p) => Math.max(max, p.id ?? 0), 0) + 1

    const nuevoProducto = {
        id: nuevoId,
        nombre: nombre,
        descripcion: descripcion,
        precio: precioNumber
    }

    productos.push(nuevoProducto)

    return res.status(201).json(nuevoProducto)
})


// PUT Actualizar producto por id
app.put('/productos/:id', (req, res) => {
    const id = Number(req.params.id)

    const index = productos.findIndex((p) => p.id === id)
    
    if (index === -1) {
        return res.status(404)
            .json({ mensaje: 'El producto no existe' })
    }

    const { nombre, descripcion, precio } = req.body ?? {}

    const precioNumber = parseFloat(precio)

    if (!esProductoValido(nombre, descripcion, precioNumber)) {
        return res.status(400)
            .json({ mensaje: 'nombre, descripcion y precio son obligatorios y el precio debe ser mayor que cero' })
    }

    const productoActualizado = {
        id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precioNumber
    }

    productos[index] = productoActualizado

    return res.status(200).json(productoActualizado)
})

// TODO: DELETE /productos/:id - Eliminar producto


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})
