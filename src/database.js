import mongoose from "mongoose";
 require('dotenv').config()

// const url = 'mongodb://localhost:27017/cafeteria'; // base de dato local
const url = process.env.SERVIDOR // base de dato en la nube

mongoose.connect(url);

const connection = mongoose.connection;

// cuando se establecio la coneccion quiero ejecutar
connection.once('open', () => {
    console.log('base de datos conectada');
})

// const connectDB = async () => {
//     try {
//         await mongoose.connect(url);
//         console.log('BD conectada')
//     } catch (error) {
//         console.log(error);
//     }
// }

// connectDB();

// const connection = mongoose.connection;

// // cuando se establecio la coneccion quiero ejecutar
// connection.once('open', () => {
//     console.log('base de datos conectada');
// })