const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");

const { getData } = require("../controllers/GenericController");

const router = Router();

router.get("/list", [validJWT], getData);

module.exports = router;