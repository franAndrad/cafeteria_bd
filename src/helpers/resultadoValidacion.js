import { validationResult } from "express-validator"

const resultadosValidacion = (req, res, next) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
            // si pongo errors.mapped() me devuelve el primer error que encuentra
        })
    }
    // le digo que continue el flujo
    next();
}

export default resultadosValidacion;