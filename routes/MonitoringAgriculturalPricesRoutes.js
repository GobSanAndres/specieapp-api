const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { MonitoringAgriculturalPricesCreate, MonitoringAgriculturalPricesUpdate } = require("../schemas/MonitoringAgriculturalPricesSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/MonitoringAgriculturalPricesController");

const router = Router();

router.post("/create", [validJWT, validator(MonitoringAgriculturalPricesCreate)], create);

router.post("/update", [validJWT, validator(MonitoringAgriculturalPricesUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;