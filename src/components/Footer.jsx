import React from 'react';
import { FiGithub, FiLinkedin, FiGlobe, FiMail } from 'react-icons/fi';
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Data Looper" 
                className="h-6 w-auto object-contain invert-25 dark:invert-0" 
              />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              The minimal power-tool for generating repeated, formatted, and structured text. Built for speed and simplicity.
            </p>
          </div>

          {/* Social & Contact Column */}
          <div className="flex flex-col md:items-end space-y-6">
            <div className="flex gap-4">
              <a 
                href="https://github.com/Emil-Binoy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/emil-binoy-769261325" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://emil-binoy.github.io/Portfolio-using-React/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all"
              >
                <FiGlobe size={20} />
              </a>
            </div>
            
            <a 
              href="mailto:emilbinoy06@gmail.com" 
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <FiMail className="shrink-0" />
              emilbinoy06@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Section - Centered */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 text-center">
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em]">
            © {currentYear} Data Looper. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;