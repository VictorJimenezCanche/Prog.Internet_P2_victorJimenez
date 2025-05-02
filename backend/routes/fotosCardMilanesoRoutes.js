const express = require('express')
const router = express.Router()
const {createCard,getAllCards,getCardById,updateCard,deleteCard} = require('../controllers/fotosCardMilanesoController')

// Ruta para crear una card
router.post('/', createCard)

// Ruta para obtener todas las cards
router.get('/', getAllCards) 

// Ruta para obtener una card
router.get('/:id', getCardById)

// Ruta para actualizar una card
router.put('/:id', updateCard) 

// Ruta para eliminar una card
router.delete('/:id', deleteCard)      

module.exports = router
