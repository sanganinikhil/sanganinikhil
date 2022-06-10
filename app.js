const express = require("express");
const app = express();
const port = 2500 || process.env.port;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/examples")
app.listen(port,()=>{
    console.log("port is connected");
})