import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";

const validacionProducto = [
    check('nombreProducto')
        .notEmpty()
        .withMessage('El nombre del producto es obligatorio')
        .isLength({ min: 2, max: 50 })
        .withMessage('El producto debe tener entre 2 y 50 caracteres'),

    check('precio')
        .notEmpty()
        .withMessage('El precio es un valor obligatorio')
        .custom((value) => {
            if (value >= 0 && value <= 9000) {
                return true;
            } else {
                throw new Error('El precio debe estar entre 0 y 9000')
            }
        }),

    check('imagen')
        .notEmpty()
        .withMessage('La url de la imagen es obligatorio')
        .isURL()
        .withMessage('La url no es correcta'),

    check('categoria')
        .notEmpty()
        .withMessage('Debe ingresar una categoria'),
        
    (req, res, next) => {
            resultadosValidacion(req, res, next)
        }
    
];

export default validacionProducto;