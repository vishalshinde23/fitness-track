const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect("mongodb+srv://shindev2000:f5KHUXR4HksBSZGj@cluster0.givwiur.mongodb.net/GetFit",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB conncetion succesful")).catch((error)=>{
        console.log("DB connection Issues");
        console.log(error);
        process.exit(1);
    });
}