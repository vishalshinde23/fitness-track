import React, { useEffect,useState } from 'react'
// import axios from axios;
import {addExeriseData} from "../services/operations/Allapi"
import addData from "../images/addData.jpg";
import "../index.css"


function Exercise() {
  const[formData,setFormdata]=useState({
    username:"",
    description:"",
    duration:"",
    date:" "
  })

  const {username,description,duration,date}=formData

  const handleOnChange=((e)=>{
    setFormdata((prevData)=>({
        ...prevData,
        [e.target.name]:e.target.value,
   }))
  })

  
    const handleonSubmit=async(e)=>{
      e.preventDefault();
      let res=await addExeriseData(formData);
      console.log(res.data);
    }
  

  return (
    <div className='w-[1080px] h-full flex  items-center justify-center mx-auto  bg-teal-500   '>
      <form onSubmit={handleonSubmit} className='bg-teal-500 w-[500px] flex flex-col    items-center justify-center mx-auto  gap-4 z-[-10px]'>
        <div className=' w-10/12 h-[calc(100%-160px)]  flex flex-col gap-4  p-6 mt-10'>
        <label className=''>
            <p className="font-mono text-
            xl text-white p-2 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"> 
              First Name <sup className="text-pink-200 Exo text-xl">*</sup>
            </p>
          <input type="text" name="username" value={username} onChange={handleOnChange}
          placeholder='enter a user name' className='form-style w-full  p-2 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'/>
          </label>
          <label className=''>
            <p className="font-mono text-
            xl text-white">
              Description <sup className="text-pink-200 Exo text-xl ">*</sup>
            </p>
          <textarea name="description" value={description} onChange={handleOnChange} className=' resize-none form-style w-full  p-2 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' />
          </label>
          <label className=''>
            <p className="font-mono text-
            xl text-white">
              Duration <sup className="text-pink-200 Exo text-xl">*</sup>
            </p>
          <input type="text" name="duration" value={duration} onChange={handleOnChange} className='form-style w-full  p-2 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' />
          </label>

          <label className=''>
            <p className="font-mono text-
            xl text-white">
            Date <sup className="text-pink-200 ">*</sup>
            </p>
          <input type="date" name="date" value={date} onChange={handleOnChange} className='form-style w-full  p-2 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' />
          </label>
        </div>
      <button type="submit" className='button-36 mt-4 mb-8'>submit</button>

     
      </form>
      <div>
        <img src={addData} className=' bg-slate-800  w-[400%] h-[400px] rounded-md border-1px shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'/>
      </div>
     
     
    </div>
  )
}

export default Exercise

