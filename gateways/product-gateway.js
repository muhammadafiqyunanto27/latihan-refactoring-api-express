// Database produk sementara (array)
let products = []; 
let currentId = 1; // ID unik untuk setiap produk

// Fungsi untuk mendapatkan semua produk
module.exports.getDataProducts = () => products;

// Fungsi untuk mendapatkan produk berdasarkan ID
module.exports.getDataProductById = (id) => products.find(p => p.product_id === id);

// Fungsi untuk menambahkan produk baru
module.exports.addDataNewProduct = (name, price, stock, description, category) => {
  const newProduct = {
    product_id: currentId++, // Menambahkan ID unik
    name, 
    price,
    stock,
    description,
    category,
  };
  products.push(newProduct); // Menambahkan produk ke array
  return newProduct; // Mengembalikan produk baru
};

// Fungsi untuk memperbarui produk berdasarkan ID
module.exports.updateDataProduct = (id, name, price, stock, description, category) => {
  const product = products.find(p => p.product_id === id);
  if (product) {
    product.name = name || product.name; // Perbarui nama jika ada
    product.price = price || product.price; // Perbarui harga jika ada
    product.stock = stock || product.stock; // Perbarui stok jika ada
    product.description = description || product.description; // Perbarui deskripsi jika ada
    product.category = category || product.category; // Perbarui kategori jika ada
    return product; // Mengembalikan produk yang diperbarui
  }
  return null; // Jika produk tidak ditemukan
};

// Fungsi untuk menghapus produk berdasarkan ID
module.exports.deleteDataProduct = (id) => {
  const index = products.findIndex(p => p.product_id === id);
  if (index !== -1) {
    return products.splice(index, 1); // Menghapus produk dan mengembalikannya
  }
  return null; // Jika produk tidak ditemukan
};
