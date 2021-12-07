const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { getSearch } = require('../controllers/SearchesController');

const router = Router();

router.get('/collection/:table/:search', validJWT, getSearch);

module.exports = router;