const express = require('express');
const SiswaController = require('../controllers/SiswaController');
const router = express.Router();

router.post('/siswa', SiswaController.createSiswa);
router.get('/siswa', SiswaController.getAllSiswa);
router.get('/siswa/:id', SiswaController.getSiswaById);
router.put('/siswa/:id', SiswaController.updateSiswa);
router.delete('/siswa/:id', SiswaController.deleteSiswa);

module.exports = router;
