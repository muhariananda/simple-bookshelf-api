const { addBookHandler, getAllBooksHanlder } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHanlder,
  },
];

module.exports = routes;
