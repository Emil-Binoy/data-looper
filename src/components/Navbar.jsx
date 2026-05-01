import React, { useState } from 'react';
import Switch from './Switch';
import { Link } from "react-router-dom";
import { FiMoreVertical, FiX } from 'react-icons/fi'; 
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4">
      <div className="
        w-full max-w-3xl
        mt-4
        backdrop-blur-xl
        bg-white/10
        border border-white/20 dark:border-white/10
        rounded-2xl
        shadow-lg
        transition-all duration-300
      ">
        <div className="flex justify-between items-center px-3 py-3">
          
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Data Looper" 
              className="h-[1.1em] w-auto object-contain invert-25 dark:invert-0" 
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            
            <div className="hidden md:flex gap-6 items-center text-sm font-medium text-slate-800 dark:text-slate-200 mr-2">
              <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/About" className="hover:text-purple-600 transition-colors">About</Link>
            </div>

            <Switch />

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center text-slate-800 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <FiX size={20} /> : <FiMoreVertical size={20} />}
            </button>
          </div>
        </div>

        <div className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-32 border-t border-slate-200 dark:border-white/5' : 'max-h-0'}
        `}>
          <div className="flex flex-col py-3 px-6 space-y-3 text-sm font-medium text-slate-800 dark:text-slate-200">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-purple-600 w-full py-1">
              Home
            </Link>
            <Link to="/About" onClick={() => setIsOpen(false)} className="hover:text-purple-600 w-full py-1">
              About
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;