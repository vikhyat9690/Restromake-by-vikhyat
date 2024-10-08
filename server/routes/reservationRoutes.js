import express from 'express'
export const router = express.Router()
import { sendReservation } from '../controllers/reservation.js'

router.post('/send', sendReservation)

