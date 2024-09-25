// routes/kegiatan.js
const express = require('express');
const router = express.Router();
const db = require('../database/connect');

// Mendapatkan semua kegiatan
router.get('/', (req, res) => {
    const query = 'SELECT * FROM kegiatan';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Menambah kegiatan baru
router.post('/', (req, res) => {
    const { nama, tanggal } = req.body;
    const query = 'INSERT INTO kegiatan (nama, tanggal) VALUES (?, ?)';
    db.query(query, [nama, tanggal], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, nama, tanggal });
    });
});

module.exports = router;
