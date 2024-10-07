require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes");


const app = express();

//Middleware
app.use(express.json());

//MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Failed to connect to MongoDB", err);
});


// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
  );
});
