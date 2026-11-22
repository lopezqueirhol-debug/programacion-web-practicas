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

    const nombreInvalido = typeof nombre !== 'string' || nombre.trim() === ''
    const descripcionInvalida = typeof descripcion !== 'string' || descripcion.trim() === ''
    const precioInvalido = Number.isNaN(precioNumber) || precioNumber <= 0

    if (nombreInvalido || descripcionInvalida || precioInvalido) {
        return res.status(400).json({ mensaje: 'nombre, descripcion y precio son obligatorios' })
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


// TODO: PUT /productos/:id - Actualizar producto


// TODO: DELETE /productos/:id - Eliminar producto


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})
