const { Router } = require('express');

const { create, update, list, disable } = require("../controllers/UserController");

const router = Router();

router.post("/create", create);

router.post("/update/:id", update);

router.post("/disable", disable);

router.get("/list", list);

module.exports = router;