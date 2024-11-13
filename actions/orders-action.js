// Mengimpor fungsi dari `orders-gateway.js`
const {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder,
  } = require('../gateways/orders-gateways');
  
  // CREATE - Menambahkan pesanan baru
  module.exports.createOrderAction = (req, res) => {
    const { customer_name, product_id, quantity, total_price, status } = req.body;
    const newOrder = addOrder(customer_name, product_id, quantity, total_price, status);
    res.status(201).json({
      message: "Pesanan berhasil ditambahkan",
      order_id: newOrder.order_id,
    });
  };
  
  // READ - Menampilkan semua pesanan
  module.exports.getOrdersAction = (req, res) => {
    res.json(getAllOrders()); // Mengirimkan semua pesanan dalam bentuk JSON
  };
  
  // READ by ID - Menampilkan pesanan berdasarkan ID
  module.exports.getOrderByIdAction = (req, res) => {
    const order = getOrderById(parseInt(req.params.order_id)); // Mendapatkan pesanan berdasarkan ID
    if (order) {
      res.json(order); // Mengirimkan pesanan jika ditemukan
    } else {
      res.status(404).json({ message: "Pesanan tidak ditemukan" }); // Mengirim pesan error jika tidak ditemukan
    }
  };
  
  // UPDATE - Memperbarui pesanan berdasarkan ID
  module.exports.updateOrderAction = (req, res) => {
    const orderId = parseInt(req.params.order_id);
    const { customer_name, quantity, total_price, status } = req.body;
    const updatedOrder = updateOrder(orderId, customer_name, quantity, total_price, status);
    if (updatedOrder) {
      res.json({
        message: "Pesanan berhasil diperbarui",
        order_id: updatedOrder.order_id,
      });
    } else {
      res.status(404).json({ message: "Pesanan tidak ditemukan" });
    }
  };
  
  // DELETE - Menghapus pesanan berdasarkan ID
  module.exports.deleteOrderAction = (req, res) => {
    const orderId = parseInt(req.params.order_id);
    const deletedOrder = deleteOrder(orderId);
    if (deletedOrder) {
      res.json({
        message: "Pesanan berhasil dihapus",
        order_id: deletedOrder[0].order_id,
      });
    } else {
      res.status(404).json({ message: "Pesanan tidak ditemukan" });
    }
  };
  