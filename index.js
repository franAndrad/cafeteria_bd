// const express = require('express');
import express from "express";

// instancia de express
const app = express();

// queremos tomar un puerto de la pc
app.set('port', process.env.PORT || 4000);

// quiero que mi backend escuche el puerto
app.listen(app.get('port'), ()=>{
    console.log(`Mi backend esta en el puerto ${app.get('port')}`);
})

// middleware

// rutas
app.get('/',(req, res)=>{
    res.send('primera peticion get');
});
app.get('/prueba',(req, res)=>{
    res.send('otra peticion get');
});