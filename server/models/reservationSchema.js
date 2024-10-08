import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be at least 3 characters"],
        maxLength: [50, "First name must be at most 50 characters, if have more than write use abbrevation."]
    }, 
    lastName: {
        type: String,
        required: true,
        minLength: [3, "First name must be at least 3 characters"],
        maxLength: [50, "First name must be at most 50 characters, if have more than write use abbrevation."]
    }, 
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, 'phone number can only contains 10 numbers'],
        maxLength: [10,  'phone number can only contains 10 numbers']
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

export const Reservation = mongoose.model('Reservation', reservationSchema);
