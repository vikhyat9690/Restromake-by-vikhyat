import ErrorHandler from "../error/error.js";
import { Reservation } from '../models/reservationSchema.js'



export const sendReservation = async (req, res, next) => {
    const {firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill in all fields", 400));
    }
    const existingReservation = await Reservation.findOne({
        $or:[{email, phone}],
        date,
        time
    })

    if(existingReservation){
        return res.status(400).json({
            message: `Reservation already done by ${firstName } ${lastName} for date : ${date} time slot : ${time}`
        })
    }
    

    try {
        await Reservation.create({firstName, lastName, email, phone, date, time});
        res.status(200).json({
            success: true,
            message:  "Reservation created successfully"
        })
    } catch (error) {
        if(error.name === 'ValidationError') {
            const validationError = Object.values(error.errors).map(
                (err) => err.message
            )
            return next(new ErrorHandler(validationError.join(" , "), 400))
        }
        return next(error);
    }
}