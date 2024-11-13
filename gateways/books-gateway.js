// Database sementara menggunakan array
let books = []; // Array untuk menyimpan data buku sementara
let currentBookId = 1; // Variabel untuk menghasilkan ID buku secara otomatis

// Menambahkan buku baru
module.exports.addBook = (title, author, published_year, genre, status) => {
    const newBook = {
        book_id: currentBookId++, // ID unik untuk buku baru
        title,
        author,
        published_year,
        genre,
        status,
    };
    books.push(newBook); // Menambahkan buku ke dalam array books
    return newBook; // Mengembalikan buku yang baru ditambahkan
};

// Mengambil semua buku
module.exports.getAllBooks = () => books;

// Mengambil buku berdasarkan ID
module.exports.getBookById = (id) => books.find((book) => book.book_id === id);

// Mengupdate buku berdasarkan ID
module.exports.updateBook = (id, title, author, published_year, genre, status) => {
    const book = books.find((book) => book.book_id === id);
    if (book) {
        book.title = title || book.title;
        book.author = author || book.author;
        book.published_year = published_year || book.published_year;
        book.genre = genre || book.genre;
        book.status = status || book.status;
        return book; // Mengembalikan buku yang sudah diperbarui
    }
    return null; // Jika buku tidak ditemukan, mengembalikan null
};

// Menghapus buku berdasarkan ID
module.exports.deleteBook = (id) => {
    const index = books.findIndex((book) => book.book_id === id);
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        return deletedBook; // Mengembalikan buku yang dihapus
    }
    return null; // Jika buku tidak ditemukan
};
