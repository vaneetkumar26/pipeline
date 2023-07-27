require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// CONNECTION
mongoose
  .connect("mongodb://localhost:27017/logitutedandlatitude", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.send("Home page")
})


// PORT
const port = process.env.PORT || 8000;

// SERVER STARTING
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${8000}`)
})
