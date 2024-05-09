import React from 'react'

export default function About() {
    return (
        <div className=' my-16 flex justify-center items-center'>
            <div className='  h-4/5 lg:w-3/5 flex flex-col gap-10'>
                <div className='h-auto flex justify-center'><img src="./assets/intro.png" className=' shadow-sm rounded-full  h-36            lg:h-40' /></div>
                <div className='h-auto flex justify-center'>
                    <h1 className='text-4xl  sm:text-4xl  lg:text-6xl   lg:w-1/2 text-center font-bold'> Innovation through <span className='text-yellow-600 font-serif'>programming</span>   </h1>
                </div>
                <div className='text-sm p-5 w-full lg:px-28 text-center' >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </div>
                <div className='flex gap-10 justify-center'>
                    <img src="./assets/Icons/insta.png" className='h-8  cursor-pointer' alt='x' />
                    <img src="./assets/Icons/fb.png" className='h-8 cursor-pointer' alt='x' />
                    <img src="./assets/Icons/git.png" className='h-8 cursor-pointer' alt='x' />
                    <img src="./assets/Icons/x.png" className='h-8 cursor-pointer' alt='x' />
                    <img src="./assets/Icons/link.png" className='h-8 cursor-pointer' alt='x' />

                </div>

            </div>
        </div>
    )
}
