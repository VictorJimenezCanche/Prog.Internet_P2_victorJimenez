const mongoose = require('mongoose')

const donacionesSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    mensaje: { type: String, required: true },
    cantidad: { type: Number, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('donacion', donacionesSchema)
