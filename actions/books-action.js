// Mengimpor fungsi dari `books-gateway.js`
const {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
  } = require('../gateways/books-gateway');
  
  // CREATE - Menambahkan buku baru
  module.exports.createBookAction = (req, res) => {
    const { title, author, published_year, genre, status } = req.body; // Mendapatkan data buku dari body request
    const newBook = addBook(title, author, published_year, genre, status); // Menambahkan buku baru
    res.status(201).json({
      message: "Buku berhasil ditambahkan", // Pesan sukses
      book_id: newBook.book_id, // Menampilkan ID buku baru
    });
  };
  
  // READ - Menampilkan semua buku
  module.exports.getBooksAction = (req, res) => {
    res.json(getAllBooks()); // Mengirimkan semua buku dalam bentuk JSON
  };
  
  // READ by ID - Menampilkan buku berdasarkan ID
  module.exports.getBookByIdAction = (req, res) => {
    const book = getBookById(parseInt(req.params.book_id)); // Mendapatkan buku berdasarkan ID
    if (book) {
      res.json(book); // Mengirimkan buku jika ditemukan
    } else {
      res.status(404).json({ message: "Buku tidak ditemukan" }); // Menampilkan pesan error jika buku tidak ditemukan
    }
  };
  
  // UPDATE - Memperbarui buku berdasarkan ID
  module.exports.updateBookAction = (req, res) => {
    const bookId = parseInt(req.params.book_id); // Mengambil ID dari parameter
    const { title, author, published_year, genre, status } = req.body; // Mendapatkan data dari body request
    const updatedBook = updateBook(bookId, title, author, published_year, genre, status); // Memperbarui buku
    if (updatedBook) {
      res.json({
        message: "Buku berhasil diperbarui", // Pesan sukses
        book_id: updatedBook.book_id, // Menampilkan ID buku yang diperbarui
      });
    } else {
      res.status(404).json({ message: "Buku tidak ditemukan" }); // Menampilkan pesan error jika buku tidak ditemukan
    }
  };
  
  // DELETE - Menghapus buku berdasarkan ID
  module.exports.deleteBookAction = (req, res) => {
    const bookId = parseInt(req.params.book_id); // Mengambil ID dari parameter
    const deletedBook = deleteBook(bookId); // Menghapus buku berdasarkan ID
    if (deletedBook) {
      res.json({
        message: "Buku berhasil dihapus", // Pesan sukses
        book_id: deletedBook[0].book_id, // Menampilkan ID buku yang dihapus
      });
    } else {
      res.status(404).json({ message: "Buku tidak ditemukan" }); // Menampilkan pesan error jika buku tidak ditemukan
    }
  };
  