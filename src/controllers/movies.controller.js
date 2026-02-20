const Movie = require("../models/Movie");

// Obtener todas las películas
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json({
      total_movies: await Movie.countDocuments(),
      results: movies
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Obtener una película por su ID
const getMovieByID = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res
        .status(404)
        .json("No se encuentra la película con el id especificado");
    }

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Crear una nueva película
const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Borrar una película
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json("Película a borrar no encontrada");
    }
    return res.status(200).json({
      message: `Película ${movie.title} borrada`,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Actualizar una película
const updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json("Película a actualizar no encontrada");
    }
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieByID,
  createMovie,
  deleteMovie,
  updateMovie,
};