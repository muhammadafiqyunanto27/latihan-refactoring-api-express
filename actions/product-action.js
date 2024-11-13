// Mengimpor fungsi-fungsi dari `products-gateway.js`
const {
  getDataProducts,
  getDataProductById,
  addDataNewProduct,
  updateDataProduct,
  deleteDataProduct,
} = require('../gateways/product-gateway');

// Fungsi untuk mendapatkan semua produk
module.exports.getProductsAction = (req, res) => {
  res.json(getDataProducts()); // Mengirimkan semua produk dalam format JSON
};

// Fungsi untuk mendapatkan produk berdasarkan ID
module.exports.getProductByIdAction = (req, res) => {
  const product = getDataProductById(parseInt(req.params.id)); // Mengambil produk berdasarkan ID
  if (product) {
    res.json(product); // Mengirimkan produk yang ditemukan
  } else {
    res.status(404).send('Produk tidak ditemukan'); // Jika tidak ditemukan, kirim error
  }
};

// Fungsi untuk menambahkan produk baru
module.exports.createNewProductAction = (req, res) => {
  const { name, price, stock, description, category } = req.body; // Mengambil data produk dari body request
  const newProduct = addDataNewProduct(name, price, stock, description, category); // Menambahkan produk baru
  res.status(201).json({
    message: "Produk berhasil ditambahkan", // Pesan sukses
    product_id: newProduct.product_id, // Menampilkan product_id dari produk yang baru ditambahkan
  });
};

// Fungsi untuk memperbarui produk berdasarkan ID
module.exports.updateProductAction = (req, res) => {
  const { name, price, stock, description, category } = req.body; // Mengambil data baru dari body request
  const updatedProduct = updateDataProduct(parseInt(req.params.id), name, price, stock, description, category); // Memperbarui produk
  if (updatedProduct) {
    res.json({
      message: "Produk berhasil diperbarui", // Pesan sukses
      product_id: updatedProduct.product_id, // Menampilkan product_id dari produk yang diperbarui
    });
  } else {
    res.status(404).send('Produk tidak ditemukan'); // Jika produk tidak ditemukan, kirim error
  }
};

// Fungsi untuk menghapus produk berdasarkan ID
module.exports.deleteProductAction = (req, res) => {
  const deletedProduct = deleteDataProduct(parseInt(req.params.id)); // Menghapus produk berdasarkan ID
  if (deletedProduct) {
    res.json({
      message: "Produk berhasil dihapus", // Pesan sukses
      product_id: deletedProduct[0].product_id, // Menampilkan product_id dari produk yang dihapus
    });
  } else {
    res.status(404).send('Produk tidak ditemukan'); // Jika produk tidak ditemukan, kirim error
  }
};
