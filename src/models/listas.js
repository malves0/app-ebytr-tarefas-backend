const connection = require('./connection');

const pipeline = [
  {
    $lookup: {
      from: 'tarefas',
      localField: '_id',
      foreignField: 'listaId',
      as: 'listasDeTarefas'
    }
  }];

const getAll = async () => connection()
    .then((db) => db.collection('listas').aggregate(pipeline).toArray());


module.exports = {
  getAll,
};