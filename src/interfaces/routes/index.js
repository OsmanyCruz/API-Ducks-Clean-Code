const express = require("express");
const DuckApiRepository = require("../../infrastructure/repositories/duckApiRepository");
const GetRandomDuck = require("../../usecases/getRandomDuck");
const GetDucksByNumber = require("../../usecases/getDucksByNumber");
const DuckController = require("../controllers/duckController");

const router = express.Router();

// Instancias
const duckRepository = new DuckApiRepository();
const getRandomDuck = new GetRandomDuck(duckRepository);
const getDucksByNumber = new GetDucksByNumber(duckRepository);
const duckController = new DuckController(getRandomDuck, getDucksByNumber);

// Rutas
router.get("/random-duck", (req, res) => duckController.getRandomDuck(req, res));
router.get("/ducks/:number", (req, res) => duckController.getDucksByNumber(req, res));

module.exports = router;
