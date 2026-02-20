# Proyecto 5: Backend API con MongoDB & Mongoose

Este repositorio contiene la solución práctica al módulo de bases de datos NoSQL. El objetivo principal es construir la estructura backend necesaria para interactuar con una base de datos **MongoDB** utilizando **Node.js** y **Express**, implementando una arquitectura **MVC** (Modelo-Vista-Controlador), relaciones entre colecciones y controladores de rutas profesionales.

## Estructura del Proyecto

El proyecto está organizado de forma modular dentro de la carpeta `src` para separar las responsabilidades de la aplicación:

* **index.js**: Archivo principal de entrada situado en la raíz que inicia el servidor Express y coordina las rutas.
* **src/utils/db.js**: Módulo encargado de establecer y gestionar la conexión con la base de datos MongoDB mediante Mongoose.
* **src/models/**: Definición de los esquemas (Schemas) y modelos de datos:
    * `Movie.js`: Estructura para la colección de películas.
    * `Cinema.js`: Estructura para la colección de cines, con relación a películas.
* **src/controllers/**: Contiene la lógica de negocio para gestionar las peticiones (CRUD) y la comunicación con la base de datos.
* **src/routes/**: Definición de los endpoints de la API, separando las rutas de películas y cines.

## Instalación y Requisitos

Para ejecutar este proyecto, necesitas tener instalado lo siguiente en tu entorno local:
* **Entorno de ejecución**: Node.js.
* **Motor de Base de Datos**: MongoDB (Instancia local).
* **Dependencias principales**:
    * `express`: Framework para el servidor web.
    * `mongoose`: ODM para el modelado y conexión de datos.

## Componentes Implementados

El código incluido en este repositorio resuelve los siguientes planteamientos de arquitectura backend:

### Configuración de Base de Datos
* **Conexión robusta**: Implementación de una función asíncrona en `src/utils/db.js` que gestiona errores de conexión y confirmaciones de éxito mediante iconos visuales.

### Modelado de Datos y Relaciones
* **Modelo Movie**: Definición de la estructura de las películas (título, director, año, género) con validaciones requeridas.
* **Modelo Cinema**: Implementación de una relación **One-to-Many** mediante un array de `ObjectIds` que referencia a la colección de películas.

### Controladores y Lógica de Respuesta
* **CRUD Completo**: Implementación de métodos para crear, leer, actualizar y borrar documentos en ambas colecciones.
* **Uso de Populate**: Los controladores de cines utilizan `.populate('movies')` para resolver las referencias y devolver la información completa de las películas asociadas.
* **Gestión de Errores**: Middlewares específicos para capturar rutas no encontradas (404) y errores internos del servidor (500).

## Capturas de Pantalla y Funcionamiento

En la carpeta "screenshots" detallan las pruebas de funcionamiento de la API y la estructura de la base de datos:

* **Arranque y Conexión**: Verificación del servidor levantado en el puerto 8080 y conexión exitosa a MongoDB.
 
* **Gestión de Películas (CRUD)**: Pruebas de creación, listado, actualización y eliminación de películas.

* **Gestión de Cines**: Pruebas de creación de cines y el proceso de añadir películas a sus listados.

* **Relación y Populate**: Demostración de cómo se listan los cines mostrando la información completa de sus películas vinculadas.


## Cómo usar este repositorio

1. **Clona el repositorio** en tu máquina local.
2. **Abre la terminal** en la carpeta del proyecto.
3. **Instala las dependencias**:
   ```bash
   npm install
   
4. **Inicia el servidor en modo desarrollo**:
   ```bash
   npm run dev
5. **Prueba la API: Utiliza Postman para interactuar con los endpoints:**
* Películas: http://localhost:8080/api/movies
* Cines: http://localhost:8080/api/cinemas
   
