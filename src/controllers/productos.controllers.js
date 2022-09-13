import Producto from "../models/producto";
import { validationResult } from "express-validator/src/validation-result";

export const crearProducto = async (req, res) => {
    try {
        console.log(req.body);
        // solo podemos tener un res

        //validacion
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
                // si pongo errors.mapped() me devuelve el primer error que encuentra
            })
        }

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

export const listarProductos = async (req, res) => {
    try {
        // buscar en la BD la collection de productos
        const arregloProductos = await Producto.find();
        // enviar la respuesta
        res.status(200).json(arregloProductos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los productos'
        })
    }
}

export const obtenerProducto = async (req, res) => {
    try {
        // buscar en la BD la collection de productos
        const arregloProductos = await Producto.findById(req.params.id);
        // enviar la respuesta
        res.status(200).json(arregloProductos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los productos'
        })
    }
}

export const editarProducto = async (req, res) => {
    try {
        // validaciones
        // buscar el producto por el id y luego modificar el producto
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: 'El producto fue editado correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar el producto'
        });
    }
}

export const eliminarProducto = async (req, res) => {
    try {
        // buscar un producto en la coleccion por el id y luego borrar
        await Producto.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: 'El producto fue eliminado correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar borrar el producto'
        })
    }
} 