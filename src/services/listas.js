const { Listas } = require('../models');

const getAll = () => {
  const listas = Listas.getAll()
  return listas;
}

module.exports = {
  getAll,
};