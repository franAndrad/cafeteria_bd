import mongoose, {Schema} from "mongoose";

// {
//       "nombreProducto": "jugo de naranja",
//       "precio": "350",
//       "imagen": "https://images.pexels.com/photos/7491889/pexels-photo-7491889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "categoria": "bebida-fria",
// }

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true
    },
    imagen:{
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true,
        min: 0,
        max: 9999
    },
    categoria:{
        type: String,
        required: true,
        maxlength: 40
    }
});

const Producto = mongoose.model('producto', productoSchema)

export default Producto; 
// uso export default por que es una sola cosa que exporto