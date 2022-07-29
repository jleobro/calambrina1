# Calambrina1

Este proyecto se desarrolló con [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0, y con una Fake API llamada Json-Server.

# Descargar Proyecto

## Fake API

Antes de ejecutar la Fake Api, descargar `Node.js` y `Json-Server`

Descargar Node.js: `nodejs.org`
Descargar Fake API: `npm install -g json-server`
Ejecutar `json-server --watch db.json` para levantar la Fake API, la ruta de acceso por defecto es `http://localhost:3000/`.

## Servidor Local

Ejecutar `npm install`
Ejecutar `ng serve` para levantar el servidor local, la ruta de acceso por defecto es `http://localhost:4200/`.

## Ingresar como Administrador

Administrador: 
"nombre": "calambrina1",
"contraseña": "12345"

## Ingresar como Empleado

Se requiere número de cédula como Usuario, la clave generada por defecto es el mismo número de cédula.

## Tareas Completadas
    -Modulo Administrador
        -Listar Empleados
        -Registar Empleado
        -Editar Empleado
        -Eliminar Empleado
        -Dar de alta al empleado(Genera usuario y contraseña)

    -Modulo Empleado
        -Visualizar mi información (del empleado y editar)