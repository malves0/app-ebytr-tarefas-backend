const { Tarefas } = require('../services');
const { SUCCESS_OK, SUCCESS_CREATED } = require('../utils/statusCode');

const create = (req, res, next) => {
  const { nome, listaId } = req.body;
  Tarefas.create({ nome, listaId})
    .then((tarefa) => res.status(SUCCESS_CREATED).json(tarefa))
    .catch((err) => next(err));
};

const update = (req, res, next) => {
  const { id } = req.params;
  const { nome, status } = req.body;
  Tarefas.update({ id, nome, status })
    .then((tarefa) => res.status(SUCCESS_OK).json(tarefa))
    .catch((err) => next(err));
};

const exclude = (req, res, next) => {
  const { id } = req.params;
  Tarefas.exclude(id)
    .then((tarefa) => res.status(SUCCESS_OK).json(tarefa))
    .catch((err) => next(err));
};

module.exports ={
  create,
  update,
  exclude,
}