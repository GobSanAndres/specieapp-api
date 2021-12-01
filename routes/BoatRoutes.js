const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { BoatCreate } = require("../schemas/BoatSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/BoatController");

const router = Router();

router.post("/create", [validJWT, validator(BoatCreate)], create);

// router.post("/update", [validJWT, validator(MenuUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;