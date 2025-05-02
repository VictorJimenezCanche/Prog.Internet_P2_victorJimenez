const notFound = (req, res, next) => {
    const error = new Error(`No se encontró la ruta: ${req.originalUrl}`)
    res.status(404)
    next(error)
}

module.exports = { notFound }
