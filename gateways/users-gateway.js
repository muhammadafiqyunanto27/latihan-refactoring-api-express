// Database sementara menggunakan array
let users = []; // Array untuk menyimpan data pengguna sementara
let currentUserId = 1; // Variabel untuk menghasilkan ID pengguna secara otomatis

// Menambahkan pengguna baru
module.exports.addUser = (name, email, phone, role, status) => {
    const newUser = {
        user_id: currentUserId++, // ID unik untuk pengguna baru
        name,
        email,
        phone,
        role,
        status
    };
    users.push(newUser); // Menambahkan pengguna ke dalam array users
    return newUser; // Mengembalikan pengguna yang baru ditambahkan
};

// Mengambil semua pengguna
module.exports.getAllUsers = () => users;

// Mengambil pengguna berdasarkan ID
module.exports.getUserById = (id) => users.find((user) => user.user_id === id);

// Mengupdate pengguna berdasarkan ID
module.exports.updateUser = (id, name, email, phone, role, status) => {
    const user = users.find((user) => user.user_id === id);
    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        user.role = role || user.role;
        user.status = status || user.status;
        return user; // Mengembalikan pengguna yang sudah diperbarui
    }
    return null; // Jika pengguna tidak ditemukan, mengembalikan null
};

// Menghapus pengguna berdasarkan ID
module.exports.deleteUser = (id) => {
    const index = users.findIndex((user) => user.user_id === id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        return deletedUser; // Mengembalikan pengguna yang dihapus
    }
    return null; // Jika pengguna tidak ditemukan
};
