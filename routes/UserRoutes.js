const { Router } = require('express');

const { validator } = require("../middlewares/validator");
const { validJWT } = require("../middlewares/validarjwt");
const { UserSchema } = require("../schemas/UserSchema");
const { GenericDisable } = require("../schemas/GenericSchema");

const { create, update, list, disable } = require("../controllers/UserController");

const router = Router();

router.post("/create", [validator(UserSchema)] , create);

router.post("/update/:id",  [validator(UserSchema)], update);

router.post("/disable", [validator(GenericDisable)], disable);

router.get("/list",  [validJWT], list);

module.exports = router;