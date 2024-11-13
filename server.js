const express = require('express'); // Mengimpor Express
const {
  getProductsAction,
  getProductByIdAction,
  createNewProductAction,
  updateProductAction,
  deleteProductAction,
} = require('./actions/product-action'); // Mengimpor handler action

const {
  createBookAction,
  getBooksAction,
  getBookByIdAction,
  updateBookAction,
  deleteBookAction,
} = require('./actions/books-action'); // Mengimpor handler action

const {
  createEmployeeAction,
  getEmployeesAction,
  getEmployeeByIdAction,
  updateEmployeeAction,
  deleteEmployeeAction,
} = require('./actions/employees-action'); // Mengimpor handler action

const {
  createUserAction,
  getUsersAction,
  getUserByIdAction,
  updateUserAction,
  deleteUserAction,
} = require('./actions/users-action'); // Mengimpor handler action

const {
  createOrderAction,
  getOrdersAction,
  getOrderByIdAction,
  updateOrderAction,
  deleteOrderAction,
} = require('./actions/orders-action'); // Mengimpor handler action


const app = express(); // Membuat instance Express

app.use(express.json()); // Middleware untuk mengurai body JSON


// Product
// Menentukan route untuk semua produk
app.get('/api/products', getProductsAction);
// Menentukan route untuk produk berdasarkan ID
app.get('/api/products/:id', getProductByIdAction);
// Menentukan route untuk menambahkan produk baru
app.post('/api/products', createNewProductAction);
// Menentukan route untuk memperbarui produk berdasarkan ID
app.put('/api/products/:id', updateProductAction);
// Menentukan route untuk menghapus produk berdasarkan ID
app.delete('/api/products/:id', deleteProductAction);


// Books
// Menentukan route untuk menambahkan buku
app.post('/api/books', createBookAction);
// Menentukan route untuk mendapatkan semua buku
app.get('/api/books', getBooksAction);
// Menentukan route untuk mendapatkan buku berdasarkan ID
app.get('/api/books/:book_id', getBookByIdAction);
// Menentukan route untuk memperbarui buku berdasarkan ID
app.put('/api/books/:book_id', updateBookAction);
// Menentukan route untuk menghapus buku berdasarkan ID
app.delete('/api/books/:book_id', deleteBookAction);


// Employees
// Menentukan route untuk menambahkan karyawan
app.post('/api/employees', createEmployeeAction);
// Menentukan route untuk mendapatkan semua karyawan
app.get('/api/employees', getEmployeesAction);
// Menentukan route untuk mendapatkan karyawan berdasarkan ID
app.get('/api/employees/:employee_id', getEmployeeByIdAction);
// Menentukan route untuk memperbarui karyawan berdasarkan ID
app.put('/api/employees/:employee_id', updateEmployeeAction);
// Menentukan route untuk menghapus karyawan berdasarkan ID
app.delete('/api/employees/:employee_id', deleteEmployeeAction);


// Users
// Menentukan route untuk menambahkan pengguna
app.post('/api/users', createUserAction);
// Menentukan route untuk mendapatkan semua pengguna
app.get('/api/users', getUsersAction);
// Menentukan route untuk mendapatkan pengguna berdasarkan ID
app.get('/api/users/:user_id', getUserByIdAction);
// Menentukan route untuk memperbarui pengguna berdasarkan ID
app.put('/api/users/:user_id', updateUserAction);
// Menentukan route untuk menghapus pengguna berdasarkan ID
app.delete('/api/users/:user_id', deleteUserAction);


// Orders
// Menentukan route untuk menambahkan pesanan
app.post('/api/orders', createOrderAction);
// Menentukan route untuk mendapatkan semua pesanan
app.get('/api/orders', getOrdersAction);
// Menentukan route untuk mendapatkan pesanan berdasarkan ID
app.get('/api/orders/:order_id', getOrderByIdAction);
// Menentukan route untuk memperbarui pesanan berdasarkan ID
app.put('/api/orders/:order_id', updateOrderAction);
// Menentukan route untuk menghapus pesanan berdasarkan ID
app.delete('/api/orders/:order_id', deleteOrderAction);


// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
