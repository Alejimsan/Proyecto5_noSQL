const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definimos el esquema de las películas
const movieSchema = new Schema(
  {
    title: {type: String, required: true},
    director: {type: String, required: true},
    year: {type: Number, required: false},
    genre: {type: String, required: true},
  },
  {
    timestamps: true, // Añadimos createdAt y updatedAt
    versionKey: false, // Quitar la propeidad de la versión
  }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;