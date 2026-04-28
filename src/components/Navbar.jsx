import React from 'react'
import Switch from './Switch'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center ">
      
      <div className="
        w-full max-w-3xl
        flex justify-between items-center
        px-6 py-3
        text-gray-800 dark:text-white
        bg-white/5 backdrop-blur-md
        border border-white/10
        rounded-lg
        mt-3
        shadow-lg
      ">
        
        <h1 className="text-xl font-bold ">Data Looper</h1>

        <div className="flex gap-4 items-center">
          <button>Contact</button>
          <Switch/>
        </div>

      </div>

    </div>
  )
}

export default Navbar