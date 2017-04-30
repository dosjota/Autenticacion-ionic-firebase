# Autenticación con Ionic v2 + Firebase

### Permite

  - Autenticación con email y contraseña
  - Creacion de una nueva cuenta
  - Reestablecer la contraseña
 
### Descarga Repositorio
git clone https://github.com/dosjota/ionic-firebase-login.git

### Instalación

Requiere [Node.js](https://nodejs.org/) v5+

Instalar dependencias y ejecutar la aplicación

```sh
$ cd dillinger
$ npm install
$ ionic serve -l
```


#### Usar tus propias Credenciales Firebase

- Ir a [Google Firebase][firebase]
- crear un nuevo proyecto
- ingresar a "Agregar Firebase a tu app web" y copiar las credenciales
 y debes ingresarlas en "src/app/app.module.ts"
```
const configFirebase = {
 apiKey: "<tu-apiKey>",
  authDomain: "<tu-authDomain>",
  databaseURL: "<tu-databaseURL>",
  storageBucket: "<tu-storageBucket>"
}
```
Configurar Metodo de Acceso en la [Consola de Firebase][firebase]
Autenticacion -> Metodo de Acceso -> Correo electronico/Contraseña -> Habilitar

[//]: # (link referenciales - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [git-repo-url]: <https://github.com/dosjota/ionic-firebase-login.git>
   [node.js]: <http://nodejs.org>
   [firebase]: <https://console.firebase.google.com/>


:wink: :+1:
