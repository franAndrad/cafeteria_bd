import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuarios.controllers";

const router = Router();

router
    .route('/')
    .post(login)

router
    .route('/registrarse')
    .post(crearUsuario)

export default router;