const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { FishingZoneCreate, FishingZoneUpdate } = require("../schemas/FishingZoneSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/FishingZoneController");

const router = Router();

router.post("/create", [validJWT, validator(FishingZoneCreate)], create);

router.post("/update", [validJWT, validator(FishingZoneUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;