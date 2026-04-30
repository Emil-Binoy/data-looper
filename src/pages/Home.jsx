import React from 'react'

import { useState } from 'react'
import { FaRegCopy } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { BsStars } from "react-icons/bs";

const Home = () => {
    const [text, setText] = useState("");
    const [count, setCount] = useState("");
    const [result, setResult] = useState("");
    const [format, setFormat] = useState("");

    const showResult=()=>{
        if (!text || count<=0) return;

        let output="";
        for(let i=1; i<=count; i++){
            if(format==="number"){
                output+= `${i}. ${text}\n`;
            }
            else if(format==="bullet"){
                output+= `● ${text}\n`;
            }
            else{
                output+= `${text}\n`;
            }
        }
        setResult(output);
    }

    const refresh=()=>{
        setCount("");
        setText("");
        setResult("");
    }

    const copy=()=>{
        if (!result) return;

        navigator.clipboard.writeText(result)
        .then(()=>{
            alert("text copied");
        })
        .catch(()=>{
            alert("failed to copy");
        })
    }
  return (
    <section className='bg-gray-100 dark:bg-gray-900 p-5 flex flex-col items-center justify-center min-h-screen '>
        
            
            <div
                className='p-5 mt-4  rounded-xl w-full max-w-2xl shadow-xl/30 bg-gray-200 dark:bg-gray-800'
            >
                <div>
                    <h1 className='text-black dark:text-white'>Enter you text</h1>
                    <textarea 
                        placeholder='Type or paste your text here...'
                        type="text" 
                        className='inset-shadow-sm inset-shadow-gray-500 dark:inset-shadow-gray-900 p-2  rounded-lg text-black dark:text-white bg-gray-200 dark:bg-gray-800 w-full my-2'
                        value={text}
                        onChange={(e)=> setText(e.target.value)}
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <div className='w-full'>
                        <h1 className='text-black dark:text-white'>Repeat Count</h1>
                        <input 
                            type="number" 
                            className='inset-shadow-sm inset-shadow-gray-500 dark:inset-shadow-gray-900 p-2 w-full rounded-lg text-black dark:text-white bg-gray-200 dark:bg-gray-800 my-2'
                            value={count}
                            onChange={(e)=> setCount(e.target.value)}
                            placeholder='Enter the count'
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-black dark:text-white'>Output Format</h1>
                        <select 
                            className='inset-shadow-sm inset-shadow-gray-500 dark:inset-shadow-gray-900 p-2 w-full rounded-lg text-black dark:text-white bg-gray-200 dark:bg-gray-800 my-2'
                            value={format}
                            onChange={(e)=> setFormat(e.target.value)}
                        >
                            <option value="line">Line by line</option>
                            <option value="number">Numbered list</option>
                            <option value="bullet">Bullet list</option>
                        </select>
                    </div>
                </div>

                <button
                    className='w-full bg-purple-700 rounded-lg text-white p-2 font-semibold my-2 hover:bg-purple-600 active:scale-95 transition-all duration-300 ease-in-out shadow-xl/20 '
                    onClick={showResult}
                >
                    <div className='flex text-center items-center justify-center gap-2'>
                        Generate <BsStars />
                    </div>
                </button>
                
                
                {result&&(
                    <div className="relative  p-2 inset-shadow-sm inset-shadow-gray-500 dark:inset-shadow-gray-900 rounded-lg text-black dark:text-white bg-gray-200 dark:bg-gray-800 my-2">
                        <div className='absolute top-2 right-2 flex gap-3 '>
                            <button
                                className='flex items-center gap-1 text-red-400 hover:text-red-300 transition'
                                onClick={refresh}
                            >
                                <IoMdRefresh />
                            </button>
                            <button
                                className='flex items-center gap-1 text-purple-400 hover:text-purple-300 transition'
                                onClick={copy}
                            >
                                <FaRegCopy />
                            </button>
                        </div>
                        <div className='mt-8 whitespace-pre-line max-h-60 overflow-y-auto'>
                            {result}
                        </div>
                    </div>
                )}
            </div>
        
    </section>
  )
}

export default Home