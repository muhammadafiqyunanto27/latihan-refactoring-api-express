// Mengimpor fungsi dari `users-gateway.js`
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
  } = require('../gateways/users-gateway');
  
  // CREATE - Menambahkan pengguna baru
  module.exports.createUserAction = (req, res) => {
    const { name, email, phone, role, status } = req.body; // Mendapatkan data pengguna dari body request
    const newUser = addUser(name, email, phone, role, status); // Menambahkan pengguna baru
    res.status(201).json({
      message: "Pengguna berhasil ditambahkan", // Pesan sukses
      user_id: newUser.user_id, // Menampilkan ID pengguna baru
    });
  };
  
  // READ - Menampilkan semua pengguna
  module.exports.getUsersAction = (req, res) => {
    res.json(getAllUsers()); // Mengirimkan semua pengguna dalam bentuk JSON
  };
  
  // READ by ID - Menampilkan pengguna berdasarkan ID
  module.exports.getUserByIdAction = (req, res) => {
    const user = getUserById(parseInt(req.params.user_id)); // Mendapatkan pengguna berdasarkan ID
    if (user) {
      res.json(user); // Mengirimkan pengguna jika ditemukan
    } else {
      res.status(404).json({ message: "Pengguna tidak ditemukan" }); // Menampilkan pesan error jika pengguna tidak ditemukan
    }
  };
  
  // UPDATE - Memperbarui pengguna berdasarkan ID
  module.exports.updateUserAction = (req, res) => {
    const userId = parseInt(req.params.user_id); // Mengambil ID dari parameter
    const { name, email, phone, role, status } = req.body; // Mendapatkan data dari body request
    const updatedUser = updateUser(userId, name, email, phone, role, status); // Memperbarui pengguna
    if (updatedUser) {
      res.json({
        message: "Pengguna berhasil diperbarui", // Pesan sukses
        user_id: updatedUser.user_id, // Menampilkan ID pengguna yang diperbarui
      });
    } else {
      res.status(404).json({ message: "Pengguna tidak ditemukan" }); // Menampilkan pesan error jika pengguna tidak ditemukan
    }
  };
  
  // DELETE - Menghapus pengguna berdasarkan ID
  module.exports.deleteUserAction = (req, res) => {
    const userId = parseInt(req.params.user_id); // Mengambil ID dari parameter
    const deletedUser = deleteUser(userId); // Menghapus pengguna berdasarkan ID
    if (deletedUser) {
      res.json({
        message: "Pengguna berhasil dihapus", // Pesan sukses
        user_id: deletedUser[0].user_id, // Menampilkan ID pengguna yang dihapus
      });
    } else {
      res.status(404).json({ message: "Pengguna tidak ditemukan" }); // Menampilkan pesan error jika pengguna tidak ditemukan
    }
  };
  