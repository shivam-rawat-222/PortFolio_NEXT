import React from 'react'

export default function Card() {
    return (
        <div className=' w-72 h-96 bg-[#241F20] rounded-2xl  hover:shadow-lg hover:shadow-blue-500/50'>
            <div className='h-28 flex-col gap-5 flex justify-center items-center mt-4'>
                <img src="./assets/Icons/fb.png" className='h-14' />
                <text className='text-2xl text-white font-Crimpson'>ChatGPT</text>
            </div>
            <div className='h-auto  px-5 py-4 flex flex-col items-center'>
                <text className='text-white'>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if </text>
                <button className='my-2 text-white p-1 w-24 rounded-xl bg-blue-500 border-none'>Visit</button>
            </div>
        </div>
    )
}