import React from 'react'
import Feature from "../../images/Features.jpg"

function Features() {
  return (
    <div className="w-[1080px] mx-auto     h-full">
      <div className="w-[1080px] flex  justify-center items-center mx-auto    py-20 gap-8 ">

     
      <div className='shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-md  p-2    flex flex-col gap-2'>
        <p className="text-3xl Salsa text-white ">Features</p>
      <ul className='flex flex-col gap-2 '>
          <li className='text-xl font-sans'>😲 Advanced Fitness Tracking Technology</li>
          <li  className='text-xl font-sans'>😲 Personalized Training Programs</li>
          <li  className='text-xl font-sans'>😲 Expert Nutrition Coaching</li>
          <li  className='text-xl font-sans'> 😲 Intuitive Mobile App</li>
          <li  className='text-xl font-sans'>😲 Flexible Scheduling</li>
        </ul>
      </div>
        <div className=' shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-md p-2 mx-auto  flex flex-col gap-2'>
          <p className="text-3xl Salsa  text-white ">Features</p>
        <ul className='flex flex-col gap-2'>
          <li  className='text-xl font-sans'>😲 Customized Fitness Plans</li>
          <li  className='text-xl font-sans'>😲 Expert Guidance and Support</li>
          <li className='text-xl font-sans'>😲 Real-Time Progress Tracking</li>
          <li className='text-xl font-sans'>😲 Convenient Mobile App</li>
          <li  className='text-xl font-sans'>😲 Improved Health and Fitness</li>
        </ul>
        </div>
        <img src={Feature} className='shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-md w-[400px] h-[400px]'/>
      </div>
    </div>
  )
}

export default Features
