import mongoose, {mongo, Schema} from "mongoose";

const usuarioSchema = new Schema({
    nombre:{
        type: 'String',
        maxlength : '15',
        required: true
    },
    email:{
        type: 'String',
        maxlength : '100',
        unique: true,
        required: true
    },
    contraseña:{
        type: 'String',
        required: true
    }
})

const Usuario = mongoose.model('usuario',usuarioSchema);

export default Usuario;