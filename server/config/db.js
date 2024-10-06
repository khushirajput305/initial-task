const mongoose = require('mongoose')


const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to mongoDB database ${mongoose.connection.host}`);
    } catch (error) {
       console.log(`MongoDB error ${error}`) 
    }
}
module.exports=connectDB;