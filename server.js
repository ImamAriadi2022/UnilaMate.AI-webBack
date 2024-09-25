// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tugasRoutes = require('./routes/tugas');
const kegiatanRoutes = require('./routes/kegiatan');
const db = require('./database/connect');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Menggunakan route
app.use('./routes/tugas', tugasRoutes);
app.use('./routes/kegiatan', kegiatanRoutes);

// Mulai server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
