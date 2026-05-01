import React from 'react';
import { FiRepeat, FiZap, FiLayout, FiTerminal, FiMail, FiGithub, FiGlobe, FiLinkedin  } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineRocketLaunch, HiOutlineShieldCheck } from 'react-icons/hi2';
import logo from "../assets/logo.png"

const About = () => {
  const features = [
    {
      title: "Smart Repetition",
      description: "Generate complex loops of text, sequences, or dummy data in milliseconds.",
      icon: <FiRepeat className="w-5 h-5 text-purple-600 dark:text-purple-400" />
    },
    {
      title: "Flexible Output",
      description: "Generate text as plain lines, numbered lists, or bullet points instantly.",
      icon: <FiTerminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Instant Export",
      description: "Copy to clipboard your generated patterns immediately.",
      icon: <FiZap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
    },
    {
      title: "Simple UI",
      description: "No bloat. A clean, focused workspace designed for speed.",
      icon: <FiLayout className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-600 dark:text-slate-300 pt-24 font-sans selection:bg-purple-500/30 transition-colors duration-300">
      
      <header className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full  from-blue-500/5 dark:from-purple-500/10 to-transparent blur-3xl opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            About <span className="flex justify-center mt-5">
              <img src={logo} alt="logo"className='h-auto w-auto invert-25 dark:invert-0 ' />
            </span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The minimal power-tool for generating repeated, formatted, and structured text without the manual grind.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-24 pb-24">
        
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why I built this</h2>
            <p className="leading-relaxed mb-4">
                Data Looper started as a small side project to refresh my frontend skills after a break.
            </p>
            <p className="leading-relaxed">
                This project helped me revisit React, Tailwind, and UI design while building something clean and practical.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl backdrop-blur-sm shadow-sm dark:shadow-xl">
            <h3 className="text-purple-600 dark:text-purple-400 font-medium mb-4">What this project focuses on</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Clean and simple UI
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Practical functionality
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Improving frontend fundamentals
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-2">Core Capabilities</h2>
            <p className="text-slate-500 dark:text-slate-500">Everything you need, nothing you don't.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-none">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-linear-to-br dark:from-slate-900 dark:to-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why use it?</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Reclaim your time. No complex spreadsheets, no manual typing—just instant results.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2"><HiOutlineSparkles className="text-purple-600 dark:text-purple-400" /> Zero Learning Curve</span>
            <span className="flex items-center gap-2"><HiOutlineRocketLaunch className="text-blue-600 dark:text-blue-400" /> High-Speed Output</span>
            <span className="flex items-center gap-2"><HiOutlineShieldCheck className="text-purple-600 dark:text-purple-400" /> Privacy Focused</span>
          </div>
        </section>

        
      </main>
    </div>
  );
};

export default About;