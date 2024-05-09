import React from 'react'


import Typewriter from 'typewriter-effect';
export default function MainPage() {
    return (
        <div className='items-center personal-main h-auto h-screen bg-navcolor flex lg:px-28 lg:items-start '>
            <img src="./assets/archi.png" className='hidden lg:flex lg:absolute w-full  left-0 object-cover pr-10 ' />
            <div className='w-full flex justify-center flex-col items-center h-4/5 '>

                <div className=' lg:h-90 lg:mt-40 lg:w-3/12 py-8 shadow-sm absolute top-20 '>
                    <div className=' lg:h-2/5 flex justify-center'><img src="./assets/main.png" className='h-full object-cover' /></div>
                    <div className=' py-10 lg:py-2 text flex justify-center flex-col items-center gap-1 lg:h-2/5'>
                        <div className='font-medium'>Hi, I’m Shivam </div>
                        <div className=' text-3xl font-semibold'>
                            <Typewriter
                                options={{
                                    strings: ['MERN Stack Developer', 'REST API Developer', 'Web Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>

                    <div className='   lg:h-20 flex items-center justify-center'><button className='w-40 h-10 rounded-lg text-white border border-red bg-black'>Connect with me</button></div>

                    <div className='w-full flex justify-center '>
                        {/* <img src={rocket} className='h-16 transition-all animate-bounce' /> */}
                        <div className='animate-bounce text-xl font-semibold'>Swipe Up</div>
                    </div>
                </div>




            </div>


        </div>
    )
}
