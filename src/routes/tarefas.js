const router = require('express').Router();
const { Tarefas } = require('../controllers');

router
  .post('/', Tarefas.create)
  .put('/:id', Tarefas.update);

module.exports = router;