const express=require("express");
const router=express.Router();

const {getAllData,add,getDataById,getUpdate,DeleteData}=require("../controllers/exercise")

router.get("/getAllData",getAllData);
router.post("/add",add);
router.get("/getDataById",getDataById)
router.delete("/DeleteData",DeleteData);
router.post("/getUpdate",getUpdate);


module.exports=router;