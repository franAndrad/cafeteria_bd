## Instalaciones

Crear una carpeta y poner el codigo
```
$ npm init -y
```
Crear un index js y hacer un console log con un hola
```
$ node index.js
```
Instalamos express
```
$ npm install express --save
```
Instalamos esto para poder usar import
$ npm i babel-cli babel-preset-env
```
Creamos un archivo con el nombre .babelrc
```
{
    "presets": ["env"] 
}
```
Luego en el script modificamos en el package.json el start
```
{
    "scripts": {
    "start": "babel-node index.js"
    }
}
```
Para que espere peticiones lo hacemos con express, creamos en index.js

```
import express from "express"

const app = express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log(`Estamos en el puerto ${app.get('port')}`);
})
```
Para que se atcualice cuando modificamos codigo hacemos, solo se instala una vez. Si ya lo posee, no lo vuelva a ejecutar
```
$ npm install -g nodemon
```
Agregamos al script
```
 "scripts": {
    "start": "babel-node index.js",
    "dev": "nodemon --exec babel-node index.js"
  }
```

## Middlewares

Morgan nos da informacion en la terminal de las peticiones y respuestas
```
$ npm i morgan
```
Cors muestra peticiones externas, no locales
```
$ npm i cors
```


## Intermediario entre js y mongo
```
$ npm install mongoose --save
```

Despues de que todo funcione bien para hacer validaciones usamos

##Validaciones
```
$ npm install --save express-validator
```
lo usamos de forma
```
import { check } from 'express-validator';

router
    .route('/productos')
    .get(listarProductos)
    .post([check],crearProducto);   <---

```

#Cargar la bd en vercel

Para vercel agregamos un archivo de configuracion vercel.json
```
{
    "version":2,
    "builds":[
        {
            "src":"./index.js",
            "use":"@vercel/node"
        }
    ],
    "routes":[
        {
            "src":"/(.*)",
            "dest": "/"
        }
    ]
}
```

tambien agregamos en el package.json debajo de main
```
  "engines": {"node": "16.x"},
```

#Variables de entorno

Instalamos el paquete
```
npm install dotenv
```
creamos el documento .env

importamos env donde lo tengamos que usar
```
require('dotenv').config()
```