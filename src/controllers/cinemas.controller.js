const Cinema = require("../models/Cinema");

// Obtener todos los cines
const getAllCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json({
      total_cinemas: await Cinema.countDocuments(),
      results: cinemas
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Obtener un cine por su ID
const getCinemaByID = async (req, res) => {
  const { id } = req.params;
  try {
    const cinema = await Cinema.findById(id).populate("movies");
    if (!cinema) {
      return res
        .status(404)
        .json("No se encuentra el cine con el id especificado");
    }

    return res.status(200).json(cinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Crear un nuevo cine
const createCinema = async (req, res) => {
  try {
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Borrar un cine
const deleteCinema = async (req, res) => {
  const { id } = req.params;
  try {
    const cinema = await Cinema.findByIdAndDelete(id);
    if (!cinema) {
      return res.status(404).json("Cine a borrar no encontrado");
    }
    return res.status(200).json({
      message: `Cine ${cinema.name} borrado`,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Actualizar un cine
const updateCinema = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Cinema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json("Cine a actualizar no encontrado");
    }
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllCinemas,
  getCinemaByID,
  createCinema,
  deleteCinema,
  updateCinema,
};