import jwt from "jsonwebtoken";

const generarJWT = (uid,nombre) =>{
    // para hacer el token trabajamos con promesas que son como objetos
    return new Promise( (resolve, reject)=>{
        //agregar los datos
        const payload = {uid,nombre};
        // aqui firmamos el token
        jwt.sign(payload,process.env.SECRET_JWT,{ 
            expiresIn: '3h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token')
            }
              // si esta todo correcto
            resolve(token);
        })
    })
}

export default generarJWT