const express=require("express");
const router=express.Router();

const {getuserData,adduserData}=require("../controllers/user");

router.get("/getuserData",getuserData);
router.post("/adduserData",adduserData);


module.exports=router;