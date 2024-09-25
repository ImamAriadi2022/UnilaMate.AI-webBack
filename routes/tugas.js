// routes/tugas.js
const express = require('express');
const router = express.Router();
const db = require('../database/connect');

// Mendapatkan semua tugas
router.get('/', (req, res) => {
    const query = 'SELECT * FROM tugas';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Menambah tugas baru
router.post('/', (req, res) => {
    const { nama, deadline } = req.body;
    const query = 'INSERT INTO tugas (nama, deadline) VALUES (?, ?)';
    db.query(query, [nama, deadline], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, nama, deadline });
    });
});

// Menghapus tugas berdasarkan ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tugas WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(204).send(); // Mengembalikan status 204 No Content
    });
});

module.exports = router;
