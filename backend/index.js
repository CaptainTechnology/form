const dotenv=require("dotenv");
dotenv.config();
const monogoose=require("mongoose");
const express=require("express");
const user=require("./db");
const fs=require("node:fs");
const path=require("path");
const public_path=path.join(__dirname,"public");
console.log(public_path);
const { default: mongoose } = require("mongoose");
const app=express();
const port=process.env.PORT || 4000;
const cors=require("cors");
app.use(cors());
app.use(express.json());
mongoose.connect(`${process.env.DATABASE_URL}/validation_email`).
then(()=>{
    console.log("database is connected");
}).catch((e)=>{
    console.log("not connected ",e);
});

app.listen(port,()=>{
    console.log("listenning..."+port);
})
app.get("/",(req,res)=>{
    console.log("app is runnig")
    res.send("running")
})

app.use(express.urlencoded({extended:true}));

app.post("/save",async(req,res)=>{
    const userdata=new user(req.body);
    await userdata.save();
    res.json({
        success:true,
        data:userdata
    })
})
app.get("/get_data",async(req,res)=>{
    const userdata=await user.find({});
    res.json({
        success:true,
        data:userdata
    })
})




