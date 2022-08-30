Crear una carpeta y poner el codigo
```
npm init -y
```
Crear un index js y hacer un console log con un hola
```
node index.js
```
Instalamos esto para poder usar import

```
npm i babel-cli babel-preset-env
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
    },
}
```
