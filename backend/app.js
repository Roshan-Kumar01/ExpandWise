// Import the Express module
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require("path")

// Create an instance of Express
const app = express();
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

const genAIChat = require('./routes/chatRoute')

app.use("/api/v1",genAIChat)

app.use(express.static(path.join(__dirname,"../frontend/build")))
app.get("*",(req,res) => {
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})

module.exports = app;
