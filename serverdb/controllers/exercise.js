const Exercise=require("../models/exercise")




exports.getAllData=async(req,res)=>{
    try{
        const exercise=await Exercise.find()
        return res.status(200).json({
            success:true,
            data:exercise,
            message:"the exercise got"
        })
    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            success:false,
            
            message:"the exercise data not  found"
        })
    }
}

// exports.add=(req,res)=>{
//     const username=req.body.usename;
//     const description=req.body.description;
//     const duration=Number(req.body.duration);
//     const date=Date.parse(req.body.date);

//     const newExercise=new Exercise({
//         username,
//         description,
//         duration,
//         date
//     });
//     newExercise.save()
//     .then(()=>res.json("exercise Added"))
//     .catch(err=>res.status(400).json("Error",+err))
// }

exports.add=async(req,res)=>{
    try{
  const {username,description,duration,date}=req.body;
    
      if(!username || !description || !duration || !date){
        return res.status(400).json({
            success:false,
            message:"the exercise data is missing",
        })
      }

      const exercise=await  Exercise.create({
        username:username,
        description:description,
        duration:duration,
        date:date
      }) 
      return res.status(200).json({
        success:true,
        exercise,
        message:"the Exercise be created"
      })
    }catch(error){
        console.log(error);
        return res.status(200).json({
            success:false,
            message:"the Exercise not be created"
          })
    }
}
// exports.getDataById=(req,res)=>{
//      Exercise.findById(req.params.id)
//      .then((exercises)=>res.json(exercises)).catch((err)=>res.status(400).json("Error",+ err))
// }

exports.getDataById=async(req,res)=>{
    try{
        const exerciseid=req.body;

        if(!exerciseid){
            return res.status(400).json({
                success:false,
                message:"the exercise id is missing"
            })
    
            
        }
        const exercise= await Exercise.find(exerciseid);
    
        return res.status(200).json({
            success:true,
            data:exercise,
            message:"the data will found  "
        })
    
    }catch(error){
       console.log(error);
       
       return res.status(400).josn({
        success:false,
        
        message:"the data will not  found  "
    })
       
    }
    
}

// exports.DeleteData=async(res,res)=>{
//     try{
//         const 
//     }
// }
// exports.DeleteData=(req,res)=>{
//     Exercise.findByIdAndDelete(req.params.id).then(()=>res.json("Exercise Deleted")).catch(err=>res.status(400).json("error",+err))
// }

exports.DeleteData=async(req,res)=>{
    try{ 
        const {exerciseId}=req.body;
         if(!exerciseId){
            return res.status(400).json({
                success:false,
                message:"id is missing"
            })
         }

         await Exercise.findByIdAndDelete(exerciseId);
         return res.status(200).json({
            success:true,
            message:"the exercise data wil be deleted"
         })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"the exercise data not wil be deleted"
         })
    }
}

exports.getUpdate=async(req,res)=>{
    try{
      const {exerciseId}=req.body;

 if(!exerciseId){
    return res.status(400).json({
        success:false,
        message:"the exerciseId will not be found"
    })
 }
  
 let user=await Exercise.findByIdAndUpdate({_id:exerciseId},{
    username:req.body},
    { description:req.body},
    {duration:req.body},
    {date:req.body},
    {new:true}

 )

  return res.status(200).json({
    success:true,
    data:user,
    message:"data will be updated"
  })

 
 
    }catch(error){
        console.log(error);
        return res.status(200).json({
            success:false,
            
            message:"data will be not updated"
          })
    }
}
exports.getUpdate=(req,res)=>{
    Exercise.findById(req.params.id).then(exercise =>{
        exercise.username=req.body.username;
        exercise.description=req.body.description;
        exercise.duration=Number(req.body.duration);
        exercise.date=Date.parse(req.body.date)
        exercise.save()
    .then(()=>res.json("Exercise updated")).catch((err)=>res.statuc(400).json("error",+err))

    }).catch(err=>res.status(400).json("error",+err))
}