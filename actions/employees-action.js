// Mengimpor fungsi dari `employees-gateway.js`
const {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  } = require('../gateways/employees-gateway');
  
  // CREATE - Menambahkan karyawan baru
  module.exports.createEmployeeAction = (req, res) => {
    const { name, position, department, salary } = req.body; // Mendapatkan data karyawan dari body request
    const newEmployee = addEmployee(name, position, department, salary); // Menambahkan karyawan baru
    res.status(201).json({
      message: "Karyawan berhasil ditambahkan", // Pesan sukses
      employee_id: newEmployee.employee_id, // Menampilkan ID karyawan baru
    });
  };
  
  // READ - Menampilkan semua karyawan
  module.exports.getEmployeesAction = (req, res) => {
    res.json(getAllEmployees()); // Mengirimkan semua karyawan dalam bentuk JSON
  };
  
  // READ by ID - Menampilkan karyawan berdasarkan ID
  module.exports.getEmployeeByIdAction = (req, res) => {
    const employee = getEmployeeById(parseInt(req.params.employee_id)); // Mendapatkan karyawan berdasarkan ID
    if (employee) {
      res.json(employee); // Mengirimkan karyawan jika ditemukan
    } else {
      res.status(404).json({ message: "Karyawan tidak ditemukan" }); // Menampilkan pesan error jika karyawan tidak ditemukan
    }
  };
  
  // UPDATE - Memperbarui karyawan berdasarkan ID
  module.exports.updateEmployeeAction = (req, res) => {
    const employeeId = parseInt(req.params.employee_id); // Mengambil ID dari parameter
    const { name, position, department, salary } = req.body; // Mendapatkan data dari body request
    const updatedEmployee = updateEmployee(employeeId, name, position, department, salary); // Memperbarui karyawan
    if (updatedEmployee) {
      res.json({
        message: "Karyawan berhasil diperbarui", // Pesan sukses
        employee_id: updatedEmployee.employee_id, // Menampilkan ID karyawan yang diperbarui
      });
    } else {
      res.status(404).json({ message: "Karyawan tidak ditemukan" }); // Menampilkan pesan error jika karyawan tidak ditemukan
    }
  };
  
  // DELETE - Menghapus karyawan berdasarkan ID
  module.exports.deleteEmployeeAction = (req, res) => {
    const employeeId = parseInt(req.params.employee_id); // Mengambil ID dari parameter
    const deletedEmployee = deleteEmployee(employeeId); // Menghapus karyawan berdasarkan ID
    if (deletedEmployee) {
      res.json({
        message: "Karyawan berhasil dihapus", // Pesan sukses
        employee_id: deletedEmployee[0].employee_id, // Menampilkan ID karyawan yang dihapus
      });
    } else {
      res.status(404).json({ message: "Karyawan tidak ditemukan" }); // Menampilkan pesan error jika karyawan tidak ditemukan
    }
  };
  