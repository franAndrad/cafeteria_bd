// const express = require('express');
import express from "express";
import morgan from "morgan";
import cors from "cors"
import "./src/database"
import router from "./src/routes/productos.routes";
import path from "path";
import auth from "./src/routes/usuarios.routes"
import * as detoenv from 'dotenv'

// instancia de express
const app = express();

// queremos tomar un puerto de la pc
app.set('port', process.env.PORT || 4000);

// quiero que mi backend escuche el puerto
app.listen(app.get('port'), () => {
    console.log(`Mi backend esta en el puerto ${app.get('port')}`);
})

// middlewares
detoenv.config();
app.use(morgan('dev')); //da informacion peticiones y respuestas en terminal
app.use(cors()); //permite recibir peticiones remotas
// los dos middlewares debajo sirven para procesar un objeto json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cargar un archivo estatico
app.use(express.static(path.join(__dirname,'public')));
// rutas
app.use('/apicafe', router);
app.use('/auth', auth);