const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validTokenApp } = require("../middlewares/validTokenApp");

const { getData, saveData } = require("../controllers/GenericController");
const { getSearch } = require('../controllers/SearchesController');

const router = Router();

router.get("/list", [validJWT], getData);

router.post("/app/create", [validTokenApp], saveData);

router.get('/app/getdata', [validTokenApp], getSearch);

module.exports = router;