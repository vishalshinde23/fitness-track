import React from 'react'
import fitness from "../../images/fitness.jpg"
import nutrition from "../../images/nutrition.jpg"
import personal from "../../images/personal.jpg"
import { useNavigate } from 'react-router-dom'
import "../../index.css"




function Services() {
  const navigate=useNavigate();
  return (
    <div className='w-[1080px]      h-[1080px] flex-col  items-center justify-center mx-auto mb-14 px-10 pb-14 py-2    '>
      <div className='w-full  h-full '>

      <div className='w-full flex justify-between mt-[60px] '>
    <h1 className='text-5xl  '>
      Our Services
    </h1>
    <button onClick={()=>{
            navigate("/Exercise")
          }}className='button-36 text-white '>View All Services</button>
      </div>
      <div className="  grid gap-2 xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-18xl mt-4 p-2 mx-auto  h-[80vh] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          
           <div className='h-[590px]  scale-up-center mb-4 p-4 flex flex-wrap flex-col gap-4 bg-teal-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md'>
            <img src={fitness} className=' '   />
            <h4 className='font-mono text-2xl'>Fitness Training</h4>
            <p className="w-[90%-50px]">Our fitness tracking service is designed to help you stay accountable, monitor your progress, and make adjustments to your routine as needed</p>
            <button className='button-52'>Read More</button>
           </div>
           <div className='h-[590px]  scale-up-center mb-4 p-4 flex flex-wrap flex-col gap-4 bg-teal-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md'>
            <img src={nutrition} className=' '/>
            <h4 className='font-mono text-2xl'>Nutrition Coaching</h4>
            <p className="w-[90%-50px]">Our personalized nutrition coaching services are tailored to your specific needs and goals, helping you make healthy choices and achieve your fitness goals.</p>
            <button className='button-52'>Read More</button>
           </div>
           <div className= 'h-[590px]  scale-up-center mb-4 p-4 flex flex-wrap  flex-col gap-4 bg-teal-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md'>
            <img src={personal} className=' ' />
            <h4 className='font-mono text-2xl'>Personal Training</h4>
            <p className="w-[90%-50px]">Our personalized, one-on-one personal training sessions are tailored to your fitness level, goals, and preferences to help you achieve your fitness goals.</p>
            <button className='button-52'>Read More</button>
           </div>
        </div>
        <div className='  mt-[250px] flex gap-4 items-center justify-center mx-auto  p-4 '>
      <div className='w-5/12  border-b-4 border-white '>
     
     </div>
      <p>Features & Benefits</p>
       <div className='w-5/12 border-b-4 border-white'></div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Services
