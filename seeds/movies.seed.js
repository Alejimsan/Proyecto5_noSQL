const mongoose = require('mongoose');
const Movie = require('../models/movie.model'); // Importamos el modelo

// Datos en un array de objetos
const movies = [
  { title: 'The Matrix', director: 'Hermanas Wachowski', year: 1999, genre: 'Acción' },
  { title: 'The Matrix Reloaded', director: 'Hermanas Wachowski', year: 2003, genre: 'Acción' },
  { title: 'Buscando a Nemo', director: 'Andrew Stanton', year: 2003, genre: 'Animación' },
  { title: 'Buscando a Dory', director: 'Andrew Stanton', year: 2016, genre: 'Animación' },
  { title: 'Interestelar', director: 'Christopher Nolan', year: 2014, genre: 'Ciencia ficción' },
  { title: '50 primeras citas', director: 'Peter Segal', year: 2004, genre: 'Comedia romántica' },
];

// Convertimos los objetos en documentos de Mongoose
const movieDocuments = movies.map(movie => new Movie(movie));

mongoose
  .connect('mongodb://localhost:27017/Proyecto5_noSQL')
  .then(async () => {
    // Buscamos si hay películas previas y limpiamos la colección 
    const allMovies = await Movie.find();
    if (allMovies.length) {
      await Movie.collection.drop();
    }
  })
  .catch((error) => console.log(`Error al eliminar los datos: ${error}`))
  .then(async () => {
    // Insertamos las nuevas películas 
    await Movie.insertMany(movieDocuments);
    console.log('Base de datos creada');
  })
  .catch((error) => console.log(`Error al añadir datos: ${error}`))
  .finally(() => mongoose.disconnect()); // Nos desconectamos al terminar