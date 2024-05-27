const { siswa } = require('../models')
const fs = require('fs')


const createSiswa = async (req, res) => {
    try {
      const data_siswa = await siswa.create(req.body);
      res.status(201).json(data_siswa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const getAllSiswa = async (req, res) => {
    try {
      const data_siswa = await siswa.findAll()
      res.status(200).json(data_siswa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const getSiswaById = async (req, res) => {
    try {
      const data_siswa = await siswa.findByPk(req.params.id);
      if (data_siswa) {
        res.status(200).json(data_siswa);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const updateSiswa = async (req, res) => {
    try {
        const [data_siswa] = await siswa.update(req.body, {
            where: { id: req.params.id }
          });
      if (data_siswa) {
        const update_siswa = await siswa.findByPk(req.params.id);
        res.status(200).json(update_siswa);
      } else {
        res.status(404).json({ error: 'siswa not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const deleteSiswa = async (req, res) => {
    try {
      const data_siswa = await siswa.findByPk(req.params.id);
      if (data_siswa) {
        await data_siswa.destroy();
        res.status(200).json({ message: 'Siswa deleted' });
      } else {
        res.status(404).json({ error: 'Siswa not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

module.exports = {createSiswa,getAllSiswa,getSiswaById,updateSiswa,deleteSiswa}