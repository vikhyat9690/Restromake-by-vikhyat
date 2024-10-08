import mongoose from 'mongoose'

export const dbConnection = async() => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName:  'RESTROMAKE',
    })
    .then(() => {
        console.log("Connected to database succesfully")
    })
    .catch((err) => {
        console.log(`Error in connecting to database ${err}`)
    })
}

// export default dbConnection