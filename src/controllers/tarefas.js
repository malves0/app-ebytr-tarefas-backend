const { Tarefas } = require('../services');
const { SUCCESS_OK } = require('../utils/statusCode');

const create = (req, res, next) => {
  const { nome, listaId } = req.body;
  Tarefas.create({ nome, listaId})
    .then((tarefa) => res.status(SUCCESS_OK).json(tarefa))
    .catch((err) => next(err));
};

module.exports ={
  create,
}