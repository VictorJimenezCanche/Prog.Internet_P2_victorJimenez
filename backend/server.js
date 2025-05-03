const express = require('express')
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const { notFound } = require('./middleware/notFoundMiddleware')

const app = express()
const PORT = process.env.PORT || 5000


connectDB()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('API funcionando correctamente')
})


app.use('/api/donaciones', require('./routes/donacionesRoutes'))
app.use('/api/cards', require('./routes/fotosCardMilanesoRoutes'))


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})
