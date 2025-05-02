const Card = require('../models/fotosCardMilaneso')


const createCard = async (req, res) => {
    const { imageUrl, description } = req.body
    try {
        const newCard = new Card({ imageUrl, description })
        await newCard.save()
        res.status(201).json(newCard)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarjeta', error })
    }
};


const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find().sort({ createdAt: -1 })
        res.status(200).json(cards)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tarjetas', error })
    }
};


const getCardById = async (req, res) => {
    const { id } = req.params
    try {
        const card = await Card.findById(id)
        if (!card) {
            return res.status(404).json({ message: 'Tarjeta no encontrada' })
        }
        res.status(200).json(card)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarjeta', error })
    }
};


const updateCard = async (req, res) => {
    const { id } = req.params
    const { imageUrl, description } = req.body

    try {
        const updatedCard = await Card.findByIdAndUpdate(
            id,
            { imageUrl, description },
            { new: true }
        );
        if (!updatedCard) {
            return res.status(404).json({ message: 'Tarjeta no encontrada' })
        }
        res.status(200).json(updatedCard)
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarjeta', error })
    }
};


const deleteCard = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCard = await Card.findByIdAndDelete(id)
        if (!deletedCard) {
            return res.status(404).json({ message: 'Tarjeta no encontrada' })
        }
        res.status(200).json({ message: 'Tarjeta eliminada exitosamente' })
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarjeta', error })
    }
};

module.exports = {
    createCard,
    getAllCards,
    getCardById,
    updateCard,
    deleteCard
};
