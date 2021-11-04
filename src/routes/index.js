const router = require('express').Router();

const listas = require('./listas');

router.use('/listas', listas);

module.exports = router;