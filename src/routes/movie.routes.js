const express = require("express");

const {
  getAllMovies,
  getMovieByID,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("../controllers/movies.controller");

const router = express.Router();

// Especificamos las rutas que disparan los controladores
router.get("/", getAllMovies);
router.get("/:id", getMovieByID);
router.post("/", createMovie);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);

module.exports = router;