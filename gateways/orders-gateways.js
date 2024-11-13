// Database sementara menggunakan array
let orders = []; // Array untuk menyimpan data pesanan sementara
let currentOrderId = 1; // Variabel untuk menghasilkan ID pesanan unik secara otomatis

// Menambahkan pesanan baru
module.exports.addOrder = (customer_name, product_id, quantity, total_price, status) => {
    const newOrder = {
        order_id: currentOrderId++, // ID unik untuk pesanan baru
        customer_name,
        product_id,
        quantity,
        total_price,
        status
    };
    orders.push(newOrder); // Menambahkan pesanan ke dalam array orders
    return newOrder; // Mengembalikan pesanan yang baru ditambahkan
};

// Mengambil semua pesanan
module.exports.getAllOrders = () => orders;

// Mengambil pesanan berdasarkan ID
module.exports.getOrderById = (id) => orders.find((order) => order.order_id === id);

// Mengupdate pesanan berdasarkan ID
module.exports.updateOrder = (id, customer_name, quantity, total_price, status) => {
    const order = orders.find((order) => order.order_id === id);
    if (order) {
        order.customer_name = customer_name || order.customer_name;
        order.quantity = quantity || order.quantity;
        order.total_price = total_price || order.total_price;
        order.status = status || order.status;
        return order; // Mengembalikan pesanan yang sudah diperbarui
    }
    return null; // Jika pesanan tidak ditemukan, mengembalikan null
};

// Menghapus pesanan berdasarkan ID
module.exports.deleteOrder = (id) => {
    const index = orders.findIndex((order) => order.order_id === id);
    if (index !== -1) {
        const deletedOrder = orders.splice(index, 1);
        return deletedOrder; // Mengembalikan pesanan yang dihapus
    }
    return null; // Jika pesanan tidak ditemukan
};
