import React from 'react'
import { useState } from 'react'
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
  return (
    <section className='p-5'>
        <div
            className='p-5 border-2 border-gray-400 rounded-xl'
        >
            <div>
                <h1>Enter you text</h1>
                <textarea 
                    placeholder='Type or paste your text here...'
                    type="text" 
                    className='p-2 border-2 border-gray-400 rounded-lg text-white bg-gray-800 w-full my-2'
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                />
            </div>
            <div className='flex gap-2'>
                <div className='w-full'>
                    <h1>Repeat Count</h1>
                    <input 
                        type="number" 
                        className='p-2 border-2 w-full border-gray-400 rounded-lg text-white bg-gray-800 my-2'
                        value={count}
                        onChange={(e)=> setCount(e.target.value)}
                    />
                </div>
                <div className='w-full'>
                    <h1>Output Format</h1>
                    <select 
                        className='p-2 border-2 w-full border-gray-400 rounded-lg text-white bg-gray-800 my-2'
                        value={format}
                        onChange={(e)=> setFormat(e.target.value)}
                    >
                        <option value="number">Numbered list</option>
                        <option value="line">Line by line</option>
                        <option value="bullet">Bullet list</option>
                    </select>
                </div>
            </div>

            <button
                className='w-full bg-purple-700 rounded-lg text-white p-2 font-semibold my-2'
                onClick={showResult}
            >
                Generate
            </button>
            
            {/* <button
                onClick={refresh}
            >
                refresh
            </button> */}
            <div className="whitespace-pre-line p-2 border-2 border-gray-400 rounded-lg text-white bg-gray-800 my-2">
                {result}
            </div>
        </div>
    </section>
  )
}

export default Home