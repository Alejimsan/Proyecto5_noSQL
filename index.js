const express = require("express");
const connectDB = require("./src/utils/db"); 
const movieRoutes = require("./src/routes/movie.routes");
const cinemaRoutes = require("./src/routes/cinema.routes"); // Importamos las nuevas rutas de cines

//Definimos el puerto
const PORT = 8080;

//Conectamos con la base de datos
connectDB();

//Creamos el servidor
const server = express();

//Tenemos que indicarle que vamos a trabajar con JSON (MIDDLEWARE)
server.use(express.json());

//Definimos las rutas que tenemos para películas
server.use("/api/movies", movieRoutes);

//Definimos las rutas que tenemos para cines
server.use("/api/cinemas", cinemaRoutes);

//Definimos el controlador de rutas no encontradas
server.use((req, res) => {
  return res.status(404).json({ message: "Route not found" });
});

//Definimos una ruta especial para errores básicos
server.use((err, req, res) => {
  console.log(err);
  return res.status(500).json({ message: "Internal Server Error" });
});

//Levantamos y escuchamos el servidor
server.listen(PORT, () => {
  console.log(`🛜  Servidor levantado en http://localhost:${PORT}`);
});