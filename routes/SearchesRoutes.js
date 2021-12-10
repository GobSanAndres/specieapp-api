const { Router } = require('express');

const { getSearch } = require('../controllers/SearchesController');

const router = Router();

router.get('/app/getdata', getSearch);

module.exports = router;