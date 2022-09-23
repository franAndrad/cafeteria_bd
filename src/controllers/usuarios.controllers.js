import Usuario from "../models/usuario"
import bcrypt from "bcryptjs";
import generarJWT from "../helpers/jwt";

export const login = async (req,res) =>{
    try {
        const { nombre, email, password } = req.body

        // verificar si existe un mail como el recibido
        let usuario = await Usuario.findOne({ email }) //devuelve un null si no encuentra

        if (!usuario) {
            return res.status(400).json({
                mensaje: 'Correo o password invalido'
            })
        }

        // confirmar si el password es valido
        const passwordValido = bcrypt.compareSync(password, usuario.password);
        console.log(passwordValido)

        if(!passwordValido){
            return res.status(400).json({
                mensaje: 'Correo o password invalido'
            })
        }
        res.status(200).json({
            mensaje: 'El usuario si existe',
            uid: usuario._id,
            nombre: usuario.nombre,
        })

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
        
        
        // guardamos el nuevo usuario en la BD
        usuario = new Usuario(req.body);

        // encriptar password
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password,salt);
        
        // generar token
        const token = generarJWT(usuario._id,usuario.nombre);
               
        await usuario.save();
        res.status(201).json({
            mensaje: 'usuario creado',
            nombre: usuario.nombre,
            uid : usuario._id,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'no se creo el usuario'
        })
    }
}