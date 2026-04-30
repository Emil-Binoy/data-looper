import React from 'react'
import Switch from './Switch'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center ">
      
      <div className="
        w-full max-w-3xl
        flex justify-between items-center
        px-6 py-3
        text-gray-800 dark:text-white
        backdrop-blur-md
        border border-white/10
        rounded-lg
        mt-3
        shadow-lg
        bg-bg-white/10 
      ">
        
        <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Data Looper</Link>

        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-purple-400">
            Home
          </Link>
          <Link to="/About" className="hover:text-purple-400">
            About
          </Link>
          <Switch/>
        </div>

      </div>

    </div>
  )
}

export default Navbar