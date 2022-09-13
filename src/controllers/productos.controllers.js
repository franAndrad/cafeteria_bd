import Producto from "../models/producto";

export const crearProducto = async (req, res) => {
    try {
        console.log(req.body);
        // solo podemos tener un res
        
        //validacion
        // crear un objetio para guardar en la BD
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            imagen: req.body.imagen,
            precio: req.body.precio,
            categoria: req.body.categoria
        });
        // tambien podemos pasar el req.body si no hay nada que agregar

        // guardar efectivamente en la BD
        await productoNuevo.save(); //tiene que esperar a que se guarde

        // enviar respuesta al frontend
        res.status(201).json({
            mensaje: 'El producto fue creado exitosamente'
        })

        // si algo falla tambien enviar una respuesta
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'El producto enviado no pudo ser creado',
        })
    }
}

export const listarProductos = (req, res) => {
    res.send('enviar lista de productos');
}
export const obtenerProducto = (req, res) => {
    res.send('recibit un producto');
}
export const editarProducto = (req, res) => {
    res.send('editar un producto');
}
export const eliminarProducto = (req, res) => {
    res.send('eliminar un producto');
}