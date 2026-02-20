const express = require("express");

const {
  getAllCinemas,
  getCinemaByID,
  createCinema,
  deleteCinema,
  updateCinema,
} = require("../controllers/cinemas.controller");

const router = express.Router();

// Especificamos las rutas que disparan los controladores
router.get("/", getAllCinemas);
router.get("/:id", getCinemaByID);
router.post("/", createCinema);
router.delete("/:id", deleteCinema);
router.put("/:id", updateCinema);

module.exports = router;