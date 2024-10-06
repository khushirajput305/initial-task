const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();
connectDB();

const app = express();



const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(
        `server is running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
  
    )
})