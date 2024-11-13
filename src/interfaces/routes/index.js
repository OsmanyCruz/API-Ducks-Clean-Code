const express = require("express");
const DuckApiRepository = require("../../infrastructure/repositories/duckApiRepository");
const GetRandomDuck = require("../../usecases/getRandomDuckUseCase");
const GetDucksByNumber = require("../../usecases/getDucksByNumberUseCase");
const DuckController = require("../controllers/duckController");

const router = express.Router();

// Instancias
const duckRepository = new DuckApiRepository();
const getRandomDuck = new GetRandomDuck(duckRepository);
const getDucksByNumber = new GetDucksByNumber(duckRepository);
const duckController = new DuckController(getRandomDuck, getDucksByNumber);

// Rutas
router.get("/ducks/random", (req, res) => duckController.getRandomDuck(req, res));
router.get("/ducks/:number", (req, res) => duckController.getDucksByNumber(req, res));

module.exports = router;
