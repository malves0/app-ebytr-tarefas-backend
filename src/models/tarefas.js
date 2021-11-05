const connection = require('./connection');

const create = ({ nome, listaId }) => connection()
    .then((db) => db.collection('tarefas').insertOne({ nome, listaId}))
    .then((result) => ({ tarefa: { nome, listaId, _id: result.insertedId}}));

module.exports = {
  create,
};