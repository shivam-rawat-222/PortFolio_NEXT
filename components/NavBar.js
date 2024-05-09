import React, { useState } from 'react'


// import { HashLink as Link } from 'react-router-hash-link';
import { GiHamburgerMenu } from "react-icons/gi";
export default function NavBar() {

    function showburger() {
        if (burger == true) { setburger(false) }

        else if (burger == false) { setburger(true) }
    }
    const [burger, setburger] = useState(false);
    return (
        <div className=' personal-nav bg-navcolor flex items-center  justify-between lg:px-28  h-[80px]'>
            <div className=' ml-5 md:ml-0'>
                <a href='#' className='text-black font-semibold text-xl'> shivam@rawat.com</a>
            </div>
            <div className=' md:flex gap-10 not-italic items-center font-medium  '>
                <a href="#Home" className=' text-black text- md:block hidden hover:text-navbutton'>Work</a>
                <a href="#About" className=' text-black md:block hidden hover:text-navbutton'>Resume</a>
                <a href="#Home" className='  text-black md:block hidden hover:text-navbutton'>Projects</a>
                <a href="#Home" className='  text-black md:block hidden hover:text-navbutton'>Connect</a>

                <div className='flex gap-4'>






                </div>
                <button onClick={showburger} className='block md:hidden  mr-4'><GiHamburgerMenu /></button>
                {(burger) && (<div className='md:hidden absolute top-20 h-screen min-w-64 bg-navcolor right-0 transition-all'></div>)}



            </div>



        </div>
    )
}
