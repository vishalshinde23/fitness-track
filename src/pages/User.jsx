import React ,{useEffect, useState} from 'react'
import axios from "axios";
import {addUser} from "../services/operations/Allapi"
import { toast } from 'react-hot-toast';

function User() {
    // const[username,setUsername]=useState("");

    const [username, setUsername] = useState("");
    const handleChange = (e) => {
      setUsername(e.target.value);
    };
  

    

    const onSubmit = (e) => {
      e.preventDefault();
      const user = {
        username,
      };
        const toastId=toast.loading("Loading")

       try {
       let response= axios
        .post("http://localhost:4000/api/user/adduserData", user)
        
        //////console.log(response.data)
        if (!response?.data?.success) {
          throw new Error(response.data.message)
        }
        toast.success("your name Added Successfully")
       } catch (error) {
        //////console.log("CREATE USER API ERROR............", error)
        toast.error(error.message)
       }
       
       toast.dismiss(toastId)
      setUsername("");
    };
  return (
    <div className='w-full h-full   bg-teal-500   '>
       <form onSubmit={onSubmit} className="w-full h-[90vh] flex flex-col items-center justify-center mx-auto gap-8   ">
       <div className="w-6/12     ">
          <label className='flex gap-2 w-full'>
            <p className="text-white text-2xl bg-violet-600 p-2 rounded-md font-medium w-4/12">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Enter first name"
              className="form-style w-full p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-md"
            />
          </label>
          </div>

       <button type="submit" className='button-36'>
         Create user
       </button>
      
       </form>
    </div>
  )
}

export default User
