const router = require('express').Router();
const { Listas } = require('../controllers');

router
  .get('/', Listas.getAll);

module.exports = router;