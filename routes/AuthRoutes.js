const { Router } = require("express");

const { Auth } = require("../controllers/AuthController");

const router = Router();

router.post("/login", Auth);

module.exports = router;