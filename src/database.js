import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/cafeteria';

mongoose.connect(url);

const connection = mongoose.connection;

// cuando se establecio la coneccion quiero ejecutar
connection.once('open',()=>{
    console.log('base de datos conectada');
})