import Usuario from "../models/usuario"

export const login = (req,res) =>{
    res.send('usuario logueado...')
}

export const crearUsuario = async (req,res)=>{
    try {
        const {nombre,email,contraseña} = req.body

        // verificar si el mail ya existe
        let usuario = await Usuario.findOne({email}) //devuelve un null si no encuentra

        if(usuario){
            return res.status(400).json({
                mensaje: 'ya existe un usuario con el correo enviado'
            })
        }
        // encriptar contraseña
        // generar token
        // guardamos el nuevo usuario en la BD
        usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json({
            mensaje: 'usuario creado',
            nombre: usuario.nombre,
            uid : usuario._id
        })
    } catch (error) {
        console.log(error);

    }
}