import React from 'react'
import{Routes,Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Exercise from './pages/Exercise'
import Home from './pages/Home'
import User from './pages/User'
import Error from './pages/Error'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='w-screen min-h-screen bg-teal-500 text-black flex flex-col overflow-x-hidden   '>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise" element={<Exercise/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Error/>}/>
        

      </Routes>

    </div>
  )
}

export default App
