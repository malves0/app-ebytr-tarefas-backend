const { Listas } = require('../services');
const { SUCCESS_OK } = require('../utils/statusCode');

const getAll = (_req, res, next) => {
  Listas.getAll()
    .then((listas) => res.status(SUCCESS_OK).json(listas))
    .catch((err) => next(err));
};

module.exports ={
  getAll,
}