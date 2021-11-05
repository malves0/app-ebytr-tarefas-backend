const router = require('express').Router();
const { Tarefas } = require('../controllers');

router
  .post('/', Tarefas.getById);

module.exports = router;