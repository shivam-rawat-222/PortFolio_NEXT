import React from 'react'

export default function Leetcode() {
    return (
        <div className='h-screen  border border-red bg-black'>
            <div className='border border-blue h-[20%] '>
                <div className='text-white text-6xl text-center h-full flex items-center justify-center' >Problem Solved</div>
            </div>
            <div className=' flex justify-center items-center h-[80%] border border-black
                 '>

                <div className='border border-red h-[50%] flex  w-[40%]'>
                    <div className='w-[60%] flex justify-center items-center border border-red flex-col'>
                        <div className='w-[50%] h-[60%] border border-red rounded-full text-white flex justify-center items-center text-4xl flex-col gap-1'>


                            <div className='text-4xl'>100</div>
                            <div className='text-sm'>Solved</div>


                        </div>


                    </div>
                    <div className='w-[40%]  border border-red'>
                        <div className='border border-red h-2/6 text-white'>
                            <div>
                                Easy
                            </div>
                            <div>20</div>

                        </div>
                        <div className='border border-red h-2/6'> hi

                        </div>
                        <div className='border border-red h-2/6'> hi

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
