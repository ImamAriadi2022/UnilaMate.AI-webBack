const mysql = require('mysql2');

// Konfigurasi koneksi
const connection = mysql.createConnection({
  host: 'localhost', // host
  user: 'root', // username dari database (default untuk MySQL)
  password: '', // ganti dengan password database Anda
  database: 'verceldb', // nama database
  port: 3306, // port MySQL (default adalah 3306)
});

// Cek koneksi
connection.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;

// Jangan lupa untuk menutup koneksi saat tidak diperlukan lagi
// connection.end((err) => {
//   if (err) {
//     console.error('Error while closing the connection', err.stack);
//   } else {
//     console.log('Connection closed');
//   }
// });
