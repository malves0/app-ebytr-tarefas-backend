const router = require('express').Router();

const listas = require('./listas');
const tarefas = require('./tarefas');

router.use('/listas', listas);
router.use('/tarefas', tarefas);

module.exports = router;