import React from 'react'
import Exercise from '../pages/Exercise'
import User from '../pages/User'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'
import "../index.css"

function Navbar() {
  return (
    <div className='w-full z-40 flex-no-wrap h-[60px] relative flex  items-center justify-between  py-2  bg-black shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4'>
      
       <nav className='w-full h-[60px] mb-3 flex align-center justify-between mx-auto bg-black  fixed top-0 left-0 right-0  py-3 px-12  '> 
           
           <div className='flex items-start justify-start my-auto'>
              <Link to="/" >
              <h1 className='text-4xl   text-teal-400 font-bold text-center '>GETFIT</h1>
              </Link>
           </div>
           <div className='flex align-center justify-between gap-6 ' >
              
               <ul
         className="list-style-none mr-auto flex flex-col text-2xl font-serif gap-4 text-white pl-0 lg:flex-row"
         data-te-navbar-nav-ref>
         <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
           {/* <!-- Dashboard link --> */}
           <Link to="/Dashboard">Dashboard</Link>
             
         </li>
         {/* <!-- Team link --> */}
         <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
         <Link to="/user" className='text-white'>User</Link>
         </li>
         {/* <!-- Projects link --> */}
         <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
         <Link to="/exercise">Exercise</Link>
         </li>
       </ul>

           </div>
       </nav>
      


     
    </div>
  )
}

export default Navbar
