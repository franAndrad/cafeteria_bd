// const express = require('express');
import express from "express";
import morgan from "morgan";
import cors from "cors"
import "./src/database"

// instancia de express
const app = express();

// queremos tomar un puerto de la pc
app.set('port', process.env.PORT || 4000);

// quiero que mi backend escuche el puerto
app.listen(app.get('port'), ()=>{
    console.log(`Mi backend esta en el puerto ${app.get('port')}`);
})

// middlewares
app.use(morgan('dev')); //da informacion peticiones y respuestas en terminal
app.use(cors()); //permite recibir peticiones remotas
// los dos middlewares debajo sirven para procesar un objeto json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// cargar un archivo estatico
app.use(express.static("./public"));

// rutas
app.get('/',(req, res)=>{
    res.send('primera peticion get');
});
app.get('/prueba',(req, res)=>{
    res.send('otra peticion get');
});