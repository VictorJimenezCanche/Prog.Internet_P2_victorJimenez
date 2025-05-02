const express = require('express')
const router = express.Router()
const { createDonacion, getDonacion, deleteDonacion, updateDonacion } = require('../controllers/donacionesController')

// Ruta para crear una donación
router.post('/', createDonacion)

// Ruta para obtener todas las donaciones
router.get('/', getDonacion)

// Ruta para eliminar una donación
router.delete('/:id', deleteDonacion)

// Ruta para actualizar una donación
router.put('/:id', updateDonacion)

module.exports = router
