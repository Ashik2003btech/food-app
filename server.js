const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");



//dot env config
dotenv.config();

//connection
connectDB();
//rest object
const app = express();
//middleware works between application
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//route
//http://localhost:8080/
app.use('/api/v1/test',require("./routes/testRouters"));
app.use('/api/v1/auth', require("./routes/authRoutes"));
app.use('/api/v1/user', require('./routes/userRoutes'));

//get response
app.get("/", (req,res) => {
    return res.status(200).send("<h1>Welcome to food Server app  API BASE</h1>");
});

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgMagenta.white);
});