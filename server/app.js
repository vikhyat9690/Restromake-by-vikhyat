import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnection } from './database/dbConnection.js'
import { errorMiddleware } from './error/error.js'
import { router } from './routes/reservationRoutes.js'


const app = express()
dotenv.config({
    path: './config/.env'
})


app.use(cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
    methods: ['POST'],
}))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

dbConnection();

app.use(errorMiddleware)

app.use('/api/v1/reservation', router)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port : ${process.env.PORT}`)
})

export default app;