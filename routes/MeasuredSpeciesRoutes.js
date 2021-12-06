const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { MeasuredSpeciesCreate, MeasuredSpeciesUpdate } = require("../schemas/MeasuredSpeciesSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/MeasuredSpeciesController");

const router = Router();

router.post("/create", [validJWT, validator(MeasuredSpeciesCreate)], create);

router.post("/update", [validJWT, validator(MeasuredSpeciesUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;