import React from 'react'
import exercise1 from "../images/Exercise1.jpg"
import { useNavigate,Link } from 'react-router-dom'
import Exercise from './Exercise'
import Home1 from '../components/core/Home1'
import logos from '../components/core/logos'
import Services from '../components/core/Services'
// import Features from '../components/core/Features'
import first from "../images/first.jpg"
import Features from '../components/core/Features'
// import Services from '../components/core/Services'

function Home() {

    const navigate=useNavigate();
  return (
    <div className='bg-teal-500 w-full   text-white h-full py-10'>
      <div className="flex w-11/12 h-full items-center p-10 justify-center mx-auto ">
        <div className='w-9.5/12  gap-6   '>
          <h1 className="Salsa text-5xl">Achieve Your Fitness Goals with GetFit</h1>
          <p className='font-mono text-xl text-white mt-6 w-10/12 '>GetFit is a leading fitness tracking platform with personalized training and nutrition coaching. We help you achieve your fitness goals with expert guidance and state-of-the-art technology.</p>
          <button onClick={()=>{
            navigate("/Exercise")
          }}className='button-36 text-white mt-4'>View All Services</button>

        </div>
        <img src={first}
        className='scale-up-center  w-[400px] h-[400px] ml-8 rounded-xl  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'/>

      </div>
     <div className='w-full bg-black'>
     <Services/>
     </div>
     <div className='' >
        <Features/>
      </div>
     
    </div>
  )
}

export default Home
