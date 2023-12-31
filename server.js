const express = require("express")
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const user = require("./Router/user");
const product = require("./Router/product");

const PORT = process.env.PORT||4000;
const DB_ENDPOINT = "mongodb+srv://anshul:root@cluster0.p3pyi.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB_ENDPOINT,(err,database)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connected Database");
})

// middleware
app.use(cors())
app.use(express.json())

app.use("/user",user);
app.use("/product",product);

app.get("/",(req,res)=>{
    res.status(200).json("Success");
})

app.listen(PORT,()=>console.log("App is Listning at PORT ",PORT))