const express = require('express');

const {connect} = require('./utils/db');

const Movie = require('./models/movie.model');

connect();

const PORT = 8080;
const server = express();
const router = express.Router();

// 1. Endpoint: Devolver todas las películas 
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// 2. Endpoint: Devolver película por _id 
router.get('/movies/id/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await Movie.findById(id);
    if (movie) {
      return res.status(200).json(movie);
    } else {
      return res.status(404).json('Pelicula no encontrada para este id');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// 3. Endpoint: Devolver película por título (Similar al alias del PDF) 
router.get('/movies/title/:title', async (req, res) => {
  const { title } = req.params;
  try {
    // Usamos find por si hay varias con el mismo título (remakes, etc.)
    const movieByTitle = await Movie.find({ title: title }); 
    return res.status(200).json(movieByTitle);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// 4. Endpoint: Devolver películas por género 
router.get('/movies/genre/:genre', async (req, res) => {
  const { genre } = req.params;
  try {
    const moviesByGenre = await Movie.find({ genre: genre });
    return res.status(200).json(moviesByGenre);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// 5. Endpoint: Películas a partir de 2010 ($gt significa "mayor que") 
// Nota: El PDF menciona req.params para capturar datos dinámicos.
router.get('/movies/year/:year', async (req, res) => {
  const { year } = req.params;
  try {
    // $gt es un operador de MongoDB para "Greater Than" 
    const moviesByYear = await Movie.find({ year: { $gt: year } });
    return res.status(200).json(moviesByYear);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Usamos el router y arrancamos el servidor 
server.use('/', router);

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});