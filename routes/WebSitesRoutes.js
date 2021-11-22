const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { WebSiteCreate, WebSiteUpdate } = require("../schemas/WebSiteSchema")
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/RolController");

const router = Router();

router.post("/create", [validJWT, validator(WebSiteCreate)], create);

router.post("/update", [validJWT, validator(WebSiteUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;