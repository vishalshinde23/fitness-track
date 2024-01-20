const User=require("../models/user");




exports.getuserData=async(req,res)=>{
     try{
        const users=await User.find();
       
    return res.status(200).json({
        success:true,
        data:users,
        message:"the user is found"
    })
     

   
     }catch(error){
        conssol.log(error)
        return res.status(400).json({
            success:false,
             message:"the user is not  found"
        })
         
     }
   
}

exports.adduserData=async(req,res)=>{
    try{
        const username=req.body;
        if(!username){
             return res.status(400).json({
                success:false,
                message:"please give username",
            })
        }

        let user=await User.create(username);
         return res.status(200).json({
            success:true,
            user,
            message:"the user will be created"
         })


    }catch(error){
        console.log(error)
   return res.status(400).json({
    success:false,
    message:"User cannot be created"

   })
    }

}


