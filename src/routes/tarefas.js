const router = require('express').Router();
const { Tarefas } = require('../controllers');

router
  .post('/', Tarefas.create);

module.exports = router;