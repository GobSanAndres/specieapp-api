const { Router } = require('express');

const { create, update, getAll, disable } = require("../controllers/RolController");

const router = Router();

router.post("/create", create);

router.post("/update", update);

router.post("/disable", disable);

router.get("/list", getAll);

module.exports = router;