const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { ItemOperationCreate, ItemOperationUpdate } = require("../schemas/ItemOperationSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/ItemOperationController");

const router = Router();

router.post("/create", [validJWT, validator(ItemOperationCreate)], create);

router.post("/update", [validJWT, validator(ItemOperationUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;