 import {toast} from "react-hot-toast"
import {apiConnector} from "../apiConnector"
import {userpoints,exercisepoint} from "../apis"

const {
    ADDUSER_API,
    GETUSER_API
}=userpoints;


const {
    GETDATA_API,
    GETDATABYID_API,
    ADDDATA_API,
    UPDATE_API,
    DELETE_API
}=exercisepoint;

export const  addUser=async(username)=>{
    const toastId=toast.loading("Loading")
    let result = null
    try{
        const response=await apiConnector("POST","http://localhost:4000/api/user/adduserData",{
            username
        })
        //console.log("Add user data api response...",response)

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
          toast.success("your name Added Successfully")
    result = response?.data
    }
    catch(error){
        //console.log("CREATE USER API ERROR............", error)
        toast.error(error.message)
    }
   
    toast.dismiss(toastId)
    return result;
}

export const getuserData=async()=>{
    let result=null
    const toastId=toast.loading("Loading...")
    try {
        
    const response=await apiConnector("GET",GETUSER_API);

    //console.log("CREATE USER API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not get userDetails")
    }
     result=response.data
    } catch (error) {
        //console.log("USER FECTHING API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const addExeriseData=async({username,description,duration,date})=>{
  const toastId=toast.loading("Loading");
  
  try{
    let res=await apiConnector("POST",ADDDATA_API,{
        username,description,duration,date
    })
    // //console.log("create user api Response...",res)

    if(!res?.data?.success){
        throw new Error("Could Not add Exercise userDetails");
    }
    toast.success('Exercise Added SuccessFully');

  }catch(error){
//    //console.log("EXERCISE API ERROR.....",error)
   toast.error(error.message)
  }
  toast.dismiss(toastId);
 
}


export const getData=async()=>{
    const ToastId=toast.loading("Loading");
    let result=[];
    try{
     let  res=await apiConnector("GET",GETDATA_API)

     //console.log("the Exercise api data ",res);
     if(!res?.data?.success){
        throw new Error("Could Not get  ExerciseDetails")
     }
     result=res?.data;
    }catch(error){
     //console.log("the get api error",error)
     toast.error(error.message)
    }
    toast.dismiss(ToastId);
    return result;

}

export const getDataById=async(ExerciseId)=>{
    const toastId=toast.loading("loading");
    let result=[]
    try{
        let res=await apiConnector("GET",GETDATABYID_API,{
            ExerciseId
        })
        //console.log("The Exercise getDataById api ",res);

        if(!res?.data?.success){
            throw new Error("Could Not get  Exercise Details by Id")
        }
     result=res?.data
    }
    catch(error){
     //console.log("The Exercise get DatabyId Api Error",error);
     toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const DeleteData=async(ExerciseId)=>{
    const toastId=toast.loading("loading");
    let result=[]
    try{
        let res=await apiConnector("DELETE",DELETE_API,{
            ExerciseId}
        )
        //console.log("The Exercise Delete api ",res);

        if(!res?.data?.success){
            throw new Error("Could Not Delete  Exercise ")
        }
     result=res?.data
    }
    catch(error){
     //console.log("The Exercise Delete Api Error",error);
     toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result

}
export const UpdateData=async(data)=>{
    const toastId=toast.loading("loading");
    let result=[]
    try{
        let res=await apiConnector("POST",UPDATE_API,
        data)
        //console.log("The Exercise UPDATE_API  ",res);

        if(!res?.data?.success){
            throw new Error("Could Not UPDATE Exercise   ")
        }
     result=res?.data
    }
    catch(error){
     //console.log("The Exercise UPDATE Api Error",error);
     toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result

}