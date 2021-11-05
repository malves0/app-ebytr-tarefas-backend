const { Tarefas } = require('../models');

const create = (data) => Tarefas.create(data).then((res) => res);

const update = (data) => Tarefas.update(data).then((res) => res);

const exclude = (id) => Tarefas.exclude(id).then((res) => res);

module.exports ={
  create,
  update,
  exclude,
}