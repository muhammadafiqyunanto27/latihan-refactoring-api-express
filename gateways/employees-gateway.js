// Database sementara menggunakan array
let employees = []; // Array untuk menyimpan data karyawan sementara
let currentEmployeeId = 1; // Variabel untuk menghasilkan ID karyawan secara otomatis

// Menambahkan karyawan baru
module.exports.addEmployee = (name, position, department, salary) => {
    const newEmployee = {
        employee_id: currentEmployeeId++, // ID unik untuk karyawan baru
        name,
        position,
        department,
        salary,
    };
    employees.push(newEmployee); // Menambahkan karyawan ke dalam array employees
    return newEmployee; // Mengembalikan karyawan yang baru ditambahkan
};

// Mengambil semua karyawan
module.exports.getAllEmployees = () => employees;

// Mengambil karyawan berdasarkan ID
module.exports.getEmployeeById = (id) => employees.find((employee) => employee.employee_id === id);

// Mengupdate karyawan berdasarkan ID
module.exports.updateEmployee = (id, name, position, department, salary) => {
    const employee = employees.find((employee) => employee.employee_id === id);
    if (employee) {
        employee.name = name || employee.name;
        employee.position = position || employee.position;
        employee.department = department || employee.department;
        employee.salary = salary || employee.salary;
        return employee; // Mengembalikan karyawan yang sudah diperbarui
    }
    return null; // Jika karyawan tidak ditemukan, mengembalikan null
};

// Menghapus karyawan berdasarkan ID
module.exports.deleteEmployee = (id) => {
    const index = employees.findIndex((employee) => employee.employee_id === id);
    if (index !== -1) {
        const deletedEmployee = employees.splice(index, 1);
        return deletedEmployee; // Mengembalikan karyawan yang dihapus
    }
    return null; // Jika karyawan tidak ditemukan
};
