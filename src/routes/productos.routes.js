import { Router } from 'express'
import { crearProducto, editarProducto, eliminarProducto, listarProductos, obtenerProducto } from '../controllers/productos.controllers';

const router = Router();

// crear todas las rutas de los productos

// dominio + /apicafe + /productos
router
    .route('/productos')
    .get(listarProductos)
    .post(crearProducto);
router
    .route('/productos/:id')
    .get(obtenerProducto)
    .put(editarProducto)
    .delete(eliminarProducto);

export default router;


// // rutas
// app.get('/', (req, res) => {
//     res.send('primera peticion get');
// });
// app.get('/prueba', (req, res) => {
//     res.send('otra peticion get');
// });