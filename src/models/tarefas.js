const connection = require('./connection');

const create = ({ nome, listaId }) => connection()
    .then((db) => 
      db
        .collection('tarefas')
        .insertOne({ nome, listaId, status: 'pendente', dataDeCriacao: new Date() }))
    .then((result) => (result));

module.exports = {
  create,
};