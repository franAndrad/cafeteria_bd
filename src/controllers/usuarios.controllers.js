import Usuario from "../models/usuario"
import bcrypt from "bcryptjs";

export const login = (req,res) =>{
    try {
        // verificar si existe un mail como el recibido
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'usuario o password invalido'
        })
    }
}

export const crearUsuario = async (req,res)=>{
    try {
        const {nombre,email,password} = req.body

        // verificar si el mail ya existe
        let usuario = await Usuario.findOne({email}) //devuelve un null si no encuentra

        if(usuario){
            return res.status(400).json({
                mensaje: 'ya existe un usuario con el correo enviado'
            })
        }
        
        // generar token
        // guardamos el nuevo usuario en la BD
        // encriptar password
        
        usuario = new Usuario(req.body);
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password,salt);
        await usuario.save();

        res.status(201).json({
            mensaje: 'usuario creado',
            nombre: usuario.nombre,
            uid : usuario._id
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'no se creo el usuario'
        })
    }
}