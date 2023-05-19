 //connect to db
 const mongoose= require('mongoose')
 require('dotenv').config()
 const connectDb= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connected')
    } catch (error) {
        console.log('database failed to connect')
    }
 }
 module.exports= connectDb