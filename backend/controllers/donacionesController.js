const donacion = require('../models/donacionesForm')

exports.createDonacion = async (req, res) => {
    try {
        const nuevaDonacion = await donacion.create(req.body)
        res.status(201).json(nuevaDonacion)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear donación', error })
    }
}

exports.getDonacion = async (req, res) => {
    try {
        const donaciones = await donacion.find()
        res.status(200).json(donaciones)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener donaciones', error })
    }
}

exports.deleteDonacion = async (req, res) => {
    try {
        await donacion.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Donación eliminada' })
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar donación', error })
    }
}

exports.updateDonacion = async (req, res) => {
    try {
        const donacionActualizada = await donacion.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        );
        if (!donacionActualizada) {
            return res.status(404).json({ message: 'Donación no encontrada' })
        }
        res.status(200).json(donacionActualizada)
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar donación', error })
    }
}
