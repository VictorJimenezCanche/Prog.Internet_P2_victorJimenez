const express = require('express')
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const { notFound } = require('./middleware/notFoundMiddleware')
const port = process.env.PORT || 5000


connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)
app.use(notFound)

app.use('/api/donaciones', require('./routes/donacionesRoutes'))
app.use('/api/cards', require('./routes/fotosCardMilanesoRoutes'))

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))