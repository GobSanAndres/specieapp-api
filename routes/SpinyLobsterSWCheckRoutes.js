const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { SpinyLobsterSWCheckCreate, SpinyLobsterSWCheckUpdate } = require("../schemas/SpinyLobsterSWCheckSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable, getReport } = require("../controllers/SpinyLobsterSWCheckController");

const router = Router();

router.post("/create", [validJWT, validator(SpinyLobsterSWCheckCreate)], create);

router.post("/update", [validJWT, validator(SpinyLobsterSWCheckUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

router.post("/report", [validJWT], getReport);

module.exports = router;