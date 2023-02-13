const { nanoid } = require('nanoid');
const { success, error } = require('./response');
const books = require('./book');

const validateBookPayload = ({ name, readPage, pageCount }) => {
  if (!name) {
    return 'Gagal menambahkan buku. Mohon isi nama buku';
  }

  if (readPage > pageCount) {
    return 'Gagal menambah buku. readPage tidak boleh lebih besar dari pageCount';
  }

  return null;
};

const addBookHandler = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;

  const errorMessage = validateBookPayload(request.payload);

  if (errorMessage) {
    return h
      .response(error(errorMessage))
      .code(400);
  }

  const id = nanoid(16);
  const finished = readPage === pageCount;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    return h
      .response(success({ bookId: id }, 'Buku berhasil ditambahkan'))
      .code(201);
  }

  return h
    .response(error('Buku gagal ditambahkan'))
    .code(500);
};

const getAllBooksHandler = () => success({ books });

const getBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const book = books.filter((e) => e.id === id).at(0);

  if (book) {
    return success({ book });
  }

  return h
    .response(error('Catatan tidak ditemukan'))
    .code(404);
};

module.exports = { addBookHandler, getAllBooksHandler, getBookByIdHandler };
