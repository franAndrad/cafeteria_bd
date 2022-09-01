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
    "dev": "nodemon --exxec babel-node"
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