const connection = require('./connection');
const { ObjectId } = require('mongodb');

const create = async ({ nome, listaId }) => connection()
    .then((db) => db
      .collection('tarefas')
      .insertOne({ nome, listaId: ObjectId(listaId), status: 'pendente', dataDeCriacao: new Date() }))
    .then((result) => (result));
    
const update = async (data) => {
  const { id, nome, status } = data;
  const tarefaAtualizada = connection()
    .then((db) =>  db
      .collection('tarefas')
      .updateOne({ _id: ObjectId(id) }, { $set: { nome, status } }));

  if (tarefaAtualizada.modifiedCount) return { _id: id, nome, status};
  
  return null;
};

const exclude = async (id) => {
  const tarefaRemovida = connection()
    .then((db) => db.collection('tarefas').deleteOne({ _id: ObjectId(id) }));

  if (tarefaRemovida.modifiedCount) return {};

  return null
};

module.exports ={
  create,
  update,
  exclude,
}