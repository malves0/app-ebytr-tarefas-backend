const { Tarefas } = require('../models');

const create = (data) => Tarefas.create(data).then((res) => res);

module.exports = {
  create,
};